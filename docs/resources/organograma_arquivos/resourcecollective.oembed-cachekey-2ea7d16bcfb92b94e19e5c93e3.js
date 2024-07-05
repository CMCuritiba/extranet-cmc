
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - ++resource++collective.oembed.js - */
// https://www.curitiba.pr.leg.br/portal_javascripts/++resource++collective.oembed.js?original=1
﻿(function($){$.fn.oembed=function(url,options,embedAction){settings=$.extend(true,$.fn.oembed.defaults,options);initializeProviders();var div=document.createElement('div'),ref=document.getElementsByTagName('base')[0]||document.getElementsByTagName('script')[0];div.className='fit-vids-style';div.innerHTML='&shy;<style>\.fluid-width-video-wrapper{\
width:100%;\
position:relative;\
padding:0;\} \.fluid-width-video-wrapper iframe,\.fluid-width-video-wrapper object,\.fluid-width-video-wrapper embed{\
position:absolute;\
top:0;\
left:0;\
width:100%;\
height:100%;\} \</style>';ref.parentNode.insertBefore(div,ref);return this.each(function(){var container=$(this),resourceURL=(url!==null)?url:container.attr("href"),provider;if(embedAction){settings.onEmbed=embedAction} else{settings.onEmbed=function(oembedData){$.fn.oembed.insertCode(this,settings.embedMethod,oembedData)}}
if(resourceURL!==null){provider=$.fn.oembed.getOEmbedProvider(resourceURL);if(provider!==null){provider.params=getNormalizedParams(settings[provider.name])||{};provider.maxWidth=settings.maxWidth;provider.maxHeight=settings.maxHeight;embedCode(container,resourceURL,provider)} else{settings.onProviderNotFound.call(container,resourceURL)}}
return container})};var settings,activeProviders=[];$.fn.oembed.defaults={maxWidth:null,maxHeight:null,embedMethod:"replace",defaultOEmbedProvider:"plone",allowedProviders:null,disallowedProviders:null,customProviders:null,defaultProvider:null,greedy:true,onProviderNotFound: function(){},beforeEmbed: function(){},afterEmbed: function(){},onEmbed: function(){},onError: function(){},ajaxOptions:{}};
function getRequestUrl(container,externalUrl,provider){var url=provider.apiendpoint,qs="";var i;if(url.indexOf("?")<=0)
url=url+"?";else
url=url+"&";if(provider.maxWidth!==null&&provider.params.maxwidth===null)
provider.params.maxwidth=provider.maxWidth;if(provider.maxHeight!==null&&provider.params.maxheight===null)
provider.params.maxheight=provider.maxHeight;for(i in provider.params){if(provider.params[i]!==null)
qs+="&"+encodeURIComponent(i)+"="+provider.params[i]}
url+="format=json&url="+encodeURIComponent(externalUrl)+qs ;if(container[0].getAttribute("data-maxwidth")!==null)
url+="&maxwidth="+container[0].getAttribute("data-maxwidth");if(container[0].getAttribute("data-maxheight")!==null)
url+="&maxheight="+container[0].getAttribute("data-height");return url}
function embedCode(container,externalUrl,embedProvider){var requestUrl=getRequestUrl(container,externalUrl,embedProvider);var ajaxopts=$.extend({url:requestUrl,type:'get',dataType:'json',success: function(data){var oembedData=$.extend({},data);switch(oembedData.type){case "photo":console.log("photo");oembedData.code=$.fn.oembed.getPhotoCode(externalUrl,oembedData);break;case "video":oembedData.code=$.fn.oembed.getVideoCode(externalUrl,oembedData);break;case "rich":oembedData.code=$.fn.oembed.getRichCode(externalUrl,oembedData);break;default:oembedData.code=$.fn.oembed.getGenericCode(externalUrl,oembedData);break}
settings.beforeEmbed.call(container,oembedData);settings.onEmbed.call(container,oembedData);settings.afterEmbed.call(container,oembedData)},error: function(xhr,ajaxOptions,thrownError){console.log(xhr.responseText);console.log(thrownError)}},settings.ajaxOptions||{});$.ajax(ajaxopts)}
function initializeProviders(){activeProviders=[];var defaultProvider,restrictedProviders=[],i,provider;if(!isNullOrEmpty(settings.allowedProviders)){for(i=0;i<$.fn.oembed.providers.length;i++){if($.inArray($.fn.oembed.providers[i].name,settings.allowedProviders)>=0)
activeProviders.push($.fn.oembed.providers[i])}
settings.greedy=false} else{activeProviders=$.fn.oembed.providers}
if(!isNullOrEmpty(settings.disallowedProviders)){for(i=0;i<activeProviders.length;i++){if($.inArray(activeProviders[i].name,settings.disallowedProviders)<0)
restrictedProviders.push(activeProviders[i])}
activeProviders=restrictedProviders;settings.greedy=false}
if(!isNullOrEmpty(settings.customProviders)){$.each(settings.customProviders, function(n,customProvider){if(customProvider instanceof $.fn.oembed.OEmbedProvider){activeProviders.push(provider)} else{provider=new $.fn.oembed.OEmbedProvider();if(provider.fromJSON(customProvider))
activeProviders.push(provider)}})}
defaultProvider=getDefaultOEmbedProvider(settings.defaultOEmbedProvider);if(settings.greedy===true){activeProviders.push(defaultProvider)}
for(i=0;i<activeProviders.length;i++){if(activeProviders[i].apiendpoint===null)
activeProviders[i].apiendpoint=defaultProvider.apiendpoint}}
function getDefaultOEmbedProvider(defaultOEmbedProvider){var url="http://oohembed.com/oohembed/";if(defaultOEmbedProvider=="embed.ly")
url="http://api.embed.ly/v1/api/oembed?";if(defaultOEmbedProvider=="plone")
url=portal_url+'/@@proxy-oembed-provider';return new $.fn.oembed.OEmbedProvider(defaultOEmbedProvider,null,null,url,"callback")}
function getNormalizedParams(params){if(params===null)
return null;var key,normalizedParams={};for(key in params){if(key!==null)
normalizedParams[key.toLowerCase()]=params[key]}
return normalizedParams}
function isNullOrEmpty(object){if(typeof object=="undefined")
return true;if(object===null)
return true;if($.isArray(object)&&object.length===0)
return true;return false}
$.fn.oembed.insertCode=function(container,embedMethod,oembedData){var html=$(oembedData.code);if(oembedData===null)
return;switch(embedMethod){case "auto":if(container.attr("href")!==null){$.fn.oembed.insertCode(container,"append",oembedData)}
else{$.fn.oembed.insertCode(container,"replace",oembedData)}
break;case "replace":if(html.is("a")&&html.length==1){break}
if(container.hasClass("oembed-responsive")){if(html.is("iframe")||html.is("object")||html.is("embed")){var width=parseInt(html.attr("width"),null),height=parseInt(html.attr("height"),null);var ratio=height/width;container.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(ratio * 100)+"%");html.removeAttr('height').removeAttr('width');oembedData.code=html[0].outerHTML}
if(oembedData.type=="photo"){html.find('img').css('max-width',"100%");oembedData.code=html[0].outerHTML}}
container.replaceWith(oembedData.code);break;case "fill":container.html(oembedData.code);break;case "append":var oembedContainer=container.next();if(oembedContainer===null||!oembedContainer.hasClass("oembed-container")){oembedContainer=container.after('<div class="oembed-container"></div>').next(".oembed-container");if(oembedData!==null&&oembedData.provider_name!==null)
oembedContainer.toggleClass("oembed-container-"+oembedData.provider_name)}
oembedContainer.html(oembedData.code);break}};$.fn.oembed.getPhotoCode=function(url,oembedData){var code,alt=oembedData.title?oembedData.title:'';alt+=oembedData.author_name?' - '+oembedData.author_name:'';alt+=oembedData.provider_name?' - '+oembedData.provider_name:'';code='<div><a href="'+url+'" target=\'_blank\'><img src="'+oembedData.url+'" alt="'+alt+'"/></a></div>';if(oembedData.html)
code+="<div>"+oembedData.html+"</div>";return code};$.fn.oembed.getVideoCode=function(url,oembedData){var code=oembedData.html;return code};$.fn.oembed.getRichCode=function(url,oembedData){var code=oembedData.html;return code};$.fn.oembed.getGenericCode=function(url,oembedData){var title=(oembedData.title!==null)?oembedData.title:url,code='<a href="'+url+'">'+title+'</a>';if(oembedData.html)
code+="<div>"+oembedData.html+"</div>";return code};$.fn.oembed.isProviderAvailable=function(url){var provider=getOEmbedProvider(url);return(provider!==null)};$.fn.oembed.getOEmbedProvider=function(url){for(var i=0;i<activeProviders.length;i++){if(activeProviders[i].matches(url))
return activeProviders[i]}
return null};$.fn.oembed.OEmbedProvider=function(name,type,urlschemesarray,apiendpoint,callbackparameter){this.name=name;this.type=type;this.urlschemes=getUrlSchemes(urlschemesarray);this.apiendpoint=apiendpoint;this.callbackparameter=callbackparameter;this.maxWidth=500;this.maxHeight=400;var i,property,regExp;this.matches=function(externalUrl){if(typeof externalUrl==='undefined'){return false}
for(i=0;i<this.urlschemes.length;i++){regExp=new RegExp(this.urlschemes[i],"i");if(externalUrl.match(regExp)!==null)
return true}
return false};this.fromJSON=function(json){for(var property in json){if(property!="urlschemes")
this[property]=json[property];else
this[property]=getUrlSchemes(json[property])}
return true};
function getUrlSchemes(urls){if(isNullOrEmpty(urls))
return ["."];if($.isArray(urls))
return urls;return urls.split(";")}};$.fn.oembed.providers=[]})(jQuery);

