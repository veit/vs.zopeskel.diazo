module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./",
                    paths: {
                        'bootstrap-carousel': 'bower_components/bootstrap/js/carousel'
                    },
                    name: "js/bootstrap",
                    out: "diazo_resources/static/custom.js",
                    optimize: "none"
                }
            }
        },
        less: {
            dist: {
                options: {
                    paths: ['bower_components/...', '../mockup/bower_components', '../mockup/less'],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '++resource++diazo_resources/bootstrap.css.map',
                    sourceMapFilename: 'diazo_resources/static/bootstrap.css.map'
                },
                files: {
                    'diazo_resources/static/custom.css': 'less/custom.less',
                    '../mockup/build/plone.min.css': '../mockup/less/plone.less',
                }
            }
        },
        copy: {
            bootstrap: {
                files: [
                    { expand: true, cwd: 'diazo_resources/', src: 'img/**', dest: 'diazo_resources/static/img/' },
                    { expand: true, cwd: 'diazo_resources/', src: 'fonts/**', dest: 'diazo_resources/static/fonts/' },
                    { expand: true, cwd: 'bower_components/bootstrap/', src: 'fonts/**', dest: 'diazo_resources/static/fonts/' }
                ]
            }
        }
    });

    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-sed');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('bsync', ["browserSync:html", "watch"]);
    grunt.registerTask('plone-bsync', ["browserSync:plone", "watch"]);
};

