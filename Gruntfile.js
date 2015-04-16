'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'assets/js/main.js'
			]
		},

		uglify: {
			dist: {
				options: {
					mangle: false,
					sourceMap: true
				},
				files: {
					'assets/js/dist/main.min.js': ['assets/js/main.js']
				}
			}
		},

		less: {
			dist: {
				files: {
					'assets/css/dist/style.min.css': [
						'assets/css/normalize.css', 'assets/less/style.less'
					]
				}
			}
		},

		pleeease: {
			dist: {
				options: {
					autoprefixer: { 'browsers': ['last 2 versions', 'ie 9'] },
					minifier: { preserveHacks: true, removeAllComments: true },
					mqpacker: true
				},
				files: {
					'assets/css/dist/style.min.css': 'assets/css/dist/style.min.css'
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
				options: {
					spawn: false,
					livereload: true
				},
				files: [
					'assets/less/*.less'
				],
				tasks: ['less', 'pleeease']
			},
			js: {
				files: [
					'<%= jshint.all %>'
				],
				tasks: ['jshint', 'uglify']
			}
		}

	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-pleeease');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks
	grunt.registerTask('default', [
		'jshint',
		'uglify',
		'less',
		'pleeease'
	]);

};
