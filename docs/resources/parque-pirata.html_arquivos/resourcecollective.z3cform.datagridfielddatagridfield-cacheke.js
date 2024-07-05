
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - ++resource++collective.z3cform.datagridfield/datagridfield.js - */
/*global window, console*/

jQuery(function($) {

    // No globals, dude!
    "use strict";

    // Local singleton object containing our functions
    var dataGridField2Functions = {};

    dataGridField2Functions.getInputOrSelect = function(node) {
        /* Get the (first) input or select form element under the given node */

        var inputs = node.getElementsByTagName("input");
        if(inputs.length > 0) {
            return inputs[0];
        }

        var selects = node.getElementsByTagName("select");
        if(selects.length > 0) {
            return selects[0];
        }

        return null;
    };

    dataGridField2Functions.getWidgetRows = function(currnode) {
        /* Return primary nodes with class of datagridwidget-row,
           they can be any tag: tr, div, etc. */
        var tbody = this.getParentByClass(currnode, "datagridwidget-body");
        return this.getRows(tbody);
    };

    dataGridField2Functions.getRows = function(tbody) {
        /* Return primary nodes with class of datagridwidget-row,
           they can be any tag: tr, div, etc. */

        var rows = $(tbody).children('.datagridwidget-row');

        return rows;
    };


    /**
     * Get all visible rows of DGF
     *
     * Incl. normal rows + AA row
     */
    dataGridField2Functions.getVisibleRows = function(tbody) {

        var rows = this.getRows(tbody);
        // We rape jQuery.filter here, because of
        // IE8 Array.filter http://kangax.github.com/es5-compat-table/

        // Consider "real" rows only
        var filteredRows = $(rows).filter(function() {
            var $tr = $(this);
            return !$tr.hasClass("datagridwidget-empty-row");
        });

        return filteredRows;
    };

    /**
     * Handle auto insert events by auto append
     */
    dataGridField2Functions.onInsert = function(e) {
        var currnode = e.currentTarget;
        this.autoInsertRow(currnode);
    },

    /**
     * Add a new row when changing the last row
     *
     * @param {Boolean} ensureMinimumRows we insert a special minimum row so the widget is not empty
     */
    dataGridField2Functions.autoInsertRow = function(currnode, ensureMinimumRows) {

        // fetch required data structure
        var dgf = $(dataGridField2Functions.getParentByClass(currnode, "datagridwidget-table-view"));
        var tbody = dataGridField2Functions.getParentByClass(currnode, "datagridwidget-body");
        var thisRow = dataGridField2Functions.getParentRow(currnode); // The new row we are working on
        var $thisRow = $(thisRow);

        var autoAppendMode = $(tbody).data("auto-append");

        if($thisRow.hasClass("minimum-row")) {
            // The change event was not triggered on real AA row,
            // but on a minimum ensured row (row 0).
            // 1. Don't add new row
            // 2. Make widget to "normal" state now as the user has edited the empty row so we assume it's a real row
            this.supressEnsureMinimum(tbody);
            return;
        }

        // Remove the auto-append functionality from the all rows in this widget
        var autoAppendHandlers = dgf.find('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell');
        autoAppendHandlers.unbind('change.dgf');
        $thisRow.removeClass('auto-append');

        // Create a new row
        var newtr = dataGridField2Functions.createNewRow(thisRow), $newtr = $(newtr);
        // Add auto-append functionality to our new row
        $newtr.addClass('auto-append');

        /* Put new row to DOM tree after our current row.  Do this before
         * reindexing to ensure that any Javascript we insert that depends on
         * DOM element IDs (such as plone.formwidget.autocomplete) will
         * pick up this row before any IDs get changed.  At this point,
         * we techinically have duplicate TT IDs in our document
         * (one for this new row, one for the hidden row), but jQuery
         * selectors will pick up elements in this new row first.
         */

        dgf.trigger("beforeaddrowauto", [dgf, newtr]);

        if(ensureMinimumRows) {
            // Add a special class so we can later deal with it
            $newtr.addClass("minimum-row");
            $newtr.insertBefore(thisRow);
        } else {
            $newtr.insertAfter(thisRow);
        }

        // Re-enable auto-append change handler feature on the new auto-appended row
        if(autoAppendMode) {
            $(dgf).find('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell').bind("change.dgf", $.proxy(dataGridField2Functions.onInsert, dataGridField2Functions));
        }

        dataGridField2Functions.reindexRow(tbody, newtr, 'AA');

        // Update order index to give rows correct values
        dataGridField2Functions.updateOrderIndex(tbody, true, ensureMinimumRows);

        dgf.trigger("afteraddrowauto", [dgf, newtr]);
    };

    /**
     * Creates a new row after the the target row.
     *
     * @param {Object} currnode DOM <tr>
     */
    dataGridField2Functions.addRowAfter = function(currnode) {

        // fetch required data structure
        var tbody = this.getParentByClass(currnode, "datagridwidget-body");
        var dgf = $(dataGridField2Functions.getParentByClass(currnode, "datagridwidget-table-view"));

        var thisRow = this.getParentRow(currnode);

        var newtr = this.createNewRow(thisRow);

        dgf.trigger("beforeaddrow", [dgf, newtr]);

        var filteredRows = this.getVisibleRows(currnode);

        // If using auto-append we add the "real" row before AA
        // We have a special case when there is only one visible in the gid
        if (thisRow.hasClass('auto-append') && !thisRow.hasClass("minimum-row")) {
            $(newtr).insertBefore(thisRow);
        } else {
            $(newtr).insertAfter(thisRow);
        }

        // Ensure minimum special behavior is no longer needed as we have now at least 2 rows
        if(thisRow.hasClass("minimum-row")) {
            this.supressEnsureMinimum(tbody);
        }

        // update orderindex hidden fields
        this.updateOrderIndex(tbody, true);

        dgf.trigger("afteraddrow", [dgf, newtr]);

    };

    /**
     * Creates a new row.
     *
     * The row is not inserted to the table, but is returned.
     *
     * @param {Object} <tr> or <tbody> DOM node in a table where we'll be adding the new row
     */
    dataGridField2Functions.createNewRow = function(node) {

        var tbody = this.getParentByClass(node, "datagridwidget-body");

        // hidden template row
        var emptyRow = $(tbody).children('.datagridwidget-empty-row').first();

        if(emptyRow.size() === 0) {
            // Ghetto assert()
            throw new Error("Could not locate empty template row in DGF");
        }

        var new_row = emptyRow.clone(true).removeClass('datagridwidget-empty-row');

        return new_row;
    };


    dataGridField2Functions.removeFieldRow = function(node) {
        /* Remove the row in which the given node is found */
        var tbody = this.getParentByClass(node, "datagridwidget-body");
        var row = this.getParentRow(node);
        $(row).remove();
        this.updateOrderIndex(tbody,false);
    };

    dataGridField2Functions.moveRow = function(currnode, direction){
        /* Move the given row down one */
        var nextRow;

        var dgf = $(dataGridField2Functions.getParentByClass(currnode, "datagridwidget-table-view"));

        var tbody = this.getParentByClass(currnode, "datagridwidget-body");

        var rows = this.getWidgetRows(currnode);

        var row = this.getParentRow(currnode);
        if(!row) {
            throw new Error("Couldn't find DataGridWidget row");
        }

        var idx = null;

        // We can't use nextSibling because of blank text nodes in some browsers
        // Need to find the index of the row

        rows.each(function (i) {
            if (this == row[0]) {
                idx = i;
            }
        });

        // Abort if the current row wasn't found
        if (idx == null)
            return;


        // The up and down should cycle through the rows, excluding the auto-append and
        // empty-row rows.
        var validrows = 0;
        rows.each(function (i) {
            if (!$(this).hasClass('datagridwidget-empty-row') && !$(this).hasClass('auto-append')) {
                validrows+=1;
            }
        });

        if (idx+1 == validrows) {
            if (direction == "down") {
                this.moveRowToTop(row);
            } else {
                nextRow = rows[idx-1];
                this.shiftRow(nextRow, row);
            }

        } else if (idx === 0) {
            if (direction == "up") {
                this.moveRowToBottom(row);
            } else {
                nextRow = rows[parseInt(idx+1, 10)];
                this.shiftRow(row, nextRow);
            }

        } else {
            if (direction == "up") {
                nextRow = rows[idx-1];
                this.shiftRow(nextRow, row);
            } else {
                nextRow = rows[parseInt(idx+1, 10)];
                this.shiftRow(row, nextRow);
            }
        }

        this.updateOrderIndex(tbody);

        dgf.trigger("aftermoverow", [dgf, row]);
    };

    dataGridField2Functions.moveRowDown = function(currnode){
        this.moveRow(currnode, "down");
    };

    dataGridField2Functions.moveRowUp = function(currnode){
        this.moveRow(currnode, "up");
    };

    dataGridField2Functions.shiftRow = function(bottom, top){
        /* Put node top before node bottom */
        $(top).insertBefore(bottom);
    };

    dataGridField2Functions.moveRowToTop = function (row) {
        var rows = this.getWidgetRows(row);
        $(row).insertBefore(rows[0]);
    };

    dataGridField2Functions.moveRowToBottom = function (row) {
        var rows = this.getWidgetRows(row);

        // make sure we insert the directly above any auto appended rows
        var insert_after = 0;
        rows.each(function (i) {
            if (!$(this).hasClass('datagridwidget-empty-row')  && !$(this).hasClass('auto-append')) {
                insert_after = i;
            }
        });
        $(row).insertAfter(rows[insert_after]);
    };

    /**
     * Fixup all attributes on all child elements that contain
     * the row index. The following attributes are scanned:
     * - name
     * - id
     * - for
     * - href
     * - data-fieldname
     *
     * On the server side, the DGF logic will rebuild rows based
     * on this information.
     *
     * If indexing for some reasons fails you'll get double
     * input values and Zope converts inputs to list, failing
     * in funny ways.
     *
     * @param  {DOM} tbody
     * @param  {DOM} row
     * @param  {Number} newindex
     */
    dataGridField2Functions.reindexRow = function (tbody, row, newindex) {
        var name_prefix = $(tbody).data('name_prefix') + '.';
        var id_prefix = $(tbody).data('id_prefix') + '-';
        var $row = $(row);
        var oldindex = $row.data('index');

        function replaceIndex(el, attr, prefix) {
            if (el.attr(attr)) {
                var val = el.attr(attr);
                var pattern = new RegExp('^' + prefix + oldindex);
                el.attr(attr, val.replace(pattern, prefix + newindex));
                if (attr.indexOf('data-') === 0) {
                    var key = attr.substr(5);
                    var data = el.data(key);
                    el.data(key, data.replace(pattern, prefix + newindex));
                }
            }
        }

        // update index data
        $row.data('index', newindex);
        $row.attr('data-index', newindex);

        $row.find('[id^="formfield-' + id_prefix + '"]').each(function(i, el) {
            replaceIndex($(el), 'id', 'formfield-' + id_prefix);
        });

        $row.find('[name^="' + name_prefix +'"]').each(function(i, el) {
            replaceIndex($(el), 'name', name_prefix);
        });

        $row.find('[id^="' + id_prefix +'"]').each(function(i, el) {
            replaceIndex($(el), 'id', id_prefix);
        });

        $row.find('[for^="' + id_prefix +'"]').each(function(i, el) {
            replaceIndex($(el), 'for', id_prefix);
        });

        $row.find('[href*="#' + id_prefix +'"]').each(function(i, el){
            replaceIndex($(el), 'href', '#' + id_prefix);
        });

        $row.find('[data-fieldname^="' + name_prefix + '"]').each(function(i, el) {
            replaceIndex($(el), 'data-fieldname', name_prefix);
        });
    };

    /**
     * Stop ensure miminum special behavior.
     *
     * The caller is responsible to check there was one and only one minimum-row in the table.
     *
     * Call when data is edited for the first time or a row added.
     */
    dataGridField2Functions.supressEnsureMinimum = function(tbody) {

        var autoAppendHandlers = $(tbody).find('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell');
        autoAppendHandlers.unbind('change.dgf');

        tbody.children().removeClass("auto-append");
        tbody.children().removeClass("minimum-row");


        dataGridField2Functions.updateOrderIndex(tbody, true, false);
    };

    /**
     * Update all row indexes on a DGF table.
     *
     * Each <tr> and input widget has recalculated row index number in its name,
     * so that the server can then parsit the submitted data in the correct order.
     *
     * @param  {Object} tbody     DOM of DGF <tbody>
     * @param  {Boolean} backwards iterate rows backwards
     * @param  {Boolean} ensureMinimumRows We have inserted a special auto-append row
     */
    dataGridField2Functions.updateOrderIndex = function (tbody, backwards, ensureMinimumRows) {

        var $tbody = $(tbody);
        var name_prefix = $tbody.attr('data-name_prefix') + '.';
        var i, idx, row, $row, $nextRow;

        // Was this auto-append table
        var autoAppend = false;

        var rows = this.getRows(tbody);
        for (i=0; i<rows.length; i++) {
            idx = backwards ? rows.length-i-1 : i;
            row = rows[idx], $row = $(row);

            if ($row.hasClass('datagridwidget-empty-row')) {
                continue;
            }

            if($row.hasClass('auto-append')) {
                autoAppend = true;
            }

            this.reindexRow(tbody, row, idx);
        }

        // Handle a special case where
        // 1. Widget is empty
        // 2. We don't have AA mode turned on
        // 3. We need to have minimum editable row count of 1
        if(ensureMinimumRows) {
            this.reindexRow(tbody, rows[0], "AA");
            autoAppend = true;
        }

        // Add a special first and class row classes
        // to hide manipulation handles
        // AA handling is different once again
        var visibleRows = this.getVisibleRows(tbody);

        for (i=0; i<visibleRows.length; i++) {
            row = visibleRows[i], $row = $(row);

            if(i<visibleRows.length-2) {
                $nextRow = $(visibleRows[i+1]);
            }

            if(i===0) {
                $row.addClass("datagridfield-first-filled-row");
            } else {
                $row.removeClass("datagridfield-first-filled-row");
            }

            // Last visible before AA
            if(autoAppend) {
                if($nextRow && $nextRow.hasClass("auto-append")) {
                    $row.addClass("datagridfield-last-filled-row");
                } else {
                    $row.removeClass("datagridfield-last-filled-row");
                }
            } else {
                if(i==visibleRows.length-1) {
                    $row.addClass("datagridfield-last-filled-row");
                } else {
                    $row.removeClass("datagridfield-last-filled-row");
                }
            }
        }


        // Set total visible row counts and such and hint CSS
        var vis = this.getVisibleRows(tbody).length;
        $tbody.attr("data-count", this.getRows(tbody).length);
        $tbody.attr("data-visible-count", this.getVisibleRows(tbody).length);
        $tbody.attr("data-many-rows", vis >= 2 ? "true" : "false");

        $(document).find('input[name="' + name_prefix + 'count"]').each(function(){
            // do not include the TT and the AA rows in the count
            var count = rows.length;
            if ($(rows[count-1]).hasClass('datagridwidget-empty-row')) {
                count--;
            }
            if ($(rows[count-1]).hasClass('auto-append')) {
                count--;
            }
            this.value = count;
        });
    };

    dataGridField2Functions.getParentElement = function(currnode, tagname) {
        /* Find the first parent node with the given tag name */

        tagname = tagname.toUpperCase();
        var parent = currnode.parentNode;

        while(parent.tagName.toUpperCase() != tagname) {
            parent = parent.parentNode;
            // Next line is a safety belt
            if(parent.tagName.toUpperCase() == "BODY")
                return null;
        }

        return parent;
    };

    dataGridField2Functions.getParentRow = function (node) {
        return this.getParentByClass(node, 'datagridwidget-row');
    };

    dataGridField2Functions.getParentByClass = function(node, klass) {
        var parent = $(node).closest("." + klass);

        if (parent.length) {
            return parent;
        }

        return null;
    };

    /**
     * Find the first parent node with the given id
     *
     * Id is partially matched: the beginning of
     * an element id matches parameter id string.
     *
     * @param  {DOM} currnode Node where ascending in DOM tree beings
     * @param  {String} id       Id string to look for.
     * @return {DOM} Found node or null
     */
    dataGridField2Functions.getParentElementById = function(currnode, id) {
        /*
        */

        id = id.toLowerCase();
        var parent = currnode.parentNode;

        while(true) {

            var parentId = parent.getAttribute("id");
            if(parentId) {
                 if(parentId.toLowerCase().substring(0, id.length) == id) break;
            }

            parent = parent.parentNode;
            // Next line is a safety belt
            if(parent.tagName.toUpperCase() == "BODY")
                return null;
        }

        return parent;
    };


    /**
     * Make sure there is at least one visible row available in DGF
     * to edit in all the time.
     *
     * We need a lot of special logic for the case where
     * we have empty datagridfield and need to have one OPTIONAL
     * row present there for the editing when the user opens
     * the form for the first time.
     *
     * There are cases where one doesn't want to have the count of DGF
     * rows to go down to zero. Otherwise there no insert handle left
     * on the edit mode and the user cannot add any more rows.
     *
     * One should case is when
     *
     * - DGF is empty on new form
     *
     * - Auto append is set to false (initial row is not visible)
     *
     * We fix this situation by checking the available rows
     * and generating one empty AA row if needed.
     *
     * ... or simply when the user removes all the rows
     *
     * @param {Object} tbody DOM object of <tbody>
     */
    dataGridField2Functions.ensureMinimumRows = function(tbody) {
        var rows = this.getRows(tbody);
        var filteredRows = this.getVisibleRows(tbody);
        var self = this;

        // Rows = 0 -> make one AA row available
        if(filteredRows.length === 0) {
            // XXX: make the function call signatures more sane
            var child = rows[0];
            this.autoInsertRow(child, true);

        }
    },


    /**
     * When DOM model is ready execute this actions to wire up page logic.
     */
    dataGridField2Functions.init = function() {

        // Reindex all rows to get proper row classes on them
        $(".datagridwidget-body").each(function() {

            // Initialize widget data on <tbody>
            // We keep some mode attributes around
            var $this = $(this);
            var aa;

            // Check if this widget is in auto-append mode
            // and store for later usage
            aa = $this.children(".auto-append").size() > 0;
            $this.data("auto-append", aa);

            // Hint CSS
            if(aa) {
                $this.addClass("datagridwidget-body-auto-append");
            } else {
                $this.addClass("datagridwidget-body-non-auto-append");
            }

            dataGridField2Functions.updateOrderIndex(this, false);

            if(!aa) {
                dataGridField2Functions.ensureMinimumRows(this);
            }
        });

        // Bind the handlers to the auto append rows
        // Use namespaced jQuery events to avoid unbind() conflicts later on
        $('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell').bind("change.dgf", $.proxy(dataGridField2Functions.onInsert, dataGridField2Functions));

        $(document).trigger("afterdatagridfieldinit");
    };


    $(document).ready(dataGridField2Functions.init);

    // Export module for customizers to mess around
    window.dataGridField2Functions = dataGridField2Functions;


});


