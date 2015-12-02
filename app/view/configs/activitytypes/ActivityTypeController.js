/**
 * 
 */
Ext.define ('SportLog.view.configs.activitytypes.ActivityTypeController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.activitytype-controller',
   
    requires: [
    	'SportLog.utils.APIHelper'
    ],
    
     activitiesStore: undefined,
    
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    	
    	apiHelper.setApiKey(me.getStore('activitiesStore'));
    	
    	me.activitiesStore = me.getStore('activitiesStore');
    	
//    	this.cellEditing = new Ext.grid.plugin.CellEditing({
//            clicksToEdit: 1
//    	});
    },
        
    onClickLoadStoreData : function (){
    	var me = this;
    		
    	me.activitiesStore.load();
    },
    
    onClickNew: function () {
    	var me = this;
        
        var activitiesModel = Ext.create('SportLog.model.Activity');
        activitiesModel.set("id", "");
        activitiesModel.set("name", "Nombre");
        activitiesModel.set("sportType_id", "");
        me.activitiesStore.add(activitiesModel);
    },
    
    onClickDelete: function () {
    	var me = this,
    		grid = Ext.getCmp('activitiesGrid'),
    		selectedRows = grid.getSelectionModel().getSelection();
    		
        if(selectedRows.length<=0){
        	Ext.Msg.alert('Atención', 'No ha seleccionado ninguna fila para borrar.');
        	return;
        }
   
        me.activitiesStore.remove(selectedRows);    
    },
    
    onClickSave: function(){
    	var me = this;
    	
    	me.activitiesStore.sync({
    		success: function (batch, eOpts){
    			Ext.Msg.alert('Ok','Cambios actualizados correctamente.');
    		}
    	},{
    		failure: function (batch, eOpts) {
    			Ext.Msg.alert('Error','Los cambios no se han actualizado.');
    		}
    	});
    }
    

});