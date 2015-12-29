module.exports = function(grunt){
	require('jit-grunt')(grunt);

	grunt.initConfig({
		less:{
			development:{
				options:{
					optimization: 2
				},
				files:{
					"./public/css/main.css": "./public/less/main.less" //destination file
				}
			}
		},
		watch:{
			styles:{
				files: ['./public/less/**/*.less'], //destination file and source file
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		}
	});

	grunt.registerTask('default', ['less', 'watch']);
};