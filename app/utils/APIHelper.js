/**
 * 
 */
 Ext.define('SportLog.utils.APIHelper', {
 	requires: [	
    	'SportLog.globals.User'
    ],
 	
 	setApiKey: function (store) {
    	var me = this,
    		authValue = SportLog.globals.User.apiKey;

    	Ext.apply(store.proxy.headers, {"Authorization":authValue});
    }	
    
    //Old SetAPI (se ponia en el controller directamente)
    //    setApiKey: function () {
	//    	var me = this,
	//    		authValue = SportLog.globals.User.apiKey,
	//    		store= me.getStore("sportTypesStore");
	// 
	//    	Ext.apply(store.proxy.headers, {"Authorization":authValue});
	//    }
 });