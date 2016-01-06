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
    
    userId: undefined,
    sportTypesPanel : undefined,
    
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    		
    	me.userId = SportLog.globals.User.id;
    	
    	apiHelper.setApiKey(me.getStore('sportTypesStore'));
    	
    	me.sportTypeStore = me.getStore('sportTypesStore');
    	
    	me.sportTypesPanel = Ext.getCmp('sportTypesPanel');
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
        sportTypeModel.set("userId", me.userId);
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
    	var me = this, mask;
  	
    	if (!me.isDirty(me.sportTypeStore)) {
    		Ext.Msg.alert('Atención','No había cambios pendientes de grabar.');
    		return;
    	}
        mask = me.createMask(me.sportTypesPanel,'Grabando tipos de deporte...');
        mask.show();
    	me.sportTypeStore.sync({
    		success: function (batch, eOpts){
    			Ext.Msg.alert('Ok','Cambios actualizados correctamente.');
    			mask.hide();
    		}
    	},{
    		failure: function (batch, eOpts) {
    			Ext.Msg.alert('Error','Los cambios no se han actualizado.');
    			mask.hide();
    		}
    	});
    },
    
    createMask: function (targetToMask,messageToShowDuringMask) {
    	return new Ext.LoadMask({ target: targetToMask, msg: messageToShowDuringMask });
    },
    
    isDirty: function (store) {
    	return (store.getNewRecords().length > 0) ||
    		   (store.getUpdatedRecords().length >0 ) ||
    		   (store.getRemovedRecords().length > 0);
    }
});

