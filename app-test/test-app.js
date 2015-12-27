/**
 *  Loader for test cases
 */
Ext.Loader.setConfig ({enabled: true});

// Loading different components like controller, model, view..
Ext.application ({
	 controllers:[ 'QuestionController' ],
	 models: [ 'Question' ],
	 stores: [ 'QuestionStore' ],
	 views: [ 'MainPanel' ],
	 autoCreateViewport: false,
	 name: 'QAApp'
});