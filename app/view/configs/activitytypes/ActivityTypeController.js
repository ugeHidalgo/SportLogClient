/**
 * 
 */
Ext.define ('SportLog.view.configs.activitytypes.ActivityTypeController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.activitytype-controller',
    
        requires: [
    	'SportLog.utils.APIHelper'
    ],
    
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    	
    	apiHelper.setApiKey(me.getStore('activitiesStore'));
    	
    	this.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 1
    	});
    }
    
//    initComponent: function() {
//        this.cellEditing = new Ext.grid.plugin.CellEditing({
//            clicksToEdit: 1
//        });
});