'use strict';
module.exports = function( grunt ) {

	// CONFIG SETTINGS
	grunt.initConfig( {

		jshint: {
			options: {
				bitwise: true,
				browser: true,
				curly: true,
				eqeqeq: true,
				eqnull: true,
				esnext: true,
				immed: true,
				jquery: true,
				latedef: true,
				newcap: true,
				noarg: true,
				node: true,
				strict: false,
				trailing: true
			},
			all: [
				'Gruntfile.js',
				'assets/js/main.js'
			]
		},

		uglify: {
			prod: {
				options: {
					mangle: false,
					sourceMap: true
				},
				files: {
					'assets/js/main.min.js': [ 'assets/js/main.js' ]
				}
			}
		},

		less: {
			prod: {
				options: {
					compress: true,
					plugins: [
						new( require( 'less-plugin-autoprefix' ) )( {
							browsers: [ "last 2 versions" ]
						} ),
					],
					sourceMap: true,
					sourceMapFilename: 'assets/css/style.min.css.map',
					sourceMapURL: 'style.min.css.map'
				},
				files: {
					'assets/css/style.min.css': [
						'assets/less/style.less'
					]
				}
			}
		},

		watch: {
			options: {
				dateFormat: function( time ) {
					grunt.log.writeln( 'Finished in ' + time + 'ms' );
					grunt.log.writeln( 'Waiting...' );
					grunt.log.writeln( '' );
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
				tasks: [ 'less' ]
			},
			js: {
				files: [
					'<%= jshint.all %>'
				],
				tasks: [ 'jshint', 'uglify' ]
			}
		}

	} );

	// LOAD TASKS
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	// REGISTER COMMANDS
	grunt.registerTask( 'default', [
		'jshint',
		'uglify',
		'less'
	] );

};