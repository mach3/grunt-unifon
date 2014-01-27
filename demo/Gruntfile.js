
module.exports = function(grunt){

	grunt.loadTasks("../tasks");

	grunt.initConfig({
		unifon: {
			dest: {
				files: {
					"js/main.js": ["js/foo.json", "js/bar.json"]
				}
			}
		}
	});

};