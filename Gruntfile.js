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
				options: {
					compress: false
				},
				files: {
					'assets/css/dist/style.min.css': [
						'assets/css/normalize.css', 'assets/less/style.less'
					]
				}
			}
		},

		autoprefixer: {
			dist: {
				options: {
					browsers: ['last 2 versions', 'ie 8', 'ie 9'],
					cascade: false,
				},
				src: 'assets/css/dist/style.min.css'
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
				tasks: ['less', 'autoprefixer']
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
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks
	grunt.registerTask('default', [
		'jshint',
		'uglify',
		'less',
		'autoprefixer'
	]);

};
