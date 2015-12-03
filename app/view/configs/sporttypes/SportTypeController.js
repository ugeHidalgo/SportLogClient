/**
 * 
 */
Ext.define ('SportLog.view.configs.sporttypes.SportTypeController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.sporttype-controller',
    
    requires: [
    	'SportLog.utils.APIHelper'
    ],
    
    sportTypeStore: undefined,
    
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    	
    	apiHelper.setApiKey(me.getStore('sportTypesStore'));
    	
    	me.sportTypeStore = me.getStore('sportTypesStore');
    },
    
    onClickLoadStoreData : function (){
    	var me = this;
    		
    	me.sportTypeStore.load();
    },
    
    onClickNew: function () {
    	var me = this;
        
        var sportTypeModel = Ext.create('SportLog.model.SportType');
        sportTypeModel.set("id", "");
        sportTypeModel.set("name", "Nombre");
        sportTypeModel.set("coment", "");
        me.sportTypeStore.add(sportTypeModel);
    },
    
    onClickDelete: function () {
    	var me = this,
    		grid = Ext.getCmp('sportTypesGrid'),
    		selectedRows = grid.getSelectionModel().getSelection();
    		
        if(selectedRows.length<=0){
        	Ext.Msg.alert('Atención', 'No ha seleccionado ninguna fila para borrar.');
        	return;
        }
   
        me.sportTypeStore.remove(selectedRows);    
    },
    
    onClickSave: function(){
    	var me = this;
    	
    	me.sportTypeStore.sync({
    		success: function (batch, eOpts){
    			me.activitiesStore.load();
    			Ext.Msg.alert('Ok','Cambios actualizados correctamente.');
    		}
    	},{
    		failure: function (batch, eOpts) {
    			Ext.Msg.alert('Error','Los cambios no se han actualizado.');
    		}
    	});
    }
});