/* - ++resource++plone.formwidget.autocomplete/jquery.autocomplete.min.js - */
/*
 * Autocomplete - jQuery plugin 1.0.2
 *
 * Copyright (c) 2007 Dylan Verheul, Dan G. Switzer, Anjesh Tuladhar, Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.autocomplete.js 5747 2008-06-25 18:30:55Z joern.zaefferer $
 *
 */
;(function(e){e.fn.extend({autocomplete:function(t,n){var r=typeof t=="string";n=e.extend({},e.Autocompleter.defaults,{url:r?t:null,data:r?null:t,delay:r?e.Autocompleter.defaults.delay:10,max:n&&!n.scroll?10:150},n);n.highlight=n.highlight||function(e){return e};n.formatMatch=n.formatMatch||n.formatItem;return this.each(function(){new e.Autocompleter(this,n)})},result:function(e){return this.bind("result",e)},search:function(e){return this.trigger("search",[e])},flushCache:function(){return this.trigger("flushCache")},setOptions:function(e){return this.trigger("setOptions",[e])},unautocomplete:function(){return this.trigger("unautocomplete")}});e.Autocompleter=function(t,n){function d(){var e=c.selected();if(!e)return false;var t=e.result;o=t;if(n.multiple){var r=m(i.val());if(r.length>1){t=r.slice(0,r.length-1).join(n.multipleSeparator)+n.multipleSeparator+t}t+=n.multipleSeparator}i.val(t);w();i.trigger("result",[e.data,e.value]);return true}function v(e,t){if(f==r.DEL){c.hide();return}var s=i.val();if(!t&&s==o)return;o=s;s=g(s);if(s.length>=n.minChars){i.addClass(n.loadingClass);if(!n.matchCase)s=s.toLowerCase();S(s,E,w)}else{T();c.hide()}}function m(t){if(!t){return[""]}var r=t.split(n.multipleSeparator);var i=[];e.each(r,function(t,n){if(e.trim(n))i[t]=e.trim(n)});return i}function g(e){if(!n.multiple)return e;var t=m(e);return t[t.length-1]}function y(s,u){if(n.autoFill&&g(i.val()).toLowerCase()==s.toLowerCase()&&f!=r.BACKSPACE){i.val(i.val()+u.substring(g(o).length));e.Autocompleter.Selection(t,o.length,o.length+u.length)}}function b(){clearTimeout(s);s=setTimeout(w,200)}function w(){var r=c.visible();c.hide();clearTimeout(s);T();if(n.mustMatch){i.search(function(e){if(!e){if(n.multiple){var t=m(i.val()).slice(0,-1);i.val(t.join(n.multipleSeparator)+(t.length?n.multipleSeparator:""))}else i.val("")}})}if(r)e.Autocompleter.Selection(t,t.value.length,t.value.length)}function E(e,t){if(t&&t.length&&a){T();c.display(t,e);y(e,t[0].value);c.show()}else{w()}}function S(r,i,s){if(!n.matchCase)r=r.toLowerCase();var o=u.load(r);if(o&&o.length){i(r,o)}else if(typeof n.url=="string"&&n.url.length>0){var a={timestamp:+(new Date)};e.each(n.extraParams,function(e,t){a[e]=typeof t=="function"?t():t});e.ajax({mode:"abort",port:"autocomplete"+t.name,dataType:n.dataType,url:n.url,data:e.extend({q:g(r),limit:n.max},a),success:function(e){var t=n.parse&&n.parse(e)||x(e);u.add(r,t);i(r,t)}})}else{c.emptyList();s(r)}}function x(t){var r=[];var i=t.split("\n");for(var s=0;s<i.length;s++){var o=e.trim(i[s]);if(o){o=o.split("|");r[r.length]={data:o,value:o[0],result:n.formatResult&&n.formatResult(o,o[0])||o[0]}}}return r}function T(){i.removeClass(n.loadingClass)}var r={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};var i=e(t).attr("autocomplete","off").addClass(n.inputClass);var s;var o="";var u=e.Autocompleter.Cache(n);var a=0;var f;var l={mouseDownOnSelect:false};var c=e.Autocompleter.Select(n,t,d,l);var h;var p=navigator.userAgent.indexOf("Opera")!=-1;p&&e(t.form).bind("submit.autocomplete",function(){if(h){h=false;return false}});i.bind((p?"keypress":"keydown")+".autocomplete",function(t){f=t.keyCode;switch(t.keyCode){case r.UP:t.preventDefault();if(c.visible()){c.prev()}else{v(0,true)}break;case r.DOWN:t.preventDefault();if(c.visible()){c.next()}else{v(0,true)}break;case r.PAGEUP:t.preventDefault();if(c.visible()){c.pageUp()}else{v(0,true)}break;case r.PAGEDOWN:t.preventDefault();if(c.visible()){c.pageDown()}else{v(0,true)}break;case n.multiple&&e.trim(n.multipleSeparator)==","&&r.COMMA:case r.TAB:case r.RETURN:if(d()){t.preventDefault();h=true;return false}break;case r.ESC:c.hide();break;default:clearTimeout(s);s=setTimeout(v,n.delay);break}}).focus(function(){a++}).blur(function(){a=0;if(!l.mouseDownOnSelect){b()}}).click(function(){if(a++>1&&!c.visible()){v(0,true)}}).bind("search",function(){function n(e,n){var r;if(n&&n.length){for(var s=0;s<n.length;s++){if(n[s].result.toLowerCase()==e.toLowerCase()){r=n[s];break}}}if(typeof t=="function")t(r);else i.trigger("result",r&&[r.data,r.value])}var t=arguments.length>1?arguments[1]:null;e.each(m(i.val()),function(e,t){S(t,n,n)})}).bind("flushCache",function(){u.flush()}).bind("setOptions",function(){e.extend(n,arguments[1]);if("data"in arguments[1])u.populate()}).bind("unautocomplete",function(){c.unbind();i.unbind();e(t.form).unbind(".autocomplete")});};e.Autocompleter.defaults={inputClass:"ac_input",resultsClass:"ac_results",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:10,max:100,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(e){return e[0]},formatMatch:null,autoFill:false,width:0,multiple:false,multipleSeparator:", ",highlight:function(e,t){return e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+t.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>")},scroll:true,scrollHeight:180};e.Autocompleter.Cache=function(t){function i(e,n){if(!t.matchCase)e=e.toLowerCase();var r=e.indexOf(n);if(r==-1)return false;return r==0||t.matchContains}function s(e,i){if(r>t.cacheLength){u()}if(!n[e]){r++}n[e]=i}function o(){if(!t.data)return false;var n={},r=0;if(!t.url)t.cacheLength=1;n[""]=[];for(var i=0,o=t.data.length;i<o;i++){var u=t.data[i];u=typeof u=="string"?[u]:u;var a=t.formatMatch(u,i+1,t.data.length);if(a===false)continue;var f=a.charAt(0).toLowerCase();if(!n[f])n[f]=[];var l={value:a,data:u,result:t.formatResult&&t.formatResult(u)||a};n[f].push(l);if(r++<t.max){n[""].push(l)}}e.each(n,function(e,n){t.cacheLength++;s(e,n)})}function u(){n={};r=0}var n={};var r=0;setTimeout(o,25);return{flush:u,add:s,populate:o,load:function(s){if(!t.cacheLength||!r)return null;if(!t.url&&t.matchContains){var o=[];for(var u in n){if(u.length>0){var a=n[u];e.each(a,function(e,t){if(i(t.value,s)){o.push(t)}})}}return o}else if(n[s]){return n[s]}else if(t.matchSubset){for(var f=s.length-1;f>=t.minChars;f--){var a=n[s.substr(0,f)];if(a){var o=[];e.each(a,function(e,t){if(i(t.value,s)){o[o.length]=t}});return o}}}return null}}};e.Autocompleter.Select=function(t,n,r,i){function p(){if(!l)return;c=e("<div/>").hide().addClass(t.resultsClass).css("position","absolute").appendTo(document.body);h=e("<ul/>").appendTo(c).mouseover(function(t){if(d(t).nodeName&&d(t).nodeName.toUpperCase()=="LI"){u=e("li",h).removeClass(s.ACTIVE).index(d(t));e(d(t)).addClass(s.ACTIVE)}}).click(function(t){e(d(t)).addClass(s.ACTIVE);r();n.focus();return false}).mousedown(function(){i.mouseDownOnSelect=true}).mouseup(function(){i.mouseDownOnSelect=false});if(t.width>0)c.css("width",t.width);l=false}function d(e){var t=e.target;while(t&&t.tagName!="LI")t=t.parentNode;if(!t)return[];return t}function v(e){o.slice(u,u+1).removeClass(s.ACTIVE);m(e);var n=o.slice(u,u+1).addClass(s.ACTIVE);if(t.scroll){var r=0;o.slice(0,u).each(function(){r+=this.offsetHeight});if(r+n[0].offsetHeight-h.scrollTop()>h[0].clientHeight){h.scrollTop(r+n[0].offsetHeight-h.innerHeight())}else if(r<h.scrollTop()){h.scrollTop(r)}}}function m(e){u+=e;if(u<0){u=o.size()-1}else if(u>=o.size()){u=0}}function g(e){return t.max&&t.max<e?t.max:e}function y(){h.empty();var n=g(a.length);for(var r=0;r<n;r++){if(!a[r])continue;var i=t.formatItem(a[r].data,r+1,n,a[r].value,f);if(i===false)continue;var l=e("<li/>").html(t.highlight(i,f)).addClass(r%2==0?"ac_even":"ac_odd").appendTo(h)[0];e.data(l,"ac_data",a[r])}o=h.find("li");if(t.selectFirst){o.slice(0,1).addClass(s.ACTIVE);u=0}if(e.fn.bgiframe)h.bgiframe()}var s={ACTIVE:"ac_over"};var o,u=-1,a,f="",l=true,c,h;return{display:function(e,t){p();a=e;f=t;y()},next:function(){v(1)},prev:function(){v(-1)},pageUp:function(){if(u!=0&&u-8<0){v(-u)}else{v(-8)}},pageDown:function(){if(u!=o.size()-1&&u+8>o.size()){v(o.size()-1-u)}else{v(8)}},hide:function(){c&&c.hide();o&&o.removeClass(s.ACTIVE);u=-1},visible:function(){return c&&c.is(":visible")},current:function(){return this.visible()&&(o.filter("."+s.ACTIVE)[0]||t.selectFirst&&o[0])},show:function(){var r=e(n).offset();c.css({width:typeof t.width=="string"||t.width>0?t.width:e(n).width(),top:r.top+n.offsetHeight,left:r.left}).show();if(t.scroll){h.scrollTop(0);h.css({maxHeight:t.scrollHeight,overflow:"auto"});if(navigator.userAgent.indexOf("MSIE")!=1&&typeof document.body.style.maxHeight==="undefined"){var i=0;o.each(function(){i+=this.offsetHeight});var s=i>t.scrollHeight;h.css("height",s?t.scrollHeight:i);if(!s){o.width(h.width()-parseInt(o.css("padding-left"))-parseInt(o.css("padding-right")))}}}},selected:function(){var t=o&&o.filter("."+s.ACTIVE).removeClass(s.ACTIVE);return t&&t.length&&e.data(t[0],"ac_data")},emptyList:function(){h&&h.empty()},unbind:function(){c&&c.remove()}}};e.Autocompleter.Selection=function(e,t,n){if(e.createTextRange){var r=e.createTextRange();r.collapse(true);r.moveStart("character",t);r.moveEnd("character",n);r.select()}else if(e.setSelectionRange){e.setSelectionRange(t,n)}else{if(e.selectionStart){e.selectionStart=t;e.selectionEnd=n}}e.focus()}})(jQuery)


/* - ++resource++plone.formwidget.autocomplete/formwidget-autocomplete.js - */
// https://www.curitiba.pr.leg.br/portal_javascripts/++resource++plone.formwidget.autocomplete/formwidget-autocomplete.js?original=1
function formwidget_autocomplete_ready(event,data,formatted){(function($){var input_box=$(event.target);formwidget_autocomplete_new_value(input_box,data[0],data[1])}(jQuery))}
function formwidget_autocomplete_new_value(input_box,value,label){(function($){var base_id=input_box[0].id.replace(/-widgets-query$/,"");var base_name=input_box[0].name.replace(/\.widgets\.query$/,"");var widget_base=$('#'+base_id+"-input-fields");var all_fields=widget_base.find('input:radio, input:checkbox');input_box.val("");widget_base.find('input:radio').prop('checked',false);var selected_field=widget_base.find('input[value="'+value+'"]');if(selected_field.length){selected_field.each(function(){this.checked=true});return}
widget_base,base_name,base_id
var idx=all_fields.length;var klass=widget_base.data('klass');var title=widget_base.data('title');var type=widget_base.data('input_type');var multiple=widget_base.data('multiple');var span=$('<span/>').attr("id",base_id+"-"+idx+"-wrapper").attr("class","option");span.append($("<label/>").attr("for",base_id+"-"+idx).append($('<input type="'+type+'"'+' name="'+base_name+(multiple?':list"':'"')+' checked="checked" />').attr("id",base_id+"-"+idx).attr("title",title).attr("value",value).addClass(klass)).append(" ").append($("<span>").attr("class","label").text(label)));widget_base.append(span)}(jQuery))}
function formwidget_autocomplete_parser(formatResult,fieldNum){return function(data){var parsed=[];if(data.split){var rows=data.split("\n");for(var i=0;i<rows.length;i++){var row=$.trim(rows[i]);if(row){row=row.split("|");parsed[parsed.length]={data:row,value:row[fieldNum],result:formatResult(row,row[fieldNum])}}}}
return parsed}}


/* - ++resource++plone.formwidget.contenttree/contenttree.js - */
// This is based on jQueryFileTree by   Cory S.N. LaViska
if(jQuery) (function($){

    $.extend($.fn, {
        showDialog: function() {
            $(document.body)
                .append($(document.createElement("div"))
                .addClass("contenttreeWindowBlocker"));
            // store old parent element
            this[0].oldparent = $(this).parent()[0];
            $(".contenttreeWindowBlocker").before(this);
            $(this).show();
            $(this).width($(window).width() * 0.75);
            $(this).height($(window).height() * 0.75);
            $(this).css({
                'left': $(window).width() * 0.125,
                'top': $(window).height() * 0.125
            });
        },

        contentTreeAdd: function() {
            var contenttree_window = (this).parents(".contenttreeWindow");
            var input_box = $('#'+ contenttree_window[0].id
                .replace(/-contenttree-window$/,"-widgets-query"));
            contenttree_window.find('.navTreeCurrentItem > a').each(function () {
                formwidget_autocomplete_new_value(
                    input_box,
                    $(this).attr('href'),
                    $.trim($(this).text())
                );
            });
            $(this).contentTreeCancel();
            input_box.parents('.datagridwidget-cell').triggerHandler('change');
        },

        contentTreeCancel: function() {
            $(".contenttreeWindowBlocker").remove();
            var popup = $(this).parents(".contenttreeWindow");
            popup.hide();
            $(popup[0].oldparent).append(popup);
            popup[0].oldparent = null;
        },

        contentTree: function(o, h) {
            // Defaults
            if (!o) {
                var o = {};
            }
            if (o.script == undefined) {
                o.script = 'fetch';
            }

            if (o.folderEvent == undefined) {
                o.folderEvent = 'click';
            }
            if (o.selectEvent == undefined) {
                o.selectEvent = 'click';
            }

            if (o.expandSpeed == undefined) {
                o.expandSpeed = -1;
            }
            if (o.collapseSpeed == undefined) {
                o.collapseSpeed = -1;
            }

            if (o.multiFolder == undefined) {
                o.multiFolder = true;
            }
            if (o.multiSelect == undefined) {
                o.multiSelect = false;
            }

            function loadTree(c, t, r) {
                $(c).addClass('wait');
                $.post(o.script, {href: t, rel: r}, function(data) {
                    $(c).removeClass('wait').append(data);
                    $(c).find('ul:hidden').slideDown({
                        duration: o.expandSpeed
                    });
                    bindTree(c);
                });
            }

            function handleFolderEvent() {
                var li = $(this).parent();
                if (li.hasClass('collapsed')) {
                    if (!o.multiFolder) {
                        li.parent().find('ul:visible').slideUp({
                            duration: o.collapseSpeed
                        });
                        li.parent().find('li.navTreeFolderish')
                            .removeClass('expanded')
                            .addClass('collapsed');
                    }

                    if (li.find('ul').length == 0)
                        loadTree(
                            li,
                            escape($(this).attr('href')),
                            escape($(this).attr('rel'))
                        );
                    else
                        li.find('ul:hidden').slideDown({
                            duration: o.expandSpeed
                        });
                    li.removeClass('collapsed').addClass('expanded');
                } else {
                    li.find('ul').slideUp({
                        duration: o.collapseSpeed
                    });
                    li.removeClass('expanded').addClass('collapsed');
                }
                return false;
            }

            function handleSelectEvent(event) {
                var li = $(this).parent();
                var selected = true;
                var root = $(this).parents('ul.navTree');
                if (!li.hasClass('navTreeCurrentItem')) {
                    var multi_key = (
                        (event.ctrlKey) ||
                        (navigator.userAgent.toLowerCase()
                            .indexOf('macintosh') != -1 && event.metaKey));

                    if (!o.multiSelect || !multi_key) {
                        root.find('li.navTreeCurrentItem')
                            .removeClass('navTreeCurrentItem');
                    }

                    li.addClass('navTreeCurrentItem');
                    selected = true;
                } else {
                    li.removeClass('navTreeCurrentItem');
                    selected = false;
                }

                h(event, true, $(this).attr('href'), $.trim($(this).text()));
            }

            function bindTree(t) {
                $(t).find('li.navTreeFolderish a').unbind(o.folderEvent);
                $(t).find('li.selectable a').unbind(o.selectEvent);
                $(t).find('li a').bind('click', function() {
                    return false;
                });
                $(t).find('li.navTreeFolderish a').bind(
                    o.folderEvent,
                    handleFolderEvent
                );
                $(t).find('li.selectable a').bind(
                    o.selectEvent,
                    handleSelectEvent
                );
            }

            if ($(this).children('ul.navTree').length <= 0) {
                $(this).each(function() {
                    loadTree(this, o.rootUrl, 0);
                });
            }

        }
    });

})(jQuery);


/* - ++resource++sl_scripts/social_like.js - */
// https://www.curitiba.pr.leg.br/portal_javascripts/++resource++sl_scripts/social_like.js?original=1
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);$(function(){$("div#viewlet-social-like").each(function(){$(this).fadeIn(3000);$(this).removeAttr("style")});if($.browser.mobile){$('#viewlet-social-like .whatsapp').addClass('active',3000)}
if($.fn.prepOverlay!==undefined){$('#viewlet-social-like .share-by-email').prepOverlay({subtype:'ajax',filter:'#content-core',formselector:'form'})}});

/* - ++resource++plone.app.event/event.js - */
// https://www.curitiba.pr.leg.br/portal_javascripts/++resource++plone.app.event/event.js?original=1
if(typeof(plone)==='undefined'){var plone={}}(function($,plone){plone.paevent=plone.paevent||{};plone.paevent.end_start_delta=1;plone.paevent.start_date=function(){return a_or_b($('#formfield-form-widgets-IEventBasic-start'),$('#archetypes-fieldname-startDate'))};plone.paevent.end_date=function(){return a_or_b($('#formfield-form-widgets-IEventBasic-end'),$('#archetypes-fieldname-endDate'))};
function initDelta(e){var start_datetime=getDateTime(plone.paevent.start_date());var end_datetime=getDateTime(plone.paevent.end_date());plone.paevent.end_start_delta=(end_datetime-start_datetime)/ 1000 / 3600;if(plone.paevent.end_start_delta<1){plone.paevent.end_start_delta=1}}
function getDateTime(datetimewidget){var fields=['year','month','day','hour','minute'];var parts={};$.each(fields, function(idx,fld){parts[fld]=parseInt($("[name$='-"+fld+"']",datetimewidget).val(),10)});var date=new Date(parts.year,parts.month-1,parts.day,parts.hour,parts.minute);return date}
function setDateTime(datetimewidget,new_date){$("[name$='-year']",datetimewidget).val(new_date.getYear());$("[name$='-month']",datetimewidget).val(new_date.getMonth());$("[name$='-day']",datetimewidget).val(new_date.getDate());$("[name$='-hour']",datetimewidget).val(new_date.getHours());$("[name$='-minute']",datetimewidget).val(new_date.getMinutes())}
function updateEndDate(){var start_date=getDateTime(plone.paevent.start_date());var new_end_date=start_date;new_end_date.setHours(new_end_date.getHours()+plone.paevent.end_start_delta);setDateTime(plone.paevent.end_date(),new_end_date);$("input[name$='-calendar']",plone.paevent.end_date()).data('dateinput').setValue(new_end_date)}
function validateEndDate(){var start_datetime=getDateTime(plone.paevent.start_date());var end_datetime=getDateTime(plone.paevent.end_date());if(end_datetime<start_datetime){plone.paevent.end_date().addClass("error")} else{plone.paevent.end_date().removeClass("error")}}
function show_hide_widget(widget,hide,fade){if(hide===true){if(fade===true){widget.fadeOut()}
else{widget.hide()}} else{if(fade===true){widget.fadeIn()}
else{widget.show()}}}
function a_or_b(a,b){var ret;if(a.length>0){ret=a} else{ret=b}
return ret}
function event_listing_calendar_init(cal){if($().dateinput&&cal.length>0){var get_req_param=function(name){if(name===(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search)){return decodeURIComponent(name[1])}};var val=get_req_param('date');if(val===undefined){val=new Date()} else{val=new Date(val)}
cal.dateinput({selectors:true,trigger:true,format:'yyyy-mm-dd',yearRange:[-10,10],firstDay:1,value:val,change: function(){var value=this.getValue("yyyy-mm-dd");window.location.href='event_listing?mode=day&date='+value}}).unbind('change').bind('onShow', function(event){var trigger_offset=$(this).next().offset();$(this).data('dateinput').getCalendar().offset({top:trigger_offset.top+20,left:trigger_offset.left})})}}
$(function(){var jq_whole_day=a_or_b($('#formfield-form-widgets-IEventBasic-whole_day input'),$('form[name="edit_form"] input#wholeDay'));var jq_datetime=a_or_b($('#form-widgets-IEventBasic-start-timecomponents, #form-widgets-IEventBasic-end-timecomponents'),$('#archetypes-fieldname-startDate .datetimewidget-time, #archetypes-fieldname-endDate .datetimewidget-time'));if(jq_whole_day.length>0){jq_whole_day.bind('change', function(e){show_hide_widget(jq_datetime,e.target.checked,true)});show_hide_widget(jq_datetime,jq_whole_day.get(0).checked,false)}
var jq_open_end=a_or_b($('#formfield-form-widgets-IEventBasic-open_end input'),$('form[name="edit_form"] input#openEnd'));var jq_end=plone.paevent.end_date();if(jq_open_end.length>0){jq_open_end.bind('change', function(e){show_hide_widget(jq_end,e.target.checked,true)});show_hide_widget(jq_end,jq_open_end.get(0).checked,false)}
var jq_start=plone.paevent.start_date();$("select",jq_start).on("change",updateEndDate);$("input[name$='-calendar']",jq_start).on("onHide",updateEndDate);$("select",jq_end).on("change", function(){initDelta();validateEndDate()});$("input[name$='-calendar']",jq_end).on("onHide", function(){initDelta();validateEndDate()});event_listing_calendar_init($("#event_listing_calendar"))})}(jQuery,plone));

/* - ++resource++plone.app.event.portlet_calendar.js - */
// https://www.curitiba.pr.leg.br/portal_javascripts/++resource++plone.app.event.portlet_calendar.js?original=1
(function($){
function load_portlet_calendar(event,elem){event.preventDefault();var pw=elem.closest('.portletWrapper');var elem_data=elem.data();var portlethash=pw.attr('id');portlethash=portlethash.substring(15,portlethash.length);url=portal_url+'/@@render-portlet?portlethash='+portlethash+'&year='+elem_data.year+'&month='+elem_data.month;$.ajax({url:url,success: function(data){pw.html(data);rebind_portlet_calendar()}})}
function rebind_portlet_calendar(){$('.portletCalendar a.calendarNext').click(function(event){load_portlet_calendar(event,$(this))});$('.portletCalendar a.calendarPrevious').click(function(event){load_portlet_calendar(event,$(this))});$('.portletCalendar dd a[title]').tooltip({offset:[-10,0],tipClass:'pae_calendar_tooltip'})}
$(document).ready(function(){rebind_portlet_calendar()})}(jQuery));

/* - ++resource++contraste.js - */
// https://www.curitiba.pr.leg.br/portal_javascripts/++resource++contraste.js?original=1
jQuery(function($){$('#siteaction-contraste a').click(
function(e){if($.cookie('contraste')===null){$.cookie('contraste','on');$('body').addClass('contraste');e.preventDefault();return false}else{if($.cookie('contraste')=='on'){$.cookie('contraste','off');$('body').removeClass('contraste');e.preventDefault();return false}else{$.cookie('contraste','on');$('body').addClass('contraste');e.preventDefault();return false}}});if($.cookie('contraste')=='on'){$('body').addClass('contraste');return false}});

/* - ++resource++jquery.cookie.js - */
// https://www.curitiba.pr.leg.br/portal_javascripts/++resource++jquery.cookie.js?original=1
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)} else{factory(jQuery)}}(function($){var pluses=/\+/g;
function raw(s){return s}
function decoded(s){return decodeURIComponent(s.replace(pluses,' '))}
function converted(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')}
try{return config.json?JSON.parse(s):s} catch(er){}}
var config=$.cookie=function(key,value,options){if(value!==undefined){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)}
value=config.json?JSON.stringify(value):String(value);return(document.cookie=[config.raw?key:encodeURIComponent(key),'=',config.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))}
var decode=config.raw?raw:decoded;var cookies=document.cookie.split('; ');var result=key?undefined:{};for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=decode(parts.join('='));if(key&&key===name){result=converted(cookie);break}
if(!key){result[name]=converted(cookie)}}
return result};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)!==undefined){$.cookie(key,'',$.extend({},options,{expires:-1}));return true}
return false}}));

