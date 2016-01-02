/**
 * 
 */
 Ext.define ('SportLog.view.main.dashboard.DashboardController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard-controller',
    
    requires: [
    	'SportLog.utils.APIHelper',
    	//'SportLog.store.Session'
    ],
    
    sessionsStore: undefined,
     
    
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    	
    	apiHelper.setApiKey(me.getStore('sessionsStore'));
    	me.sessionsStore = me.getStore('sessionsStore');
    }
 });