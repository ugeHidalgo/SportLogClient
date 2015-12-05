/**
 * 
 */
Ext.define('SportLog.view.configs.activitytypes.ActivityType', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.activitytype',
    
    controller: 'activitytype-controller',
    viewModel: {
        type: 'activitytype-model'
    },

    requires: [
        'SportLog.view.configs.activitytypes.ActivityTypeController',
        'SportLog.view.configs.activitytypes.ActivityTypeModel',
        'SportLog.view.configs.sporttypes.SportTypeModel'
    ],
    
    height: 515,
    width: 600,
    title: 'Tipos de actividad',
    bodyPadding: 10,
    closable: false,
    border: true,
    collapsible: true,
    layout: 'vbox',
    
    items: [{
    	xtype: 'grid',
    	id: 'activitiesGrid',
    	scrollable: true,
    	flex: 1,
    	width: '100%',
    	selType: 'checkboxmodel',
    	selModel: {
    		mode : 'MULTI'
    	},
    
    	bind: '{activitiesStore}',
    	viewConfig: {
    		emptyText: 'No hay tipos de actividad disponibles'
    	},
    	
    	plugins : [
    		Ext.create('Ext.grid.plugin.RowEditing', {
            	clicksToEdit : 2
        	})
        ],
    
    	columns: [{
       		text: 'Código', 
    		dataIndex: 'id', 
    		width: 40, 
    		align: 'right' 
    	}, { 
    		text: 'Nombre', 
    		dataIndex: 'name', 
    		width: 200,
    		editor : { allowBlank : true }
    	}, { 
    		text: 'Tipo de deporte', 
    		dataIndex: 'sportType_id', 
    		width: 100,
        	editor: new Ext.form.field.ComboBox({
        			id: 'sportTypesCombobox',
        			displayField: 'name',
        			valueField: 'id',
        			queryMode: 'local'
//                  typeAhead: true,
//                    triggerAction: 'all',
//     				store: undefined
//                    store: Ext.create('Ext.data.Store',{
//    							model: 'SportType',
//    							proxy: {
//        							type: 'ajax',
//        							url: '/SportLogServer/API/sportTypes',
//        							headers: {
//        								'Authorization' : SportLog.globals.User.apiKey
//        							},
//        							reader: {
//            							type: 'json',
//            							rootProperty: 'data'
//        							}
//    							},
//    							autoLoad: true
//    							//autoSync: true
//    						})
//                    store: [
//                        ['1','el 1'],
//                        ['2','el 2'],
//                        ['3','el 3'],
//                        ['4','el 4'],
//                        ['5','el 5']
//                    ]
        	})
    	}]
    },{
    	xtype: 'container',
    	margin: '10 0 0 0',
    	height: 40,
    	width: '100%',
    	items: [{
    		xtype: 'button',
    		text: 'Nuevo',
        	itemId: 'btnNew',
        	handler: 'onClickNew'
    	},{ 
    		xtype: 'button',
    		text: 'Recargar',
        	itemId: 'btnLoadStoreData',
        	handler: 'onClickLoadStoreData'
    	},{ 
    		xtype: 'button',
			text: 'Borrar',
        	itemId: 'btnDelete',
        	handler: 'onClickDelete'
    	},{ 
    		xtype: 'button',
        	text: 'Grabar',
        	itemId: 'btnSave',
        	handler: 'onClickSave'
    	}]
    }]
});