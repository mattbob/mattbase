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
					cleancss: true,
					// report: 'min',

					// LESS source map
					// To enable, set sourceMap to true and update sourceMapRootpath based on your install
					sourceMap: true,
					sourceMapFilename: 'assets/css/style.min.css.map',
					sourceMapRootpath: '/'
				}
			}
		},

		watch: {
			less: {
				files: [
					'assets/less/*.less'
				],
				tasks: ['less']
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