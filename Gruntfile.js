'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'assets/js/*.js',
				'!assets/js/jquery.min.js'
			]
		},

		uglify: {
			dist: {
				files: {
					'assets/js/main.min.js': ['assets/js/main.js']
				}
			}
		},

		less: {
			dist: {
				files: {
					'assets/css/style.min.css': [
						'assets/css/normalize.css', 'assets/less/style.less'
					]
				},
				options: {
					compress: true,
					report: 'gzip',
					// LESS source map
					// To enable, update sourceMapRootpath based on your install
					sourceMap: true,
					sourceMapFilename: 'assets/css/style.min.css.map',
					sourceMapRootpath: '/'
				}
			}
		},

		watch: {
			options: {
			    dateFormat: function(time) {
			        grunt.log.writeln('Finished in ' + time + 'ms');
			        grunt.log.writeln('Waiting...');
			        grunt.log.writeln('');
			    }
			},
			less: {
				files: [
					'assets/less/*.less'
				],
				tasks: ['less'],
				options: {
					spawn: false
				}
			},
			js: {
				files: [
					'<%= jshint.all %>'
				],
				tasks: ['jshint']
			}
		},

	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks
	grunt.registerTask('default', [
		'jshint',
		'uglify',
		'less'
	]);

	grunt.registerTask('dev', [
		'watch'
	]);

};