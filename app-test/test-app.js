/**
 *  Loader for test cases
 */
Ext.Loader.setConfig ({enabled: true});

// Loading different components like controller, model, view..
Ext.application ({
	 controllers:[ ],
	 models: [  ],
	 stores: [  ],
	 views: [  ],
	 autoCreateViewport: false,
	 name: 'SportLog'
	 
//	 launch: function () {
//		var jasmineEnv = jasmine.getEnv ();
//		jasmineEnv.updateInterval = 1000;
//		var htmlReporter = new jasmine.HtmlReporter ();
//		jasmineEnv.addReporter (htmlReporter);
//		jasmineEnv.execute ();
//     }
});