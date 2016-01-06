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
    id: 'sportTypesPanel',
    frame: true,
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
    		Ext.create('Ext.grid.plugin.CellEditing', {
            	clicksToEdit : 1
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
    			tooltip: 'Crear un nuevo tipo de deporte.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnNew',
        		handler: 'onClickNew'
    		},{ 
    			text: 'Recargar',
    			tooltip: 'Recargar los tipos de deporte desechando los cambios.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnLoadStoreData',
        		handler: 'onClickLoadStoreData'
    		},{ 
				text: 'Borrar',
				tooltip: 'Borrar los tipos de deportes seleccionados.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnDelete',
        		handler: 'onClickDelete'
    		},{ 
        		text: 'Grabar',
        		tooltip: 'Grabar los cambios realizados a las tipos de deportes.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnSave',
        		handler: 'onClickSave'
    		}]
    	}]
    }]
});