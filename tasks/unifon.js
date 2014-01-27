/**
 * grunt-unifon
 * ------------
 * Grunt task to unify javascript files, configured by JSON.
 */
module.exports = function(grunt){
	var path = require("path"),
		_ = grunt.util._;

	grunt.registerMultiTask("unifon", "Unify javascript", function(){
		var my = {};

		my.options = this.options({
			separator: "\n"
		});

		my.process = function(json){
			var files, dir, data = [];
			files = grunt.file.readJSON(json);
			dir = path.dirname(json);
			files.forEach(function(name){
				data.push(grunt.file.read(path.join(dir, name)));
			});
			return data.join(my.options.separator);
		};

		my.render = {
			log: _.template("> Adding <%=dest %> <= <%=src %>")
		};

		this.files.forEach(function(o){
			var data = [];
			o.orig.src.forEach(function(name){
				data.push(my.process(name));
			});
			grunt.file.write(o.dest, data.join(my.options.separator));
			grunt.log.write(
				my.render.log({
					dest: o.dest,
					src: o.orig.src.join(",")
				})
			);
		});
	});
};