/* - ++resource++dropdown-menu.js - */
// https://www.curitiba.pr.leg.br/portal_javascripts/++resource++dropdown-menu.js?original=1
jQuery(function($){$('#portal-globalnav .noClick').click(function(e){e.preventDefault()})});

/* - ++resource++plone.formwidget.recaptcha/recaptcha_ajax.js - */
/* Copyright (C) 2007 reCAPTCHA. Please contact us if you are thinking of modifying & hosting this file. */

var RecaptchaTemplates = {VertHtml:'<table id="recaptcha_table" class="recaptchatable" >\n<tr>\n<td colspan="6" class=\'recaptcha_r1_c1\'></td>\n</tr>\n<tr>\n<td class=\'recaptcha_r2_c1\'></td>\n<td colspan="4" class=\'recaptcha_image_cell\'><div id="recaptcha_image"></div></td>\n<td class=\'recaptcha_r2_c2\'></td>\n</tr>\n<tr>\n<td rowspan="6" class=\'recaptcha_r3_c1\'></td>\n<td colspan="4" class=\'recaptcha_r3_c2\'></td>\n<td rowspan="6" class=\'recaptcha_r3_c3\'></td>\n</tr>\n<tr>\n<td rowspan="3" class=\'recaptcha_r4_c1\' height="49">\n<div class="recaptcha_input_area">\n<label for="recaptcha_response_field" class="recaptcha_input_area_text"><span id="recaptcha_instructions_image" class="recaptcha_only_if_image recaptcha_only_if_no_incorrect_sol"></span><span id="recaptcha_instructions_audio" class="recaptcha_only_if_no_incorrect_sol recaptcha_only_if_audio"></span><span id="recaptcha_instructions_error" class="recaptcha_only_if_incorrect_sol"></span></label><br/>\n<input name="recaptcha_response_field" id="recaptcha_response_field" type="text" />\n</div>\n</td>\n<td rowspan="4" class=\'recaptcha_r4_c2\'></td>\n<td><a id=\'recaptcha_reload_btn\'><img id=\'recaptcha_reload\' width="25" height="17" /></a></td>\n<td rowspan="4" class=\'recaptcha_r4_c4\'></td>\n</tr>\n<tr>\n<td><a id=\'recaptcha_switch_audio_btn\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="16" alt="" /></a><a id=\'recaptcha_switch_img_btn\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="16" alt=""/></a></td>\n</tr>\n<tr>\n<td><a id=\'recaptcha_whatsthis_btn\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a></td>\n</tr>\n<tr>\n<td class=\'recaptcha_r7_c1\'></td>\n<td class=\'recaptcha_r8_c1\'></td>\n</tr>\n</table>\n',VertCss:'.recaptchatable td img {\n/* see http://developer.mozilla.org/en/docs/Images%2C_Tables%2C_and_Mysterious_Gaps */\ndisplay: block;\n}\n.recaptchatable .recaptcha_r1_c1 { background: url(IMGROOT/sprite.png) -0px -63px no-repeat; width: 318px; height: 9px; }\n.recaptchatable .recaptcha_r2_c1 { background: url(IMGROOT/sprite.png) -18px -0px no-repeat; width: 9px; height: 57px; }\n.recaptchatable .recaptcha_r2_c2 { background: url(IMGROOT/sprite.png) -27px -0px no-repeat; width: 9px; height: 57px; }\n.recaptchatable .recaptcha_r3_c1 { background: url(IMGROOT/sprite.png) -0px -0px no-repeat; width: 9px; height: 63px; }\n.recaptchatable .recaptcha_r3_c2 { background: url(IMGROOT/sprite.png) -18px -57px no-repeat; width: 300px; height: 6px; }\n.recaptchatable .recaptcha_r3_c3 { background: url(IMGROOT/sprite.png) -9px -0px no-repeat; width: 9px; height: 63px; }\n.recaptchatable .recaptcha_r4_c1 { background: url(IMGROOT/sprite.png) -43px -0px no-repeat; width: 171px; height: 49px; }\n.recaptchatable .recaptcha_r4_c2 { background: url(IMGROOT/sprite.png) -36px -0px no-repeat; width: 7px; height: 57px; }\n.recaptchatable .recaptcha_r4_c4 { background: url(IMGROOT/sprite.png) -214px -0px no-repeat; width: 97px; height: 57px; }\n.recaptchatable .recaptcha_r7_c1 { background: url(IMGROOT/sprite.png) -43px -49px no-repeat; width: 171px; height: 8px; }\n.recaptchatable .recaptcha_r8_c1 { background: url(IMGROOT/sprite.png) -43px -49px no-repeat; width: 25px; height: 8px; }\n.recaptchatable .recaptcha_image_cell center img { height:57px;}\n.recaptchatable .recaptcha_image_cell center { height:57px;}\n.recaptchatable .recaptcha_image_cell {\nbackground-color:white; height:57px;\n}\n/* some people break their style sheet, we need to clean up after them */\n#recaptcha_area, #recaptcha_table {\nwidth: 318px !important;\n}\n.recaptchatable, #recaptcha_area tr, #recaptcha_area td, #recaptcha_area th {\nmargin:0px !important;\nborder:0px !important;\npadding:0px !important;\nborder-collapse: collapse !important;\nvertical-align: middle !important;\n}\n.recaptchatable * {\nmargin:0px;\npadding:0px;\nborder:0px;\nfont-family:helvetica,sans-serif;\nfont-size:8pt;\ncolor:black;\nposition:static;\ntop:auto;\nleft:auto;\nright:auto;\nbottom:auto;\ntext-align:left !important;\n}\n.recaptchatable #recaptcha_image {\nmargin:auto;\n}\n.recaptchatable img {\nborder:0px !important;\nmargin:0px !important;\npadding:0px !important;\n}\n.recaptchatable a, .recaptchatable a:hover {\n-moz-outline:none;\nborder:0px !important;\npadding:0px !important;\ntext-decoration:none;\ncolor:blue;\nbackground:none !important;\nfont-weight: normal;\n}\n.recaptcha_input_area {\nposition:relative !important;\nwidth:146px !important;\nheight:45px !important;\nmargin-left:20px !important;\nmargin-right:5px !important;\nmargin-top:4px !important;\nbackground:none !important;\n}\n.recaptchatable label.recaptcha_input_area_text {\nmargin:0px !important;  \npadding:0px !important;\nposition:static !important;\ntop:auto !important;\nleft:auto !important;\nright:auto !important;\nbottom:auto !important;\nbackground:none !important;\nheight:auto !important;\nwidth:auto !important;\n}\n.recaptcha_theme_red label.recaptcha_input_area_text,\n.recaptcha_theme_white label.recaptcha_input_area_text {\ncolor:black !important;\n}\n.recaptcha_theme_blackglass label.recaptcha_input_area_text {\ncolor:white !important;\n}\n.recaptchatable #recaptcha_response_field  {\nwidth:145px !important;\nposition:absolute !important;\nbottom:7px !important;\npadding:0px !important;\nmargin:0px !important;\nfont-size:10pt;\n}\n.recaptcha_theme_blackglass #recaptcha_response_field,\n.recaptcha_theme_white #recaptcha_response_field {\nborder: 1px solid gray;\n}\n.recaptcha_theme_red #recaptcha_response_field {\nborder:1px solid #cca940;\n}\n.recaptcha_audio_cant_hear_link {\nfont-size:7pt;\ncolor:black;\n}\n.recaptchatable {\nline-height:1em;\n}\n#recaptcha_instructions_error {\ncolor:red !important;\n}\n',CleanHtml:'<table id="recaptcha_table" class="recaptchatable">\n<tr height="73">\n<td class=\'recaptcha_image_cell\' width="302"><center><div id="recaptcha_image"></div></center></td>\n<td style="padding: 10px 7px 7px 7px;">\n<a id=\'recaptcha_reload_btn\'><img id=\'recaptcha_reload\' width="25" height="18" alt="" /></a>\n<a id=\'recaptcha_switch_audio_btn\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="15" alt="" /></a><a id=\'recaptcha_switch_img_btn\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="15" alt=""/></a>\n<a id=\'recaptcha_whatsthis_btn\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a>\n</td>\n<td style="padding: 18px 7px 18px 7px;">\n<img id=\'recaptcha_logo\' alt="" width="71" height="36" />\n</td>\n</tr>\n<tr>\n<td style="padding-left: 7px;">\n<div class="recaptcha_input_area" style="padding-top: 2px; padding-bottom: 7px;">\n<input style="border: 1px solid #3c3c3c; width: 302px;" name="recaptcha_response_field" id="recaptcha_response_field" type="text" />\n</div>\n</td>\n<td></td>\n<td style="padding: 4px 7px 12px 7px;">\n<img id="recaptcha_tagline" width="71" height="17" />\n</td>\n</tr>\n</table>\n',CleanCss : '.recaptchatable td img {\ndisplay: block;\n}\n.recaptchatable .recaptcha_image_cell center img { height:57px;}\n.recaptchatable .recaptcha_image_cell center { height:57px;}\n.recaptchatable .recaptcha_image_cell {\nbackground-color:white; height:57px; \npadding: 7px !important;\n}\n.recaptchatable, #recaptcha_area tr, #recaptcha_area td, #recaptcha_area th {\nmargin:0px !important;\nborder:0px !important;\nborder-collapse: collapse !important;\nvertical-align: middle !important;\n}\n.recaptchatable * {\nmargin:0px;\npadding:0px;\nborder:0px;\ncolor:black;\nposition:static;\ntop:auto;\nleft:auto;\nright:auto;\nbottom:auto;\ntext-align:left !important;\n}\n.recaptchatable #recaptcha_image {\nmargin:auto;\nborder: 1px solid #dfdfdf !important;\n}\n.recaptchatable a img {\nborder:0px;\n}\n.recaptchatable a, .recaptchatable a:hover {\n-moz-outline:none;\nborder:0px !important;\npadding:0px !important;\ntext-decoration:none;\ncolor:blue;\nbackground:none !important;\nfont-weight: normal;\n}\n.recaptcha_input_area {\nposition:relative !important;\nbackground:none !important;\n}\n.recaptchatable label.recaptcha_input_area_text {\nborder:1px solid #dfdfdf !important;\nmargin:0px !important;  \npadding:0px !important;\nposition:static !important;\ntop:auto !important;\nleft:auto !important;\nright:auto !important;\nbottom:auto !important;\n}\n.recaptcha_theme_red label.recaptcha_input_area_text,\n.recaptcha_theme_white label.recaptcha_input_area_text {\ncolor:black !important;\n}\n.recaptcha_theme_blackglass label.recaptcha_input_area_text {\ncolor:white !important;\n}\n.recaptchatable #recaptcha_response_field  {\nfont-size:11pt;\n}\n.recaptcha_theme_blackglass #recaptcha_response_field,\n.recaptcha_theme_white #recaptcha_response_field {\nborder: 1px solid gray;\n}\n.recaptcha_theme_red #recaptcha_response_field {\nborder:1px solid #cca940;\n}\n.recaptcha_audio_cant_hear_link {\nfont-size:7pt;\ncolor:black;\n}\n.recaptchatable {\nline-height:1em;\nborder: 1px solid #dfdfdf !important;\n}\n.recaptcha_error_text {\ncolor:red;\n}\n'};
var RecaptchaStr_en = {
visual_challenge : "Get a visual challenge",
audio_challenge : "Get an audio challenge",
refresh_btn : "Get a new challenge",
instructions_visual : "Type the two words:",
instructions_audio : "Type what you hear:",
help_btn : "Help",
play_again : "Play sound again",
cant_hear_this : "Download sound as MP3",
incorrect_try_again : "Incorrect. Try again."
};
var RecaptchaStr_de = {
visual_challenge : "Visuelle Aufgabe generieren",
audio_challenge : "Audio-Aufgabe generieren",
refresh_btn : "Neue Aufgabe generieren",
instructions_visual : "Gib die 2 W\u00f6rter ein:",
instructions_audio : "Gib die 8 Ziffern ein:",
help_btn : "Hilfe",
incorrect_try_again: "Falsch. Nochmals versuchen!"
};
var RecaptchaStr_es = {
visual_challenge : "Obt\u00e9n un reto visual",
audio_challenge : "Obt\u00e9n un reto audible",
refresh_btn : "Obt\u00e9n un nuevo reto",
instructions_visual : "Escribe las 2 palabras:",
instructions_audio : "Escribe los 8 n\u00fameros:",
help_btn : "Ayuda",
incorrect_try_again: "Incorrecto. Otro intento."
};
var RecaptchaStr_fr = {
visual_challenge : "D\u00e9fi visuel",
audio_challenge : "D\u00e9fi audio",
refresh_btn : "Nouveau d\u00e9fi",
instructions_visual : "Entrez les deux mots:",
instructions_audio : "Entrez les huit chiffres:",
help_btn : "Aide",
incorrect_try_again: "Incorrect."
};
var RecaptchaStr_nl = {
visual_challenge : "Test me via een afbeelding",
audio_challenge : "Test me via een geluidsfragment",
refresh_btn : "Nieuwe uitdaging",
instructions_visual : "Type de twee woorden:",
instructions_audio : "Type de acht cijfers:",
help_btn : "Help",
incorrect_try_again: "Foute invoer."
};
var RecaptchaStr_pt = {
visual_challenge : "Obter um desafio visual",
audio_challenge : "Obter um desafio sonoro",
refresh_btn : "Obter um novo desafio",
instructions_visual : "Escreva as 2 palavras:",
instructions_audio : "Escreva os 8 numeros:",
help_btn : "Ajuda",
incorrect_try_again: "Incorrecto. Tenta outra vez."
};
var RecaptchaStr_ru = {
visual_challenge : "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",
audio_challenge : "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0437\u0432\u0443\u043a\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",
refresh_btn : "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",
instructions_visual : "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0432\u0430 \u0441\u043b\u043e\u0432\u0430:",
instructions_audio : "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u0441\u0435\u043c\u044c \u0447\u0438\u0441\u0435\u043b:",
help_btn : "\u041f\u043e\u043c\u043e\u0449\u044c",
incorrect_try_again: "\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."
};
var RecaptchaStr_tr = {
visual_challenge : "G\u00f6rsel deneme",
audio_challenge : "\u0130\u015Fitsel deneme",
refresh_btn : "Yeni deneme",
instructions_visual : "\u0130ki kelimeyi yaz\u0131n:",
instructions_audio : "Sekiz numaray\u0131 yaz\u0131n:",
help_btn : "Yard\u0131m (\u0130ngilizce)",
incorrect_try_again: "Yanl\u0131\u015f. Bir daha deneyin."
};
var RecaptchaLangMap = {
en: RecaptchaStr_en,
de: RecaptchaStr_de,
es: RecaptchaStr_es,
fr: RecaptchaStr_fr,
nl: RecaptchaStr_nl,
pt: RecaptchaStr_pt,
ru: RecaptchaStr_ru,
tr: RecaptchaStr_tr
};
var RecaptchaStr = RecaptchaStr_en;
var RecaptchaOptions;
var RecaptchaDefaultOptions = {
tabindex: 0,
theme: 'red',
callback: null,
lang: 'en',
custom_theme_widget : null,
custom_translations : null
};
var Recaptcha = {
widget: null,
timer_id: -1,
style_set: false,
theme: null,
type: 'image',
ajax_verify_cb : null,
$: function(id) {
if (typeof(id) == "string") {
return document.getElementById(id);
}
else {
return id;
}
},
create: function(public_key, element, options) {
Recaptcha.destroy();
if (element) {
Recaptcha.widget = Recaptcha.$(element);
}
Recaptcha._init_options(options);
Recaptcha._call_challenge(public_key);
},
destroy: function() {
var challengefield = Recaptcha.$('recaptcha_challenge_field');
if (challengefield) {
challengefield.parentNode.removeChild(challengefield);
}
if (Recaptcha.timer_id != -1) {
clearInterval(Recaptcha.timer_id);
}
Recaptcha.timer_id = -1;
var imagearea = Recaptcha.$('recaptcha_image');
if (imagearea) {
imagearea.innerHTML = "";
}
// don't clear the area if it's custom, the caller might want to
// reuse the dom elements.
if (Recaptcha.widget) {
if (Recaptcha.theme != "custom") {
Recaptcha.widget.innerHTML = "";
} else {
Recaptcha.widget.style.display = "none";
}
Recaptcha.widget = null;
}
},
focus_response_field: function() {
var $ = Recaptcha.$;
var field = $('recaptcha_response_field');
field.focus();
},
get_challenge: function() {
if (typeof(RecaptchaState) == "undefined") {
return null;
}
return RecaptchaState.challenge;
},
get_response: function() {
var $ = Recaptcha.$;
var field = $('recaptcha_response_field');
if (!field) {
return null;
}
return field.value;
},
ajax_verify: function(callback) {
Recaptcha.ajax_verify_cb = callback;
var scriptURL = Recaptcha._get_api_server() + "/ajaxverify" +
"?c=" + encodeURIComponent(Recaptcha.get_challenge()) +
"&response=" + encodeURIComponent(Recaptcha.get_response());
Recaptcha._add_script(scriptURL);
},
_ajax_verify_callback : function(data) {
Recaptcha.ajax_verify_cb(data);
},
_get_api_server : function() {
var protocol = window.location.protocol;
var server;
if (typeof(_RecaptchaOverrideApiServer) != "undefined") {
server = _RecaptchaOverrideApiServer;
} else if (protocol == 'https:') {
server = "api-secure.recaptcha.net";
} else {
server = "api.recaptcha.net";
}
return protocol + "//" + server;
},
_call_challenge: function(public_key) {
var scriptURL = Recaptcha._get_api_server() + "/challenge?k=" + public_key + "&ajax=1&cachestop=" + Math.random();
if (typeof(RecaptchaOptions.extra_challenge_params) != "undefined") {
scriptURL += "&" + RecaptchaOptions.extra_challenge_params;
}
Recaptcha._add_script(scriptURL);
},
_add_script: function(scriptURL) {
var scriptTag = document.createElement("script");
scriptTag.type = "text/javascript";
scriptTag.src = scriptURL;
Recaptcha._get_script_area().appendChild(scriptTag);
},
_get_script_area: function() {
var parentElement = document.getElementsByTagName("head");
if (!parentElement || parentElement.length < 1) {
parentElement = document.body;
}
else {
parentElement = parentElement[0];
}
return parentElement;
},
_hash_merge : function(hashes) {
var r = {};
for (var h in hashes) {
for (var k in hashes[h]) {
r[k] = hashes[h][k]
}
}
return r;
},
_init_options: function(opts) {
RecaptchaOptions = Recaptcha._hash_merge([RecaptchaDefaultOptions, opts || {}]);
},
challenge_callback: function() {
var element = Recaptcha.widget;
Recaptcha._reset_timer ();
RecaptchaStr = Recaptcha._hash_merge([
RecaptchaStr_en,
RecaptchaLangMap[RecaptchaOptions.lang] || {},
RecaptchaOptions.custom_translations || {}]);
/* Try to avoid back/forward cache problems */
// firefox
if (window.addEventListener) {
window.addEventListener('unload', function(e){ Recaptcha.destroy(); }, false );
}
// IE
if (Recaptcha._is_ie() && window.attachEvent) {
window.attachEvent('onbeforeunload', function () {
// I think this may be causing some errors -- it seems
// that sometimes IE isn't submitting the form fully
// This may be breaking the back button functionality
// :-(
//Recaptcha.destroy();
});
}
// safari
if (navigator.userAgent.indexOf("KHTML") > 0) {
var iframe = document.createElement('iframe');
iframe.src = "about:blank";
iframe.style.height = "0px";
iframe.style.width = "0px";
iframe.style.visibility = "hidden";
iframe.style.border = "none";
var textNode = document.createTextNode("This frame prevents back/forward cache problems in Safari.");
iframe.appendChild(textNode);
document.body.appendChild(iframe);
}
Recaptcha._finish_widget();
},
_add_css : function(css) {
var styleTag = document.createElement("style");
styleTag.type = "text/css";
if (styleTag.styleSheet) { // IE only
if (navigator.appVersion.indexOf("MSIE 5") != -1) { // IE 5 crashes if we add a style tag to the DOM
document.write("<style type='text/css'>" + css + "</style>");
}
else {
styleTag.styleSheet.cssText = css;
}
} else if (navigator.appVersion.indexOf("MSIE 5") != -1) {
document.write("<style type='text/css'>" + css + "</style>");
}
else {
var textNode = document.createTextNode(css);
styleTag.appendChild(textNode);
}
Recaptcha._get_script_area().appendChild(styleTag);
},
_set_style: function(css) {
// We only allow the style to be set once, because IE behaves
// poorly otherwise.  Same goes for Recaptcha.theme.
if (Recaptcha.style_set) {
return;
}
Recaptcha.style_set = true;
Recaptcha._add_css(css + "\n\n" +
".recaptcha_is_showing_audio .recaptcha_only_if_image," +
".recaptcha_isnot_showing_audio .recaptcha_only_if_audio," +
".recaptcha_had_incorrect_sol .recaptcha_only_if_no_incorrect_sol," +
".recaptcha_nothad_incorrect_sol .recaptcha_only_if_incorrect_sol" +
"{display:none !important}");
},
_init_builtin_theme : function() {
var $ = Recaptcha.$;
var $_ = RecaptchaStr;
var $ST = RecaptchaState;
var css, html, imgfmt;
var server_no_slash = $ST.server;
if (server_no_slash[server_no_slash.length - 1] == "/")
server_no_slash = server_no_slash.substring (0, server_no_slash.length - 1);
var IMGROOT = server_no_slash + "/img/" + Recaptcha.theme;
if (Recaptcha.theme == 'clean') {
css = RecaptchaTemplates.CleanCss;
html = RecaptchaTemplates.CleanHtml;
imgfmt = 'png';
}
else {
css = RecaptchaTemplates.VertCss;
html = RecaptchaTemplates.VertHtml;
imgfmt = 'gif';
}
css = css.replace (/IMGROOT/g, IMGROOT);
Recaptcha._set_style(css);
Recaptcha.widget.innerHTML = "<div id='recaptcha_area'>" + html + "</div>";
$('recaptcha_reload').src = IMGROOT + "/refresh." + imgfmt;
$('recaptcha_switch_audio').src = IMGROOT + "/audio." + imgfmt;
$('recaptcha_switch_img').src = IMGROOT + "/text." + imgfmt;
$('recaptcha_whatsthis').src = IMGROOT + "/help." + imgfmt;
if (Recaptcha.theme == 'clean') {
$('recaptcha_logo').src = IMGROOT + "/logo." + imgfmt;
$('recaptcha_tagline').src = IMGROOT + "/tagline." + imgfmt;
}
$('recaptcha_reload').alt = $_.refresh_btn;
$('recaptcha_switch_audio').alt = $_.audio_challenge;
$('recaptcha_switch_img').alt = $_.visual_challenge;
$('recaptcha_whatsthis').alt = $_.help_btn;
$('recaptcha_reload_btn').href = "javascript:Recaptcha.reload ();";
$('recaptcha_reload_btn').title = $_.refresh_btn;
$('recaptcha_switch_audio_btn').href = "javascript:Recaptcha.switch_type('audio');";
$('recaptcha_switch_audio_btn').title = $_.audio_challenge;
$('recaptcha_switch_img_btn').href = "javascript:Recaptcha.switch_type('image');";
$('recaptcha_switch_img_btn').title = $_.visual_challenge;
$('recaptcha_whatsthis_btn').href = Recaptcha._get_help_link();
$('recaptcha_whatsthis_btn').target = "_blank";
$('recaptcha_whatsthis_btn').title = $_.help_btn;
$('recaptcha_whatsthis_btn').onclick = function () {
Recaptcha.showhelp();
return false;
};
$('recaptcha_table').className = "recaptchatable " + "recaptcha_theme_" + Recaptcha.theme;
if ($("recaptcha_instructions_image")) {
$("recaptcha_instructions_image").appendChild(document.createTextNode($_.instructions_visual));
}
if ($("recaptcha_instructions_audio")) {
$("recaptcha_instructions_audio").appendChild(document.createTextNode($_.instructions_audio));
}
if ($("recaptcha_instructions_error")) {
$("recaptcha_instructions_error").appendChild(document.createTextNode($_.incorrect_try_again));
}
},
_finish_widget: function() {
var $ = Recaptcha.$;
var $_ = RecaptchaStr;
var $ST = RecaptchaState;
var $OPT = RecaptchaOptions;
var theme = $OPT.theme;
switch (theme) {
case 'red': case 'white': case 'blackglass': case 'clean': case 'custom':
break;
default:
theme = 'red';
break;
}
if (!Recaptcha.theme) {
Recaptcha.theme = theme;
}
if (Recaptcha.theme != "custom") {
Recaptcha._init_builtin_theme();
} else {
// get the rules for audio/visual error/no error
Recaptcha._set_style("");
}
var challengeFieldHolder = document.createElement("span");
challengeFieldHolder.id = "recaptcha_challenge_field_holder";
challengeFieldHolder.style.display = "none";
$('recaptcha_response_field').parentNode.insertBefore(challengeFieldHolder, $('recaptcha_response_field'));
$('recaptcha_response_field').setAttribute("autocomplete", "off");
$('recaptcha_image').style.width = '300px';
$('recaptcha_image').style.height = '57px';
Recaptcha.should_focus = false;
Recaptcha._set_challenge($ST.challenge, 'image');
if ($OPT.tabindex) {
$('recaptcha_response_field').tabIndex = $OPT.tabindex;
if (Recaptcha.theme != "custom") {
$('recaptcha_whatsthis_btn').tabIndex = $OPT.tabindex;
$('recaptcha_switch_img_btn').tabIndex = $OPT.tabindex;
$('recaptcha_switch_audio_btn').tabIndex = $OPT.tabindex;
$('recaptcha_reload_btn').tabIndex = $OPT.tabindex;
}
}
if (Recaptcha.widget) {
Recaptcha.widget.style.display = '';
}
if ($OPT.callback) {
$OPT.callback();
}
},
switch_type : function (new_type) {
var $C = Recaptcha;
$C.type = new_type;
$C.reload ($C.type == 'audio' ? 'a' : 'v');
},
reload: function (reason) {
var $C = Recaptcha;
var $ = $C.$;
var $ST = RecaptchaState;
if (typeof(reason) == "undefined")
reason = 'r';
var scriptURL = $ST.server + "reload?c=" + $ST.challenge + "&k=" + $ST.site + "&reason=" + reason + "&type=" + $C.type + "&lang=" + RecaptchaOptions.lang;
if (typeof(RecaptchaOptions.extra_challenge_params) != "undefined") {
scriptURL += "&" + RecaptchaOptions.extra_challenge_params;
}
if ($C.type == 'audio') {
if (RecaptchaOptions.audio_beta_12_08) {
scriptURL += "&audio_beta_12_08=1";
} else {
scriptURL += "&new_audio_default=1";
}
}
$C.should_focus = reason != 't';
$C._add_script(scriptURL);
},
finish_reload: function(new_challenge, type) {
RecaptchaState.is_incorrect = false;
Recaptcha._set_challenge(new_challenge, type);
},
_set_challenge: function (new_challenge, type)
{
var $C = Recaptcha;
var $ST = RecaptchaState;
var $ = $C.$;
$ST.challenge = new_challenge;
// this should really be the case already...
$C.type = type;
// using innerHTML prevents back/forward from caching this
$('recaptcha_challenge_field_holder').innerHTML = "<input type='hidden' name='recaptcha_challenge_field' id='recaptcha_challenge_field' value='" + $ST.challenge + "'/>";
if (type == 'audio') {
$("recaptcha_image").innerHTML = Recaptcha.getAudioCaptchaHtml();
} else if (type == 'image') {
var imageurl = $ST.server + 'image?c=' + $ST.challenge;
// display:block due to http://developer.mozilla.org/en/docs/Images%2C_Tables%2C_and_Mysterious_Gap
// use innerHTML to avoid triggering a firefox dom preference
$('recaptcha_image').innerHTML = "<img style='display:block;' height='57' width='300' src='" + imageurl + "'/>";
}
Recaptcha._css_toggle("recaptcha_had_incorrect_sol", "recaptcha_nothad_incorrect_sol", $ST.is_incorrect);
Recaptcha._css_toggle("recaptcha_is_showing_audio", "recaptcha_isnot_showing_audio", type == 'audio');
$C._clear_input ();
if ($C.should_focus) {
$C.focus_response_field();
}
$C._reset_timer ();
},
_reset_timer : function () {
var $ST = RecaptchaState;
clearInterval(Recaptcha.timer_id);
Recaptcha.timer_id = setInterval ("Recaptcha.reload('t');", ($ST.timeout - 60*5) * 1000);
},
showhelp : function () {
window.open(Recaptcha._get_help_link(),"recaptcha_popup","width=460,height=570,location=no,menubar=no,status=no,toolbar=no,scrollbars=yes,resizable=yes");
},
_clear_input : function () {
var resp=Recaptcha.$('recaptcha_response_field');
resp.value = "";
},
_displayerror : function(msg) {
var $=Recaptcha.$;
$('recaptcha_image').innerHTML = '';
$('recaptcha_image').appendChild (document.createTextNode(msg));
},
reloaderror : function (msg) {
Recaptcha._displayerror(msg);
},
_is_ie : function () { return (navigator.userAgent.indexOf("MSIE") > 0) && !window.opera; },
_css_toggle : function (classT, classF, isset) {
// try to do these CSS toggles just on the recaptcha widget. But,
// if that wasn't passed in, go for the document body.
var element = Recaptcha.widget;
if (!element)
element = document.body;
var classname = element.className;
classname = classname.replace(
new RegExp("(^|\\s+)"+ classT + "(\\s+|$)"), ' ');
classname = classname.replace(
new RegExp("(^|\\s+)"+ classF + "(\\s+|$)"), ' ');
classname += " " + (isset ? classT : classF);
element.className = classname;
},
_get_help_link : function () {
var lang = RecaptchaOptions.lang;
return 'http://recaptcha.net/popuphelp/' + (lang == 'en' ? "" : (lang + ".html"));
},
playAgain : function () {
var $ = Recaptcha.$;
$("recaptcha_image").innerHTML = Recaptcha.getAudioCaptchaHtml();
},
getAudioCaptchaHtml : function () {
var $C = Recaptcha;
var $ST = RecaptchaState;
var $ = Recaptcha.$;
var httpwavurl = $ST.server + "image?c=" + $ST.challenge;
if (httpwavurl.indexOf("https://") == 0) {
httpwavurl = "http://" + httpwavurl.substring(8);
}
var swfUrl = $ST.server + "/img/audiocaptcha.swf?v2";
var embedCode;
if ($C._is_ie()) {
embedCode = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="audiocaptcha" width="0" height="0" codebase="https://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + swfUrl + '" /><param name="quality" value="high" /><param name="bgcolor" value="#869ca7" /><param name="allowScriptAccess" value="always" /></object><br/>';
} else {
embedCode = '<embed src="' + swfUrl + '" quality="high" bgcolor="#869ca7" width="0" height="0" name="audiocaptcha" align="middle" play="true" loop="false" quality="high" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"></embed> ';
}
var cantHearCode = (Recaptcha.checkFlashVer() ? '<br/><a class="recaptcha_audio_cant_hear_link" href="#" onclick="Recaptcha.playAgain(); return false;">' + RecaptchaStr.play_again + '</a>' : '') +
'<br/><a class="recaptcha_audio_cant_hear_link" target="_blank" href="' + httpwavurl + '">' + RecaptchaStr.cant_hear_this + '</a>';
return embedCode + cantHearCode;
},
gethttpwavurl : function () {
var $ST = RecaptchaState;
if (Recaptcha.type == 'audio') {
var httpwavurl = $ST.server + "image?c=" + $ST.challenge;
if (httpwavurl.indexOf("https://") == 0) {
httpwavurl = "http://" + httpwavurl.substring(8);
}
return httpwavurl;
}
return "";
},
checkFlashVer : function () {
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
var flashVer = -1;
if (navigator.plugins != null && navigator.plugins.length > 0) {
if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
var descArray = flashDescription.split(" ");
var tempArrayMajor = descArray[2].split(".");
flashVer = tempArrayMajor[0];
}
} else if ( isIE && isWin && !isOpera ) {
try {
// version will be set for 7.X or greater players
var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
var flashVerStr = axo.GetVariable("$version");
flashVer = flashVerStr.split(" ")[1].split(",")[0];
} catch (e) {
}
}
return flashVer >= 9;
},
getlang : function() {
return RecaptchaOptions.lang;
}
};

