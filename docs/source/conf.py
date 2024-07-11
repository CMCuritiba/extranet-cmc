# Configuration file for the Sphinx documentation builder.
# Plone Documentation build configuration file


# -- Path setup --------------------------------------------------------------

from datetime import datetime

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath("."))

import os
import json

# -- Project information -----------------------------------------------------

project = "Extranet CMC"
copyright = "Câmara Municipal de Curitiba"
author = "Ramiro Batista da Luz"
trademark_name = "CMC"
now = datetime.now()
year = str(now.year)

# The version info for the project you're documenting, acts as replacement for
# |version| and |release|, also used in various other places throughout the
# built documents.
#

with open(
    os.path.join(os.path.abspath("."), "../../frontend/package.json"), "r"
) as package_json:
    data = package_json.read()

version_from_package_json = json.loads(data)["version"]

if version_from_package_json:
    # The short X.Y version.
    version = version_from_package_json
    # The full version, including alpha/beta/rc tags.
    release = version_from_package_json
else:
    version = "14.8.1"
    release = "14.8.1"

# -- General configuration ----------------------------------------------------

# Add any paths that contain templates here, relative to this directory.
templates_path = ["_templates"]

# Add any Sphinx extension module names here, as strings.
# They can be extensions coming with Sphinx (named "sphinx.ext.*")
# or your custom ones.
extensions = [
    "myst_parser",
    "hieroglyph",
    "sphinx.ext.autodoc",
    "sphinx.ext.ifconfig",
    "sphinx.ext.intersphinx",
    "sphinx.ext.todo",
    "sphinx_copybutton",
    "sphinxext.opengraph",
    "sphinxcontrib.video",
]

# sphinx-hieroglyph extension
slide_theme = 'slides2'

# If true, the Docutils Smart Quotes transform, originally based on SmartyPants
# (limited to English) and currently applying to many languages, will be used
# to convert quotes and dashes to typographically correct entities.
# Note to maintainers: setting this to `True` will cause contractions and
# hyphenated words to be marked as misspelled by spellchecker.
smartquotes = False

# The name of the Pygments (syntax highlighting) style to use.
# pygments_style = "sphinx.pygments_styles.PyramidStyle"
pygments_style = "sphinx"

# Options for the linkcheck builder
# Ignore localhost
linkcheck_ignore = [
    # TODO: Before release, clean up any links to ignore
    r"http://localhost",
    r"http://0.0.0.0",
    r"http://127.0.0.1",
    # Ignore pages that require authentication
    r"https://github.com/orgs/plone/teams/",  # requires auth
    r"https://github.com/plone/volto/issues/new/choose",  # requires auth
    # Ignore github.com pages with anchors
    r"https://github.com/.*#.*",
    # Ignore other specific anchors
    r"https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",  # TODO retest with latest Sphinx when upgrading theme. chromewebstore recently changed its URL and has "too many redirects".
    r"https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd",  # TODO retest with latest Sphinx when upgrading theme. chromewebstore recently changed its URL and has "too many redirects".
    r"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors#Identifying_the_issue",
    r"https://docs.cypress.io/guides/references/migration-guide#Migrating-to-Cypress-version-10-0",
    r"https://stackoverflow.com",  # volto and documentation  # TODO retest with latest Sphinx.
]
linkcheck_anchors = True
linkcheck_timeout = 10
linkcheck_retries = 2

# This is our wordlist with known words, like Github or Plone ...
spelling_word_list_filename = "spelling_wordlist.txt"
spelling_ignore_pypi_package_names = True

# The suffix of source filenames.
source_suffix = {
    ".md": "markdown",
    ".bugfix": "markdown",
    ".breaking": "markdown",
    ".documentation": "markdown",
    ".feature": "markdown",
    ".internal": "markdown",
}

# The master toctree document.
master_doc = "index"

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = [
    "spelling_wordlist.txt",
    "contributing/branch-policy.md",
]

suppress_warnings = [
    # "toc.excluded",  # Suppress `WARNING: document isn't included in any toctree`
    "toc.not_readable",  # Suppress `WARNING: toctree contains reference to nonexisting document 'news*'`
]

html_extra_path = [
    "robots.txt",
]

html_static_path = [
    "_static",
]

# -- Options for myST markdown conversion to html -----------------------------

