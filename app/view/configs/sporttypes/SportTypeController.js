/**
 * 
 */
Ext.define ('SportLog.view.configs.sporttypes.SportTypeController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.sporttype-controller',
    
    requires: [
    	'SportLog.utils.APIHelper'
    ],
    
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    	
    	apiHelper.setApiKey(me.getStore('sportTypesStore'));
    }
});