/**
 * 
 */
Ext.define('SportLog.view.configs.sporttypes.SportType', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.sporttype',
    
    controller: 'sporttype-controller',
    viewModel: {
        type: 'sporttype-model'
    },

    requires: [
        'SportLog.view.configs.sporttypes.SportTypeController',
        'SportLog.view.configs.sporttypes.SportTypeModel'
    ],
    
    height: 515,
    width: 450,
    title: 'Tipos de deporte',
    bodyPadding: 10,
    closable: false,
    border: true,
    collapsible: true,
    layout: 'vbox',
    
    items: [{
    	xtype: 'grid',
    	id: 'sportTypesGrid',
    	scrollable: true,
    	flex: 1,
    	width: '100%',
    	selType: 'checkboxmodel',
    	selModel: {
    		mode : 'MULTI'
    	},
    
    	bind: '{sportTypesStore}',
    	viewConfig: {
    		emptyText: 'No hay tipos de deporte disponibles'
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
    		width: 100 ,
    		editor : { allowBlank : true }
    	}, { 
    		text: 'Comentarios', 
    		dataIndex: 'comment', 
    		flex: 1,
    		editor : { allowBlank : true }
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