# For more information see:
# https://myst-parser.readthedocs.io/en/latest/syntax/optional.html
myst_enable_extensions = [
    "deflist",  # You will be able to utilise definition lists
    # https://myst-parser.readthedocs.io/en/latest/syntax/optional.html#definition-lists
    "linkify",  # Identify “bare” web URLs and add hyperlinks.
    "colon_fence",  # You can also use ::: delimiters to denote code fences,\
    #  instead of ```.
    "html_image",
]


# -- Intersphinx configuration ----------------------------------

# This extension can generate automatic links to the documentation of objects
# in other projects. Usage is simple: whenever Sphinx encounters a
# cross-reference that has no matching target in the current documentation set,
# it looks for targets in the documentation sets configured in
# intersphinx_mapping. A reference like :py:class:`zipfile.ZipFile` can then
# linkto the Python documentation for the ZipFile class, without you having to
# specify where it is located exactly.
#
# https://www.sphinx-doc.org/en/master/usage/extensions/intersphinx.html
#
intersphinx_mapping = {
    "plone": ("https://6.docs.plone.org/", None),
    "python": ("https://docs.python.org/3/", None),
    "training": ("https://training.plone.org/", None),
}


# -- GraphViz configuration ----------------------------------

graphviz_output_format = "svg"


# -- OpenGraph configuration ----------------------------------

ogp_site_url = "https://6.docs.plone.org/"
ogp_description_length = 200
ogp_image = "https://6.docs.plone.org/_static/Plone_logo_square.png"
ogp_site_name = "Plone Documentation"
ogp_type = "website"
ogp_custom_meta_tags = [
    '<meta property="og:locale" content="en_US" />',
]


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = "sphinx_book_theme"

html_logo = "_static/logo.svg"
html_favicon = "_static/favicon.ico"

html_css_files = ["custom.css", ("print.css", {"media": "print"})]

# See http://sphinx-doc.org/ext/todo.html#confval-todo_include_todos
todo_include_todos = True

# Announce that we have an opensearch plugin
# https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-html_use_opensearch
html_use_opensearch = "https://6.docs.plone.org"

html_theme_options = {
    # TODO: Either get a separate GA ID or enable this one once it is in production.
    # "google_analytics_id": "UA-1907133-6",
    "path_to_docs": "docs",
    "repository_url": "https://github.com/CMCuritiba/extranet-cmc",
    "repository_branch": "main",
    "use_repository_button": True,
    "use_issues_button": True,
    "use_edit_page_button": True,
    "extra_navbar": """
    <p class="ploneorglink">
        <a href="https://plone.org">
            <img src="../_static/Plone-logo.svg" alt="plone.org" /> plone.org</a>
    </p>""",
    "extra_footer": """<p>The text and illustrations in this website are licensed by the Plone Foundation under a Creative Commons Attribution 4.0 International license. Plone and the Plone® logo are registered trademarks of the Plone Foundation, registered in the United States and other countries. For guidelines on the permitted uses of the Plone trademarks, see <a href="https://plone.org/foundation/logo">https://plone.org/foundation/logo</a>. All other trademarks are owned by their respective owners.</p>
    """,
}

# The name for this set of Sphinx documents.  If None, it defaults to
# "<project> v<release> documentation".
html_title = "%(project)s v%(release)s" % {"project": project, "release": release}

# If false, no index is generated.
html_use_index = True

# -- Options for HTML help output -------------------------------------------------

# Output file base name for HTML help builder.
htmlhelp_basename = "ExtranetCMCDocumentation"


# -- Options for LaTeX output -------------------------------------------------

# Grouping the document tree into LaTeX files. List of tuples
# (source start file, target name, title, author, documentclass [howto/manual])
latex_documents = [
    (
        "index",
        "ExtranetCMCDocumentation.tex",
        "Extranet CMC Documentation",
        "Ramiro Batista da Luz",
        "manual",
    ),
]

# The name of an image file (relative to this directory) to place at the top of
# the title page.
latex_logo = "_static/logo2x.png"

# An extension that allows replacements for code blocks that
# are not supported in `rst_epilog` or other substitutions.
# https://stackoverflow.com/a/56328457/2214933
def source_replace(app, docname, source):
    result = source[0]
    for key in app.config.source_replacements:
        result = result.replace(key, app.config.source_replacements[key])
    source[0] = result


# Dict of replacements.
source_replacements = {
    "{NVM_VERSION}": "0.39.5",
}


def setup(app):
    app.add_config_value("source_replacements", {}, True)
    app.connect("source-read", source_replace)
    app.add_config_value("context", "volto", "env")
