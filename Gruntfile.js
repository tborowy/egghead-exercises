/*jshint camelcase:false*/
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/unit/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/unit/**/*.js'

module.exports = function (grunt)
{

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-mutation-testing');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    require('load-grunt-tasks')(grunt);

    var config = {
        app: 'app'
    };

    grunt.initConfig({
        config: config, watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }, files: ['<%= config.app %>/**/*.html', '<%= config.app %>/**/*.js']
            }
        },

        connect: {
            options: {
                port: 9000, livereload: 35729, hostname: '127.0.0.1'
            }, test: {
                options: {
                    // set the location of the application files
                    base: ['app'], port: 9001
                }
            }, livereload: {
                options: {
                    open: true, middleware: function (connect)
                    {
                        return [connect().use('/bower_components', connect.static('./bower_components')), connect.static(config.app)

                        ];
                    }
                }
            }
        }, protractor_webdriver: {
            driver: {
                options: {}
            }
        }, protractor: {
            options: {
                configFile: 'test/config.js', keepAlive: false, noColor: false

            }, continuous: {
                options: {
                    keepAlive: true
                }
            }
        }, jshint: {
            all: ['app/**/*.js']
        }, mutationTest: {
            options: {
                testFramework: 'jasmine',

                logLevel: 'WARN', maxReportedMutationLength: 0, reporters: {
                    html: {
                        dir: 'test/target/mutation-test', successThreshold: 70
                    }, text: {
                        dir: 'test/target/mutation-test'
                    }
                }
            }, karma: {
                options: {
                    code: ['app/bower_components/angular/angular.js', 'app/bower_components/angular-mocks/angular-mocks.js', 'app/*.js'],
                    specs: 'test/unit/*.spec.js',
                    mutate: 'app/*.js',
                    ignoreReplacement: ['^console$'],
                    testFramework: 'karma',
                    karma: {
                        frameworks: ['jasmine'], browsers: ['PhantomJS'], configFile: 'test/karma.conf.js'
                    },
                    logLevel: 'DEBUG',
                    reporters: {
                        text: {
                            file: 'karma.txt'
                        }
                    }
                }
            }

        }, karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        }
    });

    grunt.registerTask('serve', function ()
    {
        grunt.task.run(['connect:livereload', 'watch']);
    });
    grunt.registerTask('test', ['connect:test', 'protractor']);

    grunt.registerTask('default', ['serve']);
};
