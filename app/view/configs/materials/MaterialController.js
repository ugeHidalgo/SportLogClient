/**
 * 
 */
 Ext.define ('SportLog.view.configs.materials.MaterialController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.material-controller',
    
    requires: [
    	'SportLog.utils.APIHelper',
    	'SportLog.store.Material'
    ],
    
    materialsStore: undefined,
     
    
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    	
    	apiHelper.setApiKey(me.getStore('materialsStore'));
    	me.materialsStore = me.getStore('materialsStore');
    },
    
    onClickLoadStoreData : function (){
    	var me = this;
    		
    	me.materialsStore.load();
    },
    
    onClickNew: function () {
    	var me = this;
        
        var materialModel = Ext.create('SportLog.model.Material');
        materialModel.set("id", "");
        materialModel.set("status", "1");
        materialModel.set("created_at",new Date());
        me.materialsStore.add(materialModel);
    },
    
    onClickDelete: function () {
    	var me = this,
    		grid = Ext.getCmp('materialsGrid'),
    		selectedRows = grid.getSelectionModel().getSelection();
    		
        if(selectedRows.length<=0){
        	Ext.Msg.alert('Atención', 'No ha seleccionado ninguna fila para borrar.');
        	return;
        }
   
        me.materialsStore.remove(selectedRows);    
    },
    
    onClickSave: function(){
    	var me = this;
    	
    	me.materialsStore.sync({
    		success: function (batch, eOpts){
    			me.materialsStore.load();
    			Ext.Msg.alert('Ok','Cambios actualizados correctamente.');
    		}
    	},{
    		failure: function (batch, eOpts) {
    			Ext.Msg.alert('Error','Los cambios no se han actualizado.');
    		}
    	});
    }
 });