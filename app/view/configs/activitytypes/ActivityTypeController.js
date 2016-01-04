/**
 * 
 */
Ext.define ('SportLog.view.configs.activitytypes.ActivityTypeController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.activitytype-controller',
   
    requires: [
    	'SportLog.utils.APIHelper',
    	'SportLog.store.SportType'
    ],
    
    sportTypesComboStore: undefined,
    activityTypesStore: undefined,
    
    userId: undefined,
    
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    			
    	me.createSportTypesComboboxStore();
    	
    	me.userId = SportLog.globals.User.id;
    	
    	apiHelper.setApiKey(me.getStore('activityTypesStore'));
    	me.activityTypesStore = me.getStore('activityTypesStore');
    },
    
    createSportTypesComboboxStore: function (){
    	var me = this, sportTypesCombo;
    	
    	me.sportTypesComboStore = Ext.create('Ext.data.Store',{
    		model: 'SportLog.model.SportType',
    		proxy: {
        		type: 'ajax',
        		url: '/SportLogServer/API/SportTypes/sportTypes',
        		headers: {
        			'Authorization' : SportLog.globals.User.apiKey
        		},
        		reader: {
            		type: 'json',
            		rootProperty: 'data'
        		}
    		},
    		autoLoad: true
    	});
    	
    	sportTypesCombo = Ext.getCmp('sportTypesCombobox');
    	sportTypesCombo.bindStore(me.sportTypesComboStore);
    },
    
    renderFunction : function(value){
    	var me = this,
    		sportTypesCombo,record;
    	
    	sportTypesCombo = Ext.getCmp('sportTypesCombobox');
//    	record = sportTypesCombo.findRecord (sportTypesCombo.valueField, value);
//    	return record ? record.get(sportTypesCombo.displayField) : 'Valor no encontrado';
    	record = me.sportTypesComboStore.findRecord ('id', value);
    		
    	if (!record){
    		me.sportTypesComboStore.load();
    		record = me.sportTypesComboStore.findRecord ('id', value);
    	}
    	return record ? record.get('name') : 'Valor no encontrado';
    },
        
    onClickLoadStoreData : function (){
    	var me = this;
    		
    	me.activityTypesStore.load();
    },
    
    onClickNew: function () {
    	var me = this;
        
        var activitiesModel = Ext.create('SportLog.model.ActivityType');
        activitiesModel.set("id", "");
        activitiesModel.set("name", "Nombre");
        activitiesModel.set("sportType_id", "");
        activitiesModel.set("userId", me.userId);
        me.activityTypesStore.add(activitiesModel);
    },
    
    onClickDelete: function () {
    	var me = this,
    		grid = Ext.getCmp('activityTypesGrid'),
    		selectedRows = grid.getSelectionModel().getSelection();
    		
        if(selectedRows.length<=0){
        	Ext.Msg.alert('Atención', 'No ha seleccionado ninguna fila para borrar.');
        	return;
        }
   
        me.activityTypesStore.remove(selectedRows);    
    },
    
    onClickSave: function(){
    	var me = this;
    	
    	me.activityTypesStore.sync({
    		success: function (batch, eOpts){
    			me.activityTypesStore.load();
    			Ext.Msg.alert('Ok','Cambios actualizados correctamente.');
    		}
    	},{
    		failure: function (batch, eOpts) {
    			Ext.Msg.alert('Error','Los cambios no se han actualizado.');
    		}
    	});
    }
    

});