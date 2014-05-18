=================
vs.zopeskel.diazo
=================

.. contents ::

Introduction
============

`ZopeSkel <https://pypi.python.org/pypi/ZopeSkel>`_ template which allows
individual adaptations of the Bootstrap theme. Therefore it uses `z3c.jbot
<https://pypi.python.org/pypi/z3c.jbot/>`_ to overwrite existing templates
with `z3c.jbot <https://pypi.python.org/pypi/z3c.jbot/>`_. 

Also, you should use Less variables, mixins, etc. Therefore, the
`Buildout <http://www.buildout.org/>`_ configuration file will also install
`Bower <http://bower.io/>`_ and `Grunt <http://gruntjs.com/>`_ to recompile the
bootstrap Less files.

Requirements
============

* This package is only compatible with ZopeSkel<3.0.

Installation
============

Add these lines to your development buildout::

    [buildout]
    parts =
        zopeskel

    [zopeskel]
    recipe = zc.recipe.egg
    unzip = true
    eggs =
        PasteScript
        ZopeSkel
        vs.zopeskel.diazo

Re-run buildout, e.g. with::

    $ ./bin/buildout -c devel.cfg

Create add on
=============

Add ons under development are typically created in your buildout’s ``src``
directory. To add a package named ``my.theme`` you can enter the following
in the terminal::

    $ cd src/
    $ ../bin/zopeskel bootstrap my.theme

This will create a Python package with a directory structure like this::

    my.theme
    ├── bootstrap.py
    ├── buildout.cfg
    ├── docs
    │   ├── INSTALL.txt
    │   ├── LICENSE.GPL
    │   └── LICENSE.txt
    ├── my
    │   └── theme
    │       ├── configure.zcml
    │       ├── diazo_resources
    │       │   ├── favicon.ico
    │       │   ├── img
    │       │   │   ├── apple-touch-icon-144x144-precomposed.png
    │       │   │   ├── apple-touch-icon-57x57-precomposed.png
    │       │   │   ├── apple-touch-icon-72x72-precomposed.png
    │       │   │   ├── apple-touch-icon.png
    │       │   │   └── apple-touch-icon-precomposed.png
    │       │   ├── index.html
    │       │   ├── manifest.cfg_tmpl
    │       │   ├── preview.png
    │       │   ├── rules.xml
    │       │   └── static
    │       │       ├── css
    │       │       │   └── main.css
    │       │       ├── fonts
    │       │       ├── img
    │       │       └── js
    │       │           └── main.js
    │       ├── Gruntfile.js
    │       ├── interfaces.py
    │       ├── locales
    │       ├── overrides
    │       │   └── plone.app.layout.viewlets.footer.pt
    │       ├── profiles
    │       │   └── default
    │       │       ├── browserlayer.xml
    │       │       ├── cssregistry.xml
    │       │       ├── jsregistry.xml
    │       │       ├── metadata.xml
    │       │       └── theme.xml
    │       └── version.txt
    ├── setup.cfg
    └── setup.py

Generate the theme
==================

To genereate the theme you can switch to your newly created product annd run
buildout, e.g.::

    $ cd src/my.theme
    $ python bootstrap
    $ ./bin/buildout

Now you can start the instance and activate ``my.theme`` in *control panel*  →
*Extensions*.

Customize the theme
===================

``diazo_resources``
-------------------

``diazo_resources/static``
--------------------------

``locales``
-----------

``profiles/default``
--------------------

Usally the files ``public.css``, ``columns.css`` and ``portlets.css`` are not
delivered with yout theme because of the TAL expression
``not: request/HTTP_X_THEME_ENABLED``.  
  
``overrides``
-------------


