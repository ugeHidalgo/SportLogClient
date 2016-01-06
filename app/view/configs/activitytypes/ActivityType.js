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
    id: 'activityTypesPanel',
    frame: true,
    closable: false,
    border: true,
    collapsible: true,
    layout: 'vbox',
    
    items: [{
    	xtype: 'grid',
    	id: 'activityTypesGrid',
    	scrollable: true,
    	flex: 1,
    	width: '100%',
    	selType: 'checkboxmodel',
    	selModel: {
    		mode : 'MULTI'
    	},
    
    	bind: '{activityTypesStore}',
    	viewConfig: {
    		emptyText: 'No hay tipos de actividad disponibles'
    	},
    	
    	plugins : [
    		Ext.create('Ext.grid.plugin.RowEditing', { //TODO: da problemas con el auth del servicio si cambio a CellEditing
            	clicksToEdit : 1
        	})
        ],
    
    	columns: [{
       		text: 'Código', 
    		dataIndex: 'id', 
    		width: 40, 
    		align: 'right' 
    	},{ 
    		text: 'Nombre', 
    		dataIndex: 'name', 
    		width: 150,
    		editor : { allowBlank : true }
    	},{
    		text: 'Tipo de deporte', 
    		dataIndex: 'sportType_id', 
    		width: 150,
        	editor: new Ext.form.field.ComboBox({
        			id: 'sportTypesCombobox',
        			displayField: 'name',
        			valueField: 'id',
        			queryMode: 'local'
        	}),
        	renderer: 'renderFunction'
    	},{ 
    		text: 'Commentarios', 
    		dataIndex: 'comment', 
    		width: 250,
    		editor : { allowBlank : true }
    	}],
    	
    	dockedItems: [{
    		xtype: 'toolbar',
    		dock: 'bottom',
    		ui: 'footer',
    		layout:{
    			pack: 'left'
    		},
    		items: [{
    			text: 'Nuevo',
    			tooltip: 'Crear un nuevo tipo de actividad.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnNew',
        		handler: 'onClickNew'
    		},{ 
    			text: 'Recargar',
    			tooltip: 'Recargar las actividades desechando los cambios.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnLoadStoreData',
        		handler: 'onClickLoadStoreData'
    		},{ 
				text: 'Borrar',
				tooltip: 'Borrar las actividades seleccionados.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnDelete',
        		handler: 'onClickDelete'
    		},{ 
        		text: 'Grabar',
        		tooltip: 'Grabar los cambios realizados a las actividades.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnSave',
        		handler: 'onClickSave'
    		}]
    	}]
    }//,{
//    	xtype: 'container',
//    	margin: '10 0 0 0',
//    	height: 40,
//    	width: '100%',
//    	items: [{
//    		xtype: 'button',
//    		text: 'Nuevo',
//        	itemId: 'btnNew',
//        	handler: 'onClickNew'
//    	},{ 
//    		xtype: 'button',
//    		text: 'Recargar',
//        	itemId: 'btnLoadStoreData',
//        	handler: 'onClickLoadStoreData'
//    	},{ 
//    		xtype: 'button',
//			text: 'Borrar',
//        	itemId: 'btnDelete',
//        	handler: 'onClickDelete'
//    	},{ 
//    		xtype: 'button',
//        	text: 'Grabar',
//        	itemId: 'btnSave',
//        	handler: 'onClickSave'
//    	}]
    ]//}]
});