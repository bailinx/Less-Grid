module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            options: {
                protocol: 'http',
                port: 9000, // 静态服务器端口
                hostname: '*',
                livereload: 35729 // watch监听的端口
            },
            server: {
                options: {
                    open: true,
                    base: [
                        'dist'
                    ]
                }
            }
        },
        watch: {
            less: {
                options: {
                    livereload: '<%=connect.options.livereload%>'
                },
                files: [
                    "less/*.less"
                ],
                tasks: ['less:compile']
            }
            /*scripts: {
                files: "js/*.js",
                tasks: ['uglify']
            }*/
        },
        less: {
            compile: {
                options: {
                    strictMath: true,
                    sourceMap: true
                },
                expand: true, // 动态扩展
                cwd: 'less/', // less源文件夹
                // src: ['**/*.less','!import.less'],
                src: ['*.less','!import.less'], // 不需要遍历子文件夹
                dest: 'dist/css/',
                ext: '.css'
            }
        }
    });

    grunt.registerTask('server', [
        'connect:server',
        'watch'
    ]);

    grunt.registerTask('lessc', ['less:compile']);
};
