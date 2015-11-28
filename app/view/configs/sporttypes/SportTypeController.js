/**
 * 
 */
Ext.define ('SportLog.view.configs.sporttypes.SportTypeController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.sporttype-controller',
    
    sportTypeStore: undefined,
    
    requires: [
    	'SportLog.utils.APIHelper'
    ],
    
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
    		selectedRows = me.getView().getSelectionModel().getSelection();
    		
        if(selectedRows.length<=0){
        	Ext.Msg.alert('Atención', 'No ha seleccionado ninguna fila para borrar.');
        	return;
        }
   
        me.sportTypeStore.remove(selectedRows);    
    },
    
    onClickSave: function(){
    	
    }
});

