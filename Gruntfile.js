module.exports = function(grunt) {	
	var static_content 	= "C:/Program Files/Apache Software Foundation/Tomcat 7.0/webapps/ROOT/Calculator";
	var artifact_id		= "Calculator";
	var continuousIntegrationMode = grunt.option('ci') || false;
    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass_dest_path:static_content+"/css/"+artifact_id+".css",
        sass_src_path:"src/main/resources/sass/"+artifact_id+".scss",
		watch:{
			js:{
				files: [
						 'src/main/resources/html/*.html'
						,'target/external-resources/code/*.js'
						,'src/main/resources/html/partials/*.html'
						,'src/main/resources/css/*.css'
						,'src/main/resources/sass/*.scss'
						,'src/main/resources/js/driver/*.js'
						,'src/main/resources/js/services/*.js'
						,'src/main/resources/js/factory/*.js'
						,'src/main/resources/js/filters/*.js'
						,'src/main/resources/js/controllers/*.js'
						,'src/main/resources/js/directives/*.js'
						,'src/main/resources/js/filters/*.js'
						,'src/plugins/resources/js/services/*.js'
						,'src/plugins/resources/js/controllers/*.js'
						,'src/plugins/resources/js/directives/*.js'
						,'src/plugins/resources/js/driver/*.js'						
						,'src/plugins/resources/html/partials/*.html'
				],
				tasks: ['ngtemplates:app','concat','sass','copy:html','copy:img','copy:css'],
				options: {
					spawn: false,
					livereload:true
				},
			},
		},
        concat: {
            dist: {
				src: [					
					'src/main/resources/js/driver/*.js',					
					'src/main/resources/js/factory/*.js',
					'src/main/resources/js/services/*.js',
					'src/main/resources/js/filters/*.js',
					'src/main/resources/html/templates/templates.js',
					'src/main/resources/js/controllers/*.js',
					'src/main/resources/js/directives/*.js'
				],
				dest: static_content+'/js/'+artifact_id+'.js',
			},
			
			i18n: {
				src: [
						'src/main/resources/i18n/locale.js'
				], 
				dest	: static_content+'/js/locale/locale.js',
			},
        },
        
         sass: {                              // Task
		    dist: {                            // Target
		       files: {                         // Dictionary of files
		        "<%= sass_dest_path %>": "<%= sass_src_path %>"   		        
		    }
		  }
		  },
        
        
		copy: {
			css: {
				files: [
					{
						expand	: true, 
						flatten	: true,												//Remove all the path folders while copying
						src		: ['src/main/resources/css/**'], 
						dest	: static_content+'/css/', 
						filter	: 'isFile'
					},
				]
				
			},
			html: {
				files: [
					{
						expand	: true, 
						flatten	: true,
						src		: ['src/main/resources/html/*.html'], 
						dest	: static_content+'/html/', 
						filter	: 'isFile'
					},
				]
			},
			img: {
				files: [
					{
						expand	: true, 
						flatten	: true,
						src		: ['src/main/resources/img/**'], 
						dest	: static_content+'/img/', 
						filter	: 'isFile'
					},
				]
			},
		},
		
		ngtemplates:  {       
			app: {
				cwd:      'src/main/resources',
				src:      'html/partials/**.html',
				dest:     'src/main/resources/html/templates/templates.js',
				options : {
					module: 'Calculator',
					htmlmin : {
						collapseWhitespace: true
					}
				}
			}
			
        }
    });

 // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-sass');
	
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', 'Creating static content files....',function(){
		grunt.task.run('ngtemplates','ngtemplates');
		grunt.task.run('concat','concat');
		grunt.task.run('copy','copy');
	});
};