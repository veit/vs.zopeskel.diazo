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
                    name: "js/require",
                    out: "static/js/require.js",
                    optimize: "none"
                }
            }
        },
        less: {
            dist: {
                options: {
                    paths: ['bower_components/...',],
                    strictMath: false,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapFilename: 'less/custom.css.map'

                },
                files: {
                    'static/css/custom.css': 'less/custom.less',
                }
            }
        },
        copy: {
            bootstrap: {
                files: [
                    { expand: true, cwd: 'theme/', src: 'img/**', dest: 'static/'},
                    { expand: true, cwd: 'theme/', src: 'fonts/**', dest: 'static/'},
                    { expand: true, cwd: 'bower_components/bootstrap/', src: 'fonts/**', dest: 'static/',}

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