/* - ++resource++portalmodelo.theme/scripts/base.js - */
$(document).ready(function() {
    //Set width for parliamentarian list item based on its image size.
    var parlamentarWidth = parseInt($('.tile-parlamentares img').attr('width'));
    $('.tile-parlamentares .list-item').css('width', parlamentarWidth/2 + parlamentarWidth);
});


/* - ++resource++plone.formwidget.recurrence/jquery.tmpl-beta1.js - */
// https://www.curitiba.pr.leg.br/portal_javascripts/++resource++plone.formwidget.recurrence/jquery.tmpl-beta1.js?original=1
(function(jQuery,undefined){var oldManip=jQuery.fn.domManip,tmplItmAtt="_tmplitem",htmlExpr=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,newTmplItems={},wrappedItems={},appendToTmplItems,topTmplItem={key:0,data:{}},itemKey=0,cloneIndex=0,stack=[];
function newTmplItem(options,parentItem,fn,data){var newItem={data:data||(parentItem?parentItem.data:{}),_wrap:parentItem?parentItem._wrap:null,tmpl:null,parent:parentItem||null,nodes:[],calls:tiCalls,nest:tiNest,wrap:tiWrap,html:tiHtml,update:tiUpdate};if(options){jQuery.extend(newItem,options,{nodes:[],parent:parentItem})}
if(fn){newItem.tmpl=fn;newItem._ctnt=newItem._ctnt||newItem.tmpl(jQuery,newItem);newItem.key=++itemKey;(stack.length?wrappedItems:newTmplItems)[itemKey]=newItem}
return newItem}
jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"}, function(name,original){jQuery.fn[name]=function(selector){var ret=[],insert=jQuery(selector),elems,i,l,tmplItems,parent=this.length===1&&this[0].parentNode;appendToTmplItems=newTmplItems||{};if(parent&&parent.nodeType===11&&parent.childNodes.length===1&&insert.length===1){insert[original](this[0]);ret=this} else{for(i=0,l=insert.length;i<l;i++){cloneIndex=i;elems=(i>0?this.clone(true):this).get();jQuery.fn[original].apply(jQuery(insert[i]),elems);ret=ret.concat(elems)}
cloneIndex=0;ret=this.pushStack(ret,name,insert.selector)}
tmplItems=appendToTmplItems;appendToTmplItems=null;jQuery.tmpl.complete(tmplItems);return ret}});jQuery.fn.extend({tmpl: function(data,options,parentItem){return jQuery.tmpl(this[0],data,options,parentItem)},tmplItem: function(){return jQuery.tmplItem(this[0])},template: function(name){return jQuery.template(name,this[0])},domManip: function(args,table,callback,options){if(args[0]&&args[0].nodeType){var dmArgs=jQuery.makeArray(arguments),argsLength=args.length,i=0,tmplItem;while(i<argsLength&&!(tmplItem=jQuery.data(args[i++],"tmplItem"))){}
if(argsLength>1){dmArgs[0]=[jQuery.makeArray(args)]}
if(tmplItem&&cloneIndex){dmArgs[2]=function(fragClone){jQuery.tmpl.afterManip(this,fragClone,callback)}}
oldManip.apply(this,dmArgs)} else{oldManip.apply(this,arguments)}
cloneIndex=0;if(!appendToTmplItems){jQuery.tmpl.complete(newTmplItems)}
return this}});jQuery.extend({tmpl: function(tmpl,data,options,parentItem){var ret,topLevel=!parentItem;if(topLevel){parentItem=topTmplItem;tmpl=jQuery.template[tmpl]||jQuery.template(null,tmpl);wrappedItems={}} else if(!tmpl){tmpl=parentItem.tmpl;newTmplItems[parentItem.key]=parentItem;parentItem.nodes=[];if(parentItem.wrapped){updateWrapped(parentItem,parentItem.wrapped)}
return jQuery(build(parentItem,null,parentItem.tmpl(jQuery,parentItem)))}
if(!tmpl){return []}
if(typeof data==="function"){data=data.call(parentItem||{})}
if(options&&options.wrapped){updateWrapped(options,options.wrapped)}
ret=jQuery.isArray(data)?jQuery.map(data, function(dataItem){return dataItem?newTmplItem(options,parentItem,tmpl,dataItem):null}):[newTmplItem(options,parentItem,tmpl,data)];return topLevel?jQuery(build(parentItem,null,ret)):ret},tmplItem: function(elem){var tmplItem;if(elem instanceof jQuery){elem=elem[0]}
while(elem&&elem.nodeType===1&&!(tmplItem=jQuery.data(elem,"tmplItem"))&&(elem=elem.parentNode)){}
return tmplItem||topTmplItem},template: function(name,tmpl){if(tmpl){if(typeof tmpl==="string"){tmpl=buildTmplFn(tmpl)} else if(tmpl instanceof jQuery){tmpl=tmpl[0]||{}}
if(tmpl.nodeType){tmpl=jQuery.data(tmpl,"tmpl")||jQuery.data(tmpl,"tmpl",buildTmplFn(tmpl.innerHTML))}
return typeof name==="string"?(jQuery.template[name]=tmpl):tmpl}
return name?(typeof name!=="string"?jQuery.template(null,name):(jQuery.template[name]||jQuery.template(null,htmlExpr.test(name)?name:jQuery(name)))):null},encode: function(text){return(""+text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});jQuery.extend(jQuery.tmpl,{tag:{"tmpl":{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},"wrap":{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},"each":{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},"html":{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete: function(items){newTmplItems={}},afterManip: function afterManip(elem,fragClone,callback){var content=fragClone.nodeType===11?jQuery.makeArray(fragClone.childNodes):fragClone.nodeType===1?[fragClone]:[];callback.call(elem,fragClone);storeTmplItems(content);cloneIndex++}});
function build(tmplItem,nested,content){var frag,ret=content?jQuery.map(content, function(item){return(typeof item==="string")?(tmplItem.key?item.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+tmplItmAtt+"=\""+tmplItem.key+"\" $2"):item):build(item,tmplItem,item._ctnt)}):tmplItem;if(nested){return ret}
ret=ret.join("");ret.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function(all,before,middle,after){frag=jQuery(middle).get();storeTmplItems(frag);if(before){frag=unencode(before).concat(frag)}
if(after){frag=frag.concat(unencode(after))}});return frag?frag:unencode(ret)}
function unencode(text){var el=document.createElement("div");el.innerHTML=text;return jQuery.makeArray(el.childNodes)}
function buildTmplFn(markup){return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;"+"with($data){_.push('"+jQuery.trim(markup).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
function(all,slash,type,fnargs,target,parens,args){var tag=jQuery.tmpl.tag[type],def,expr,exprAutoFnDetect;if(!tag){throw "Template command not found: "+type}
def=tag._default||[];if(parens&&!/\w$/.test(target)){target+=parens;parens=""}
if(target){target=unescape(target);args=args?(","+unescape(args)+")"):(parens?")":"");expr=parens?(target.indexOf(".")>-1?target+parens:("("+target+").call($item"+args)):target;exprAutoFnDetect=parens?expr:"(typeof("+target+")==='function'?("+target+").call($item):("+target+"))"} else{exprAutoFnDetect=expr=def.$1||"null"}
fnargs=unescape(fnargs);return "');"+tag[slash?"close":"open"].split("$notnull_1").join(target?"typeof("+target+")!=='undefined' && ("+target+")!=null":"true").split("$1a").join(exprAutoFnDetect).split("$1").join(expr).split("$2").join(fnargs?fnargs.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g, function(all,name,parens,params){params=params?(","+params+")"):(parens?")":"");return params?("("+name+").call($item"+params):all}):(def.$2||""))+"_.push('"})+"');}return _;")}
function updateWrapped(options,wrapped){options._wrap=build(options,true,jQuery.isArray(wrapped)?wrapped:[htmlExpr.test(wrapped)?wrapped:jQuery(wrapped).html()]).join("")}
function unescape(args){return args?args.replace(/\\'/g, "'").replace(/\\\\/g, "\\"):null}
function outerHtml(elem){var div=document.createElement("div");div.appendChild(elem.cloneNode(true));return div.innerHTML}
function storeTmplItems(content){var keySuffix="_"+cloneIndex,elem,elems,newClonedItems={},i,l,m;for(i=0,l=content.length;i<l;i++){if((elem=content[i]).nodeType!==1){continue}
elems=elem.getElementsByTagName("*");for(m=elems.length-1;m>=0;m--){processItemKey(elems[m])}
processItemKey(elem)}
function processItemKey(el){var pntKey,pntNode=el,pntItem,tmplItem,key;if((key=el.getAttribute(tmplItmAtt))){while(pntNode.parentNode&&(pntNode=pntNode.parentNode).nodeType===1&&!(pntKey=pntNode.getAttribute(tmplItmAtt))){}
if(pntKey!==key){pntNode=pntNode.parentNode?(pntNode.nodeType===11?0:(pntNode.getAttribute(tmplItmAtt)||0)):0;if(!(tmplItem=newTmplItems[key])){tmplItem=wrappedItems[key];tmplItem=newTmplItem(tmplItem,newTmplItems[pntNode]||wrappedItems[pntNode],null,true);tmplItem.key=++itemKey;newTmplItems[itemKey]=tmplItem}
if(cloneIndex){cloneTmplItem(key)}}
el.removeAttribute(tmplItmAtt)} else if(cloneIndex&&(tmplItem=jQuery.data(el,"tmplItem"))){cloneTmplItem(tmplItem.key);newTmplItems[tmplItem.key]=tmplItem;pntNode=jQuery.data(el.parentNode,"tmplItem");pntNode=pntNode?pntNode.key:0}
if(tmplItem){pntItem=tmplItem;while(pntItem&&pntItem.key!=pntNode){pntItem.nodes.push(el);pntItem=pntItem.parent}
delete tmplItem._ctnt;delete tmplItem._wrap;jQuery.data(el,"tmplItem",tmplItem)}
function cloneTmplItem(key){key=key+keySuffix;tmplItem=newClonedItems[key]=(newClonedItems[key]||newTmplItem(tmplItem,newTmplItems[tmplItem.parent.key+keySuffix]||tmplItem.parent,null,true))}}}
function tiCalls(content,tmpl,data,options){if(!content){return stack.pop()}
stack.push({_:content,tmpl:tmpl,item:this,data:data,options:options})}
function tiNest(tmpl,data,options){return jQuery.tmpl(jQuery.template(tmpl),data,options,this)}
function tiWrap(call,wrapped){var options=call.options||{};options.wrapped=wrapped;return jQuery.tmpl(jQuery.template(call.tmpl),call.data,options,call.item)}
function tiHtml(filter,textOnly){var wrapped=this._wrap;return jQuery.map(jQuery(jQuery.isArray(wrapped)?wrapped.join(""):wrapped).filter(filter||"*"),
function(e){return textOnly?e.innerText||e.textContent:e.outerHTML||outerHtml(e)})}
function tiUpdate(){var coll=this.nodes;jQuery.tmpl(null,null,null,this).insertBefore(coll[0]);jQuery(coll).remove()}})(jQuery);

/* - ++resource++plone.formwidget.recurrence/jquery.recurrenceinput.js - */
// https://www.curitiba.pr.leg.br/portal_javascripts/++resource++plone.formwidget.recurrence/jquery.recurrenceinput.js?original=1
"use strict";(function($){$.tools=$.tools||{version:'@VERSION'};var tool;var LABELS={};tool=$.tools.recurrenceinput={conf:{lang:'en',readOnly:false,firstDay:0,startField:null,startFieldYear:null,startFieldMonth:null,startFieldDay:null,ajaxURL:null,ajaxContentType:'application/json; charset=utf8',ributtonExtraClass:'',hasRepeatForeverButton:true,formOverlay:{speed:'fast',fixed:false},template:{form:'#jquery-recurrenceinput-form-tmpl',display:'#jquery-recurrenceinput-display-tmpl'},rtemplate:{daily:{rrule:'FREQ=DAILY',fields:['ridailyinterval','rirangeoptions']},mondayfriday:{rrule:'FREQ=WEEKLY;BYDAY=MO,FR',fields:['rirangeoptions']},weekdays:{rrule:'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR',fields:['rirangeoptions']},weekly:{rrule:'FREQ=WEEKLY',fields:['riweeklyinterval','riweeklyweekdays','rirangeoptions']},monthly:{rrule:'FREQ=MONTHLY',fields:['rimonthlyinterval','rimonthlyoptions','rirangeoptions']},yearly:{rrule:'FREQ=YEARLY',fields:['riyearlyinterval','riyearlyoptions','rirangeoptions']}}},localize: function(language,labels){LABELS[language]=labels},setTemplates: function(templates,titles){var lang,template;tool.conf.rtemplate=templates;for(lang in titles){if(titles.hasOwnProperty(lang)){for(template in titles[lang]){if(titles[lang].hasOwnProperty(template)){LABELS[lang].rtemplate[template]=titles[lang][template]}}}}}};tool.localize("en",{displayUnactivate:'Does not repeat',displayActivate:'Repeats every',add_rules:'Add',edit_rules:'Edit',delete_rules:'Delete',add:'Add',refresh:'Refresh',title:'Repeat',preview:'Selected dates',addDate:'Add date',recurrenceType:'Repeats:',dailyInterval1:'Repeat every:',dailyInterval2:'days',weeklyInterval1:'Repeat every:',weeklyInterval2:'week(s)',weeklyWeekdays:'Repeat on:',weeklyWeekdaysHuman:'on:',monthlyInterval1:'Repeat every:',monthlyInterval2:'month(s)',monthlyDayOfMonth1:'Day',monthlyDayOfMonth1Human:'on day',monthlyDayOfMonth2:'of the month',monthlyDayOfMonth3:'month(s)',monthlyWeekdayOfMonth1:'The',monthlyWeekdayOfMonth1Human:'on the',monthlyWeekdayOfMonth2:'',monthlyWeekdayOfMonth3:'of the month',monthlyRepeatOn:'Repeat on:',yearlyInterval1:'Repeat every:',yearlyInterval2:'year(s)',yearlyDayOfMonth1:'Every',yearlyDayOfMonth1Human:'on',yearlyDayOfMonth2:'',yearlyDayOfMonth3:'',yearlyWeekdayOfMonth1:'The',yearlyWeekdayOfMonth1Human:'on the',yearlyWeekdayOfMonth2:'',yearlyWeekdayOfMonth3:'of',yearlyWeekdayOfMonth4:'',yearlyRepeatOn:'Repeat on:',range:'End recurrence:',rangeNoEnd:'Never',rangeByOccurrences1:'After',rangeByOccurrences1Human:'ends after',rangeByOccurrences2:'occurrence(s)',rangeByEndDate:'On',rangeByEndDateHuman:'ends on',including:', and also',except:', except for',cancel:'Cancel',save:'Save',recurrenceStart:'Start of the recurrence',additionalDate:'Additional date',include:'Include',exclude:'Exclude',remove:'Remove',orderIndexes:['first','second','third','fourth','last'],months:['January','February','March','April','May','June','July','August','September','October','November','December'],shortMonths:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],weekdays:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],shortWeekdays:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],longDateFormat:'mmmm dd, yyyy',shortDateFormat:'mm/dd/yyyy',unsupportedFeatures:'Warning: This event uses recurrence features not '+'supported by this widget. Saving the recurrence '+'may change the recurrence in unintended ways:',noTemplateMatch:'No matching recurrence template',multipleDayOfMonth:'This widget does not support multiple days in monthly or yearly recurrence',bysetpos:'BYSETPOS is not supported',noRule:'No RRULE in RRULE data',noRepeatEvery:'Error: The "Repeat every"-field must be between 1 and 1000',noEndDate:'Error: End date is not set. Please set a correct value',noRepeatOn:'Error: "Repeat on"-value must be selected',pastEndDate:'Error: End date cannot be before start date',noEndAfterNOccurrences:'Error: The "After N occurrences"-field must be between 1 and 1000',alreadyAdded:'This date was already added',rtemplate:{daily:'Daily',mondayfriday:'Monday and Friday',weekdays:'Weekday',weekly:'Weekly',monthly:'Monthly',yearly:'Yearly'}});var OCCURRENCETMPL=['<div class="rioccurrences">','{{each occurrences}}','<div class="occurrence ${occurrences[$index].type}">','<span>','${occurrences[$index].formattedDate}','{{if occurrences[$index].type === "start"}}','<span class="rlabel">${i18n.recurrenceStart}</span>','{{/if}}','{{if occurrences[$index].type === "rdate"}}','<span class="rlabel">${i18n.additionalDate}</span>','{{/if}}','</span>','{{if !readOnly}}','<span class="action">','{{if occurrences[$index].type === "rrule"}}','<a date="${occurrences[$index].date}" href="#"','class="${occurrences[$index].type}" title="${i18n.exclude}">','${i18n.exclude}','</a>','{{/if}}','{{if occurrences[$index].type === "rdate"}}','<a date="${occurrences[$index].date}" href="#"','class="${occurrences[$index].type}" title="${i18n.remove}" >','${i18n.remove}','</a>','{{/if}}','{{if occurrences[$index].type === "exdate"}}','<a date="${occurrences[$index].date}" href="#"','class="${occurrences[$index].type}" title="${i18n.include}">','${i18n.include}','</a>','{{/if}}','</span>','{{/if}}','</div>','{{/each}}','<div class="batching">','{{each batch.batches}}','{{if $index === batch.currentBatch}}<span class="current">{{/if}}','<a href="#" start="${batch.batches[$index][0]}">[${batch.batches[$index][0]} - ${batch.batches[$index][1]}]</a>','{{if $index === batch.currentBatch}}</span>{{/if}}','{{/each}}','</div></div>'].join('\n');$.template('occurrenceTmpl',OCCURRENCETMPL);var DISPLAYTMPL=['<div class="ridisplay">','<div class="rimain">','{{if !readOnly}}','<a href="#" name="riedit">${i18n.add_rules}</a>','<a href="#" name="ridelete" style="display:none">${i18n.delete_rules}</a>','{{/if}}','<label class="ridisplay">${i18n.displayUnactivate}</label>','</div>','<div class="rioccurrences" style="display:none" /></div>'].join('\n');$.template('displayTmpl',DISPLAYTMPL);var FORMTMPL=['<div class="riform">','<form>','<h1>${i18n.title}</h1>','<div id="messagearea" style="display: none;">','</div>','<div id="rirtemplate">','<label for="${name}rtemplate" class="label">','${i18n.recurrenceType}','</label>','<select id="rirtemplate" name="rirtemplate" class="field">','{{each rtemplate}}','<option value="${$index}">${i18n.rtemplate[$index]}</value>','{{/each}}','</select>','<div>','<div id="riformfields">','<div id="ridailyinterval" class="rifield">','<label for="${name}dailyinterval" class="label">','${i18n.dailyInterval1}','</label>','<div class="field">','<input type="text" size="2"','value="1"','name="ridailyinterval"','id="${name}dailyinterval" />','${i18n.dailyInterval2}','</div>','</div>','<div id="riweeklyinterval" class="rifield">','<label for="${name}weeklyinterval" class="label">','${i18n.weeklyInterval1}','</label>','<div class="field">','<input type="text" size="2"','value="1"','name="riweeklyinterval"','id="${name}weeklyinterval"/>','${i18n.weeklyInterval2}','</div>','</div>','<div id="riweeklyweekdays" class="rifield">','<label for="${name}weeklyinterval" class="label">${i18n.weeklyWeekdays}</label>','<div class="field">','{{each orderedWeekdays}}','<div class="riweeklyweekday">','<input type="checkbox"','name="riweeklyweekdays${weekdays[$value]}"','id="${name}weeklyWeekdays${weekdays[$value]}"','value="${weekdays[$value]}" />','<label for="${name}weeklyWeekdays${weekdays[$value]}">${i18n.shortWeekdays[$value]}</label>','</div>','{{/each}}','</div>','</div>','<div id="rimonthlyinterval" class="rifield">','<label for="rimonthlyinterval" class="label">${i18n.monthlyInterval1}</label>','<div class="field">','<input type="text" size="2"','value="1" ','name="rimonthlyinterval"/>','${i18n.monthlyInterval2}','</div>','</div>','<div id="rimonthlyoptions" class="rifield">','<label for="rimonthlytype" class="label">${i18n.monthlyRepeatOn}</label>','<div class="field">','<div>','<input','type="radio"','value="DAYOFMONTH"','name="rimonthlytype"','id="${name}monthlytype:DAYOFMONTH" />','<label for="${name}monthlytype:DAYOFMONTH">','${i18n.monthlyDayOfMonth1}','</label>','<select name="rimonthlydayofmonthday"','id="${name}monthlydayofmonthday">','{{each [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,','18,19,20,21,22,23,24,25,26,27,28,29,30,31]}}','<option value="${$value}">${$value}</option>','{{/each}}','</select>','${i18n.monthlyDayOfMonth2}','</div>','<div>','<input','type="radio"','value="WEEKDAYOFMONTH"','name="rimonthlytype"','id="${name}monthlytype:WEEKDAYOFMONTH" />','<label for="${name}monthlytype:WEEKDAYOFMONTH">','${i18n.monthlyWeekdayOfMonth1}','</label>','<select name="rimonthlyweekdayofmonthindex">','{{each i18n.orderIndexes}}','<option value="${orderIndexes[$index]}">${$value}</option>','{{/each}}','</select>','${i18n.monthlyWeekdayOfMonth2}','<select name="rimonthlyweekdayofmonth">','{{each orderedWeekdays}}','<option value="${weekdays[$value]}">${i18n.weekdays[$value]}</option>','{{/each}}','</select>','${i18n.monthlyWeekdayOfMonth3}','</div>','</div>','</div>','<div id="riyearlyinterval" class="rifield">','<label for="riyearlyinterval" class="label">${i18n.yearlyInterval1}</label>','<div class="field">','<input type="text" size="2"','value="1" ','name="riyearlyinterval"/>','${i18n.yearlyInterval2}','</div>','</div>','<div id="riyearlyoptions" class="rifield">','<label for="riyearlyType" class="label">${i18n.yearlyRepeatOn}</label>','<div class="field">','<div>','<input','type="radio"','value="DAYOFMONTH"','name="riyearlyType"','id="${name}yearlytype:DAYOFMONTH" />','<label for="${name}yearlytype:DAYOFMONTH">','${i18n.yearlyDayOfMonth1}','</label>','<select name="riyearlydayofmonthmonth">','{{each i18n.months}}','<option value="${$index+1}">${$value}</option>','{{/each}}','</select>','${i18n.yearlyDayOfMonth2}','<select name="riyearlydayofmonthday">','{{each [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,','18,19,20,21,22,23,24,25,26,27,28,29,30,31]}}','<option value="${$value}">${$value}</option>','{{/each}}','</select>','${i18n.yearlyDayOfMonth3}','</div>','<div>','<input','type="radio"','value="WEEKDAYOFMONTH"','name="riyearlyType"','id="${name}yearlytype:WEEKDAYOFMONTH"/>','<label for="${name}yearlytype:WEEKDAYOFMONTH">','${i18n.yearlyWeekdayOfMonth1}','</label>','<select name="riyearlyweekdayofmonthindex">','{{each i18n.orderIndexes}}','<option value="${orderIndexes[$index]}">${$value}</option>','{{/each}}','</select>','<label for="${name}yearlytype:WEEKDAYOFMONTH">','${i18n.yearlyWeekdayOfMonth2}','</label>','<select name="riyearlyweekdayofmonthday">','{{each orderedWeekdays}}','<option value="${weekdays[$value]}">${i18n.weekdays[$value]}</option>','{{/each}}','</select>','${i18n.yearlyWeekdayOfMonth3}','<select name="riyearlyweekdayofmonthmonth">','{{each i18n.months}}','<option value="${$index+1}">${$value}</option>','{{/each}}','</select>','${i18n.yearlyWeekdayOfMonth4}','</div>','</div>','</div>','<div id="rirangeoptions" class="rifield">','<label class="label">${i18n.range}</label>','<div class="field">','{{if hasRepeatForeverButton}}','<div>','<input','type="radio"','value="NOENDDATE"','name="rirangetype"','id="${name}rangetype:NOENDDATE"/>','<label for="${name}rangetype:NOENDDATE">','${i18n.rangeNoEnd}','</label>','</div>','{{/if}}','<div>','<input','type="radio"','checked="checked"','value="BYOCCURRENCES"','name="rirangetype"','id="${name}rangetype:BYOCCURRENCES"/>','<label for="${name}rangetype:BYOCCURRENCES">','${i18n.rangeByOccurrences1}','</label>','<input','type="text" size="3"','value="7"','name="rirangebyoccurrencesvalue" />','${i18n.rangeByOccurrences2}','</div>','<div>','<input','type="radio"','value="BYENDDATE"','name="rirangetype"','id="${name}rangetype:BYENDDATE"/>','<label for="${name}rangetype:BYENDDATE">','${i18n.rangeByEndDate}','</label>','<input','type="date"','name="rirangebyenddatecalendar" />','</div>','</div>','</div>','</div>','<div class="rioccurrencesactions">','<div class="rioccurancesheader">','<h2>${i18n.preview}</h2>','<span class="refreshbutton action">','<a class="rirefreshbutton" href="#" title="${i18n.refresh}">','${i18n.refresh}','</a>','</span>','</div>','</div>','<div class="rioccurrences">','</div>','<div class="rioccurrencesactions">','<div class="rioccurancesheader">','<h2>${i18n.addDate}</h2>','</div>','<div class="riaddoccurrence">','<div class="errorarea"></div>','<input type="date" name="adddate" id="adddate" />','<input type="button" name="addaction" id="addaction" value="${i18n.add}">','</div>','</div>','<div class="ributtons">','<input','type="submit"','class="ricancelbutton ${ributtonExtraClass}"','value="${i18n.cancel}" />','<input','type="submit"','class="risavebutton ${ributtonExtraClass}"','value="${i18n.save}" />','</div>','</form></div>'].join('\n');$.template('formTmpl',FORMTMPL);var Re=/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g;
function zeropad(val,len){val=val.toString();len=len||2;while(val.length<len){val="0"+val}
return val}
function format(date,fmt,conf){var d=date.getDate(),D=date.getDay(),m=date.getMonth(),y=date.getFullYear(),flags={d:d,dd:zeropad(d),ddd:conf.i18n.shortWeekdays[D],dddd:conf.i18n.weekdays[D],m:m+1,mm:zeropad(m+1),mmm:conf.i18n.shortMonths[m],mmmm:conf.i18n.months[m],yy:String(y).slice(2),yyyy:y};var result=fmt.replace(Re, function($0){return flags.hasOwnProperty($0)?flags[$0]:$0.slice(1,$0.length-1)});return result}
function widgetSaveToRfc5545(form,conf,tz){var value=form.find('select[name=rirtemplate]').val();var rtemplate=conf.rtemplate[value];var result=rtemplate.rrule;var human=conf.i18n.rtemplate[value];var field,input,weekdays,i18nweekdays,i,j,index,tmp;var day,month,year,interval,yearlyType,occurrences,date;for(i=0;i<rtemplate.fields.length;i++){field=form.find('#'+rtemplate.fields[i]);switch(field.attr('id')){case 'ridailyinterval':interval=field.find('input[name=ridailyinterval]').val();if(interval!=='1'){result+=';INTERVAL='+interval}
human=interval+' '+conf.i18n.dailyInterval2;break;case 'riweeklyinterval':interval=field.find('input[name=riweeklyinterval]').val();if(interval!=='1'){result+=';INTERVAL='+interval}
human=interval+' '+conf.i18n.weeklyInterval2;break;case 'riweeklyweekdays':weekdays='';i18nweekdays='';for(j=0;j<conf.weekdays.length;j++){input=field.find('input[name=riweeklyweekdays'+conf.weekdays[j]+']');if(input.is(':checked')){if(weekdays){weekdays+=',';i18nweekdays+=', '}
weekdays+=conf.weekdays[j];i18nweekdays+=conf.i18n.weekdays[j]}}
if(weekdays){result+=';BYDAY='+weekdays;human+=' '+conf.i18n.weeklyWeekdaysHuman+' '+i18nweekdays}
break;case 'rimonthlyinterval':interval=field.find('input[name=rimonthlyinterval]').val();if(interval!=='1'){result+=';INTERVAL='+interval}
human=interval+' '+conf.i18n.monthlyInterval2;break;case 'rimonthlyoptions':var monthlyType=$('input[name=rimonthlytype]:checked',form).val();switch(monthlyType){case 'DAYOFMONTH':day=$('select[name=rimonthlydayofmonthday]',form).val();result+=';BYMONTHDAY='+day;human+=', '+conf.i18n.monthlyDayOfMonth1Human+' '+day+' '+conf.i18n.monthlyDayOfMonth2;break;case 'WEEKDAYOFMONTH':index=$('select[name=rimonthlyweekdayofmonthindex]',form).val();day=$('select[name=rimonthlyweekdayofmonth]',form).val();if($.inArray(day,['MO','TU','WE','TH','FR','SA','SU'])>-1){result+=';BYDAY='+index+day;human+=', '+conf.i18n.monthlyWeekdayOfMonth1Human+' ';human+=' '+conf.i18n.orderIndexes[$.inArray(index,conf.orderIndexes)];human+=' '+conf.i18n.monthlyWeekdayOfMonth2;human+=' '+conf.i18n.weekdays[$.inArray(day,conf.weekdays)];human+=' '+conf.i18n.monthlyDayOfMonth2}
break}
break;case 'riyearlyinterval':interval=field.find('input[name=riyearlyinterval]').val();if(interval!=='1'){result+=';INTERVAL='+interval}
human=interval+' '+conf.i18n.yearlyInterval2;break;case 'riyearlyoptions':yearlyType=$('input[name=riyearlyType]:checked',form).val();switch(yearlyType){case 'DAYOFMONTH':month=$('select[name=riyearlydayofmonthmonth]',form).val();day=$('select[name=riyearlydayofmonthday]',form).val();result+=';BYMONTH='+month;result+=';BYMONTHDAY='+day;human+=', '+conf.i18n.yearlyDayOfMonth1Human+' '+conf.i18n.months[month-1]+' '+day;break;case 'WEEKDAYOFMONTH':index=$('select[name=riyearlyweekdayofmonthindex]',form).val();day=$('select[name=riyearlyweekdayofmonthday]',form).val();month=$('select[name=riyearlyweekdayofmonthmonth]',form).val();result+=';BYMONTH='+month;if($.inArray(day,['MO','TU','WE','TH','FR','SA','SU'])>-1){result+=';BYDAY='+index+day;human+=', '+conf.i18n.yearlyWeekdayOfMonth1Human;human+=' '+conf.i18n.orderIndexes[$.inArray(index,conf.orderIndexes)];human+=' '+conf.i18n.yearlyWeekdayOfMonth2;human+=' '+conf.i18n.weekdays[$.inArray(day,conf.weekdays)];human+=' '+conf.i18n.yearlyWeekdayOfMonth3;human+=' '+conf.i18n.months[month-1];human+=' '+conf.i18n.yearlyWeekdayOfMonth4}
break}
break;case 'rirangeoptions':var rangeType=form.find('input[name=rirangetype]:checked').val();switch(rangeType){case 'BYOCCURRENCES':occurrences=form.find('input[name=rirangebyoccurrencesvalue]').val();result+=';COUNT='+occurrences;human+=', '+conf.i18n.rangeByOccurrences1Human;human+=' '+occurrences;human+=' '+conf.i18n.rangeByOccurrences2;break;case 'BYENDDATE':field=form.find('input[name=rirangebyenddatecalendar]');date=field.data('dateinput').getValue('yyyymmdd');result+=';UNTIL='+date+'T000000';if(tz===true){result+='Z'}
human+=', '+conf.i18n.rangeByEndDateHuman;human+=' '+field.data('dateinput').getValue(conf.i18n.longDateFormat);break}
break}}
if(form.ical.RDATE!==undefined&&form.ical.RDATE.length>0){form.ical.RDATE.sort();tmp=[];for(i=0;i<form.ical.RDATE.length;i++){if(form.ical.RDATE[i]!==''){year=parseInt(form.ical.RDATE[i].substring(0,4),10);month=parseInt(form.ical.RDATE[i].substring(4,6),10)-1;day=parseInt(form.ical.RDATE[i].substring(6,8),10);tmp.push(format(new Date(year,month,day),conf.i18n.longDateFormat,conf))}}
if(tmp.length!==0){human=human+conf.i18n.including+' '+tmp.join('; ')}}
if(form.ical.EXDATE!==undefined&&form.ical.EXDATE.length>0){form.ical.EXDATE.sort();tmp=[];for(i=0;i<form.ical.EXDATE.length;i++){if(form.ical.EXDATE[i]!==''){year=parseInt(form.ical.EXDATE[i].substring(0,4),10);month=parseInt(form.ical.EXDATE[i].substring(4,6),10)-1;day=parseInt(form.ical.EXDATE[i].substring(6,8),10);tmp.push(format(new Date(year,month,day),conf.i18n.longDateFormat,conf))}}
if(tmp.length!==0){human=human+conf.i18n.except+' '+tmp.join('; ')}}
result='RRULE:'+result;if(form.ical.EXDATE!==undefined&&form.ical.EXDATE.join()!==""){tmp=$.map(form.ical.EXDATE, function(x){if(x.length===8){x+='T000000'}
if(tz===true){x+='Z'}
return x});result=result+'\nEXDATE:'+tmp}
if(form.ical.RDATE!==undefined&&form.ical.RDATE.join()!==""){tmp=$.map(form.ical.RDATE, function(x){if(x.length===8){x+='T000000'}
if(tz===true){x+='Z'}
return x});result=result+'\nRDATE:'+tmp}
return{result:result,description:human}}
function parseLine(icalline){var result={};var pos=icalline.indexOf(':');var property=icalline.substring(0,pos);result.value=icalline.substring(pos+1);if(property.indexOf(';')!==-1){pos=property.indexOf(';');result.parameters=property.substring(pos+1);result.property=property.substring(0,pos)} else{result.parameters=null;result.property=property}
return result}
function cleanDates(dates){var result=[];var splitDates=dates.split(',');var date;for(date in splitDates){if(splitDates.hasOwnProperty(date)){if(splitDates[date].indexOf('Z')!==-1){result.push(splitDates[date].substring(0,15))} else{result.push(splitDates[date])}}}
return result}
function parseIcal(icaldata){var lines=[];var result={};var propAndValue=[];var line=null;var nextline;lines=icaldata.split('\n');lines.reverse();while(true){if(lines.length>0){nextline=lines.pop();if(nextline.charAt(0)===' '||nextline.charAt(0)==='\t'){line=line+nextline;continue}} else{nextline=''}
if(line!==null){line=parseLine(line);if(line.property==='RDATE'||line.property==='EXDATE'){result[line.property]=cleanDates(line.value)} else{result[line.property]=line.value}}
line=nextline;if(line===''){break}}
return result}
function widgetLoadFromRfc5545(form,conf,icaldata,force){var unsupportedFeatures=[];var i,matches,match,matchIndex,rtemplate,d,input,index;var selector,selectors,field,radiobutton,start,end;var interval,byday,bymonth,bymonthday,count,until;var day,month,year,weekday,ical;form.ical=parseIcal(icaldata);if(form.ical.RRULE===undefined){unsupportedFeatures.push(conf.i18n.noRule);if(!force){return-1}} else{matches=/INTERVAL=([0-9]+);?/.exec(form.ical.RRULE);if(matches){interval=matches[1]} else{interval='1'}
matches=/BYDAY=([^;]+);?/.exec(form.ical.RRULE);if(matches){byday=matches[1]} else{byday=''}
matches=/BYMONTHDAY=([^;]+);?/.exec(form.ical.RRULE);if(matches){bymonthday=matches[1].split(",")} else{bymonthday=null}
matches=/BYMONTH=([^;]+);?/.exec(form.ical.RRULE);if(matches){bymonth=matches[1].split(",")} else{bymonth=null}
matches=/COUNT=([0-9]+);?/.exec(form.ical.RRULE);if(matches){count=matches[1]} else{count=null}
matches=/UNTIL=([0-9T]+);?/.exec(form.ical.RRULE);if(matches){until=matches[1]} else{until=null}
matches=/BYSETPOS=([^;]+);?/.exec(form.ical.RRULE);if(matches){unsupportedFeatures.push(conf.i18n.bysetpos)}
match='';matchIndex=null;for(i in conf.rtemplate){if(conf.rtemplate.hasOwnProperty(i)){rtemplate=conf.rtemplate[i];if(form.ical.RRULE.indexOf(rtemplate.rrule)===0){if(form.ical.RRULE.length>match.length){match=form.ical.RRULE;matchIndex=i}}}}
if(match){rtemplate=conf.rtemplate[matchIndex];selector=form.find('select[name=rirtemplate]').val(matchIndex)} else{for(rtemplate in conf.rtemplate){if(conf.rtemplate.hasOwnProperty(rtemplate)){rtemplate=conf.rtemplate[rtemplate];break}}
unsupportedFeatures.push(conf.i18n.noTemplateMatch)}
for(i=0;i<rtemplate.fields.length;i++){field=form.find('#'+rtemplate.fields[i]);switch(field.attr('id')){case 'ridailyinterval':field.find('input[name=ridailyinterval]').val(interval);break;case 'riweeklyinterval':field.find('input[name=riweeklyinterval]').val(interval);break;case 'riweeklyweekdays':byday=byday.split(",");for(d=0;d<conf.weekdays.length;d++){day=conf.weekdays[d];input=field.find('input[name=riweeklyweekdays'+day+']');input.attr('checked',$.inArray(day,byday)!==-1)}
break;case 'rimonthlyinterval':field.find('input[name=rimonthlyinterval]').val(interval);break;case 'rimonthlyoptions':var monthlyType='DAYOFMONTH';if(bymonthday){monthlyType='DAYOFMONTH';if(bymonthday.length>1){unsupportedFeatures.push(conf.i18n.multipleDayOfMonth);bymonthday=bymonthday[0]}
field.find('select[name=rimonthlydayofmonthday]').val(bymonthday)}
if(byday){monthlyType='WEEKDAYOFMONTH';if(byday.indexOf(',')!==-1){unsupportedFeatures.push(conf.i18n.multipleDayOfMonth);byday=byday.split(",")[0]}
index=byday.slice(0,-2);if(index.charAt(0)!=='+'&&index.charAt(0)!=='-'){index='+'+index}
weekday=byday.slice(-2);field.find('select[name=rimonthlyweekdayofmonthindex]').val(index);field.find('select[name=rimonthlyweekdayofmonth]').val(weekday)}
selectors=field.find('input[name=rimonthlytype]');for(index=0;index<selectors.length;index++){radiobutton=selectors[index];$(radiobutton).attr('checked',radiobutton.value===monthlyType)}
break;case 'riyearlyinterval':field.find('input[name=riyearlyinterval]').val(interval);break;case 'riyearlyoptions':var yearlyType='DAYOFMONTH';if(bymonthday){yearlyType='DAYOFMONTH';if(bymonthday.length>1){unsupportedFeatures.push(conf.i18n.multipleDayOfMonth);bymonthday=bymonthday[0]}
field.find('select[name=riyearlydayofmonthmonth]').val(bymonth);field.find('select[name=riyearlydayofmonthday]').val(bymonthday)}
if(byday){yearlyType='WEEKDAYOFMONTH';if(byday.indexOf(',')!==-1){unsupportedFeatures.push(conf.i18n.multipleDayOfMonth);byday=byday.split(",")[0]}
index=byday.slice(0,-2);if(index.charAt(0)!=='+'&&index.charAt(0)!=='-'){index='+'+index}
weekday=byday.slice(-2);field.find('select[name=riyearlyweekdayofmonthindex]').val(index);field.find('select[name=riyearlyweekdayofmonthday]').val(weekday);field.find('select[name=riyearlyweekdayofmonthmonth]').val(bymonth)}
selectors=field.find('input[name=riyearlyType]');for(index=0;index<selectors.length;index++){radiobutton=selectors[index];$(radiobutton).attr('checked',radiobutton.value===yearlyType)}
break;case 'rirangeoptions':var rangeType='NOENDDATE';if(count){rangeType='BYOCCURRENCES';field.find('input[name=rirangebyoccurrencesvalue]').val(count)}
if(until){rangeType='BYENDDATE';input=field.find('input[name=rirangebyenddatecalendar]');year=until.slice(0,4);month=until.slice(4,6);month=parseInt(month,10)-1;day=until.slice(6,8);input.data('dateinput').setValue(new Date(year,month,day))}
selectors=field.find('input[name=rirangetype]');for(index=0;index<selectors.length;index++){radiobutton=selectors[index];$(radiobutton).attr('checked',radiobutton.value===rangeType)}
break}}}
var messagearea=form.find('#messagearea');if(unsupportedFeatures.length!==0){messagearea.text(conf.i18n.unsupportedFeatures+' '+unsupportedFeatures.join('; '));messagearea.show();return 1} else{messagearea.text('');messagearea.hide();return 0}}
function RecurrenceInput(conf,textarea){var self=this;var form,display;var orderedWeekdays=[];var index,i;for(i=0;i<7;i++){index=i+conf.firstDay;if(index>6){index=index-7}
orderedWeekdays.push(index)}
$.extend(conf,{orderIndexes:['+1','+2','+3','+4','-1'],weekdays:['SU','MO','TU','WE','TH','FR','SA'],orderedWeekdays:orderedWeekdays});
function displayFields(selector){var i;form.find('.rifield').hide();var value=selector.val();if(value){var rtemplate=conf.rtemplate[value];for(i=0;i<rtemplate.fields.length;i++){form.find('#'+rtemplate.fields[i]).show()}}}
function occurrenceExclude(event){event.preventDefault();if(form.ical.EXDATE===undefined){form.ical.EXDATE=[]}
form.ical.EXDATE.push(this.attributes.date.value);var $this=$(this);$this.attr('class','exdate');$this.parent().parent().addClass('exdate');$this.unbind(event);$this.click(occurrenceInclude)}
function occurrenceInclude(event){event.preventDefault();form.ical.EXDATE.splice($.inArray(this.attributes.date.value,form.ical.EXDATE),1);var $this=$(this);$this.attr('class','rrule');$this.parent().parent().removeClass('exdate');$this.unbind(event);$this.click(occurrenceExclude)}
function occurrenceDelete(event){event.preventDefault();form.ical.RDATE.splice($.inArray(this.attributes.date.value,form.ical.RDATE),1);$(this).parent().parent().hide('slow', function(){$(this).remove()})}
function occurrenceAdd(event){event.preventDefault();var dateinput=form.find('.riaddoccurrence input#adddate').data('dateinput');var datevalue=dateinput.getValue('yyyymmddT000000');if(form.ical.RDATE===undefined){form.ical.RDATE=[]}
var errorarea=form.find('.riaddoccurrence div.errorarea');errorarea.text('');errorarea.hide();if($.inArray(datevalue,form.ical.RDATE)===-1){form.ical.RDATE.push(datevalue);var html=['<div class="occurrence rdate" style="display: none;">','<span class="rdate">',dateinput.getValue(conf.i18n.longDateFormat),'<span class="rlabel">'+conf.i18n.additionalDate+'</span>','</span>','<span class="action">','<a date="'+datevalue+'" href="#" class="rdate" >','Include','</a>','</span>','</div>'].join('\n');form.find('div.rioccurrences').prepend(html);$(form.find('div.rioccurrences div')[0]).slideDown();$(form.find('div.rioccurrences .action a.rdate')[0]).click(occurrenceDelete)} else{errorarea.text(conf.i18n.alreadyAdded).show()}}
function loadOccurrences(startdate,rfc5545,start,readonly){var element,occurrenceDiv;if(!readonly){element=form} else{element=display}
occurrenceDiv=element.find('.rioccurrences');occurrenceDiv.hide();var year,month,day;year=startdate.getFullYear();month=startdate.getMonth()+1;day=startdate.getDate();var data={year:year,month:month,day:day,rrule:rfc5545,format:conf.i18n.longDateFormat,start:start};var dict={url:conf.ajaxURL,async:false,type:'post',dataType:'json',contentType:conf.ajaxContentType,cache:false,data:data,success: function(data,status,jqXHR){var result,element;if(!readonly){element=form} else{element=display}
data.readOnly=readonly;data.i18n=conf.i18n;var occurrence,date,y,m,d,each;for(each in data.occurrences){if(data.occurrences.hasOwnProperty(each)){occurrence=data.occurrences[each];date=occurrence.date;y=parseInt(date.substring(0,4),10);m=parseInt(date.substring(4,6),10)-1;d=parseInt(date.substring(6,8),10);occurrence.formattedDate=format(new Date(y,m,d),conf.i18n.longDateFormat,conf)}}
result=$.tmpl('occurrenceTmpl',data);occurrenceDiv=element.find('.rioccurrences');occurrenceDiv.replaceWith(result);element.find('.rioccurrences .batching a').click(
function(event){event.preventDefault();loadOccurrences(startdate,rfc5545,this.attributes.start.value,readonly)});if(!readonly){element.find('.rioccurrences .action a.rrule').click(occurrenceExclude);element.find('.rioccurrences .action a.exdate').click(occurrenceInclude);element.find('.rioccurrences .action a.rdate').click(occurrenceDelete)}
element.find('.rioccurrences').show()},error: function(jqXHR,textStatus,errorThrown){alert(textStatus)}};$.ajax(dict)}
function getField(field){var realField=$(field);if(!realField.length){realField=$('#'+field)}
if(!realField.length){realField=$("input[name='"+field+"']")}
return realField}
function findStartDate(){var startdate=null;var startField,startFieldYear,startFieldMonth,startFieldDay;if(conf.startField){startField=getField(conf.startField);if(!startField.length){return null}
startdate=startField.data('dateinput');if(!startdate){startdate=startField.val();if(startdate===""){startdate=startField.text()}} else{startdate=startdate.getValue()}
if(typeof startdate==='string'){startdate=startdate.replace(' ','T')}
startdate=new Date(startdate)} else if(conf.startFieldYear&&conf.startFieldMonth&&conf.startFieldDay){startFieldYear=getField(conf.startFieldYear);startFieldMonth=getField(conf.startFieldMonth);startFieldDay=getField(conf.startFieldDay);if(!startFieldYear.length&&!startFieldMonth.length&&!startFieldDay.length){return null}
startdate=new Date(startFieldYear.val(),startFieldMonth.val()-1,startFieldDay.val())}
if(startdate===null){return null}
if(isNaN(startdate)){return null}
return startdate}
function findEndDate(form){var endField,enddate;endField=form.find('input[name=rirangebyenddatecalendar]');enddate=endField.data('dateinput');if(!enddate){enddate=endField.val()} else{enddate=enddate.getValue()}
enddate=new Date(enddate);if(isNaN(enddate)||endField.val()===""){return null}
return enddate}
function findIntField(fieldName,form){var field,num,isInt;field=form.find('input[name='+fieldName+']');num=field.val();if(isNaN(num)||(num.toString().indexOf('.')!==-1)||field.val()===""){return null}
return num}
function loadData(rfc5545){var selector,format,startdate,dayindex,day;if(rfc5545){widgetLoadFromRfc5545(form,conf,rfc5545,true)}
startdate=findStartDate();if(startdate!==null){form.find('select[name=rimonthlydayofmonthday]').val(startdate.getDate());dayindex=conf.orderIndexes[Math.floor((startdate.getDate()-1)/7)];day=conf.weekdays[startdate.getDay()];form.find('select[name=rimonthlyweekdayofmonthindex]').val(dayindex);form.find('select[name=rimonthlyweekdayofmonth]').val(day);form.find('select[name=riyearlydayofmonthmonth]').val(startdate.getMonth()+1);form.find('select[name=riyearlydayofmonthday]').val(startdate.getDate());form.find('select[name=riyearlyweekdayofmonthindex]').val(dayindex);form.find('select[name=riyearlyweekdayofmonthday]').val(day);form.find('select[name=riyearlyweekdayofmonthmonth]').val(startdate.getMonth()+1);loadOccurrences(startdate,widgetSaveToRfc5545(form,conf,false).result,0,false);form.find('div.rioccurrencesactions').show()} else{form.find('div.rioccurrencesactions').hide()}
selector=form.find('select[name=rirtemplate]');displayFields(selector)}
function recurrenceOn(){var RFC5545=widgetSaveToRfc5545(form,conf,false);var label=display.find('label[class=ridisplay]');label.text(conf.i18n.displayActivate+' '+RFC5545.description);textarea.val(RFC5545.result).change();var startdate=findStartDate();if(startdate!==null){loadOccurrences(startdate,widgetSaveToRfc5545(form,conf,false).result,0,true)}
display.find('a[name="riedit"]').text(conf.i18n.edit_rules);display.find('a[name="ridelete"]').show()}
function recurrenceOff(){var label=display.find('label[class=ridisplay]');label.text(conf.i18n.displayUnactivate);textarea.val('').change();display.find('.rioccurrences').hide();display.find('a[name="riedit"]').text(conf.i18n.add_rules);display.find('a[name="ridelete"]').hide()}
function checkFields(form){var startDate,endDate,num,messagearea;startDate=findStartDate();messagearea=form.find('#messagearea');messagearea.text('');messagearea.hide();form.find('.riaddoccurrence div.errorarea').text('').hide();if(form.find('#ridailyinterval').css('display')==='block'){num=findIntField('ridailyinterval',form);if(!num||num<1||num>1000){messagearea.text(conf.i18n.noRepeatEvery).show();return false}}
if(form.find('#riweeklyinterval').css('display')==='block'){num=findIntField('riweeklyinterval',form);if(!num||num<1||num>1000){messagearea.text(conf.i18n.noRepeatEvery).show();return false}}
if(form.find('#rimonthlyinterval').css('display')==='block'){num=findIntField('rimonthlyinterval',form);if(!num||num<1||num>1000){messagearea.text(conf.i18n.noRepeatEvery).show();return false}
if(form.find('#rimonthlyoptions input:checked').length===0){messagearea.text(conf.i18n.noRepeatOn).show();return false}}
if(form.find('#riyearlyinterval').css('display')==='block'){num=findIntField('riyearlyinterval',form);if(!num||num<1||num>1000){messagearea.text(conf.i18n.noRepeatEvery).show();return false}
if(form.find('#riyearlyoptions input:checked').length===0){messagearea.text(conf.i18n.noRepeatOn).show();return false}}
if(form.find('input[value="BYOCCURRENCES"]:visible:checked').length>0){num=findIntField('rirangebyoccurrencesvalue',form);if(!num||num<1||num>1000){messagearea.text(conf.i18n.noEndAfterNOccurrences).show();return false}}
if(form.find('input[value="BYENDDATE"]:visible:checked').length>0){endDate=findEndDate(form);if(!endDate){messagearea.text(conf.i18n.noEndDate).show();return false} else if(endDate<startDate){messagearea.text(conf.i18n.pastEndDate).show();return false}}
return true}
function save(event){event.preventDefault();if(checkFields(form)){form.overlay().close();recurrenceOn()}}
function cancel(event){event.preventDefault();form.overlay().close()}
function updateOccurances(){var startDate;startDate=findStartDate();if(checkFields(form)){loadOccurrences(startDate,widgetSaveToRfc5545(form,conf,false).result,0,false)}}
display=$.tmpl('displayTmpl',conf);form=$.tmpl('formTmpl',conf);form.overlay(conf.formOverlay).hide();form.ical={RDATE:[],EXDATE:[]};$.tools.dateinput.localize(conf.lang,{months:LABELS[conf.lang].months.join(),shortMonths:LABELS[conf.lang].shortMonths.join(),days:LABELS[conf.lang].weekdays.join(),shortDays:LABELS[conf.lang].shortWeekdays.join()});form.find('input[name=rirangebyenddatecalendar]').dateinput({selectors:true,lang:conf.lang,format:conf.i18n.shortDateFormat,firstDay:conf.firstDay,yearRange:[-5,10]}).data('dateinput').setValue(new Date());if(textarea.val()){var result=widgetLoadFromRfc5545(form,conf,textarea.val(),false);if(result===-1){var label=display.find('label[class=ridisplay]');label.text(conf.i18n.noRule)} else{recurrenceOn()}}
display.find('a[name=ridelete]').click(function(e){e.preventDefault();recurrenceOff()});display.find('a[name=riedit]').click(
function(e){loadData(textarea.val());e.preventDefault();form.overlay().load()});form.find('div.riaddoccurrence input#adddate').dateinput({selectors:true,lang:conf.lang,format:conf.i18n.shortDateFormat,firstDay:conf.firstDay,yearRange:[-5,10]}).data('dateinput').setValue(new Date());form.find('input#addaction').click(occurrenceAdd);form.find('a.rirefreshbutton').click(
function(event){event.preventDefault();updateOccurances()});form.find('select[name=rirtemplate]').change(
function(e){displayFields($(this))});form.find('select').change(
function(e){$(this).parent().find('> input').click().change()});form.find('input[name=rirangebyoccurrencesvalue]').change(
function(e){$(this).parent().find('input[name=rirangetype]').click().change()});form.find('input[name=rirangebyenddatecalendar]').change(function(){$(this).parent().find('input[name=rirangetype]').click();if(form.find('.rioccurrencesactions:visible').length!==0){updateOccurances()}});form.find('input:radio, .riweeklyweekday > input, input[name=ridailyinterval], input[name=riweeklyinterval], input[name=rimonthlyinterval], input[name=riyearlyinterval]').change(
function(e){if(form.find('.rioccurrencesactions:visible').length!==0){updateOccurances()}});form.find('.ricancelbutton').click(cancel);form.find('.risavebutton').click(save);$.extend(self,{display:display,form:form,loadData:loadData,save:save})}
$.fn.recurrenceinput=function(conf){if(this.data('recurrenceinput')){return this.data('recurrenceinput')}
var config=$.extend({},tool.conf);$.extend(config,conf);$.extend(config,{i18n:LABELS[config.lang],name:this.attr('name')});var recurrenceinput=new RecurrenceInput(config,this);recurrenceinput.form.appendTo('body');this.after(recurrenceinput.display);this.hide();this.data('recurrenceinput',recurrenceinput);return recurrenceinput}}(jQuery));
