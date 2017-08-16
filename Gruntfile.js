module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here


 	uglify: {
      		options: {
        		banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      		},
      		build: {
        		files: {
          		'node_modules/@angular/compiler/bundles/compiler.umd.js': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
          		'node_modules/@angular/core/bundles/core.umd.js': 'node_modules/@angular/core/bundles/core.umd.js',
          		'node_modules/systemjs/dist/system.src.js': 'node_modules/systemjs/dist/system.src.js',
          		'node_modules/@angular/forms/bundles/forms.umd.js': 'node_modules/@angular/forms/bundles/forms.umd.js',
          		'node_modules/@angular/common/bundles/common.umd.js': 'node_modules/@angular/common/bundles/common.umd.js',
          		'node_modules/@angular/router/bundles/router.umd.js': 'node_modules/@angular/router/bundles/router.umd.js',
          		'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
          		'node_modules/reflect-metadata/Reflect.js': 'node_modules/reflect-metadata/Reflect.js',
          		'node_modules/zone.js/dist/zone.js': 'node_modules/zone.js/dist/zone.js',
          		'node_modules/rxjs/Observable.js': 'node_modules/rxjs/Observable.js',
          		'node_modules/rxjs/Subscription.js': 'node_modules/rxjs/Subscription.js',
          		'node_modules/rxjs/operator/observeOn.js': 'node_modules/rxjs/operator/observeOn.js',
          		'node_modules/rxjs/operator/reduce.js': 'node_modules/rxjs/operator/reduce.js',
          		'node_modules/rxjs/operator/concatMap.js': 'node_modules/rxjs/operator/concatMap.js',
          		'node_modules/rxjs/operator/mergeMap.js': 'node_modules/rxjs/operator/mergeMap.js',
          		'node_modules/rxjs/operator/filter.js': 'node_modules/rxjs/operator/filter.js',
          		'node_modules/rxjs/observable/FromObservable.js': 'node_modules/rxjs/observable/FromObservable.js',
          		'node_modules/rxjs/operator/first.js': 'node_modules/rxjs/operator/first.js',
          		'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js': 
'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
          		'node_modules/rxjs/Subscriber.js': 'node_modules/rxjs/Subscriber.js',
          		'node_modules/rxjs/operator/catch.js': 'node_modules/rxjs/operator/catch.js',
          		'node_modules/rxjs/observable/ArrayObservable.js': 'node_modules/rxjs/observable/ArrayObservable.js',
          		'node_modules/rxjs/operator/map.js': 'node_modules/rxjs/operator/map.js',
          		'node_modules/rxjs/operator/concatAll.js ': 'node_modules/rxjs/operator/concatAll.js ',
          		'node_modules/rxjs/operator/mergeAll.js': 'node_modules/rxjs/operator/mergeAll.js',
          		'node_modules/rxjs/observable/EmptyObservable.js': 'node_modules/rxjs/observable/EmptyObservable.js',
          		'node_modules/rxjs/Notification.js': 'cads.informatik.haw-hamburg.de/node_modules/rxjs/Notification.js',
          		'node_modules/rxjs/observable/PromiseObservable.js': 'node_modules/rxjs/observable/PromiseObservable.js',
          		'node_modules/rxjs/operator/last.js': 'node_modules/rxjs/operator/last.js'
        		}
		}
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};

