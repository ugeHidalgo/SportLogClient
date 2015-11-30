/**
 * 
 */
Ext.define('SportLog.view.configs.sporttypes.SportType', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sporttype',
    
    controller: 'sporttype-controller',
    viewModel: {
        type: 'sporttype-model'
    },

    requires: [
        'SportLog.view.configs.sporttypes.SportTypeController',
        'SportLog.view.configs.sporttypes.SportTypeModel'
    ],
    
    height: 400,
    width: 450,
    title: 'Tipos de deporte',
    scrollable: true,
    bodyPadding: 10,
    closable: false,
    border: true,
    collapsible: true,
    selType: 'checkboxmodel',
    selModel: {
    	mode : 'MULTI'
    },
    
    bind: '{sportTypesStore}',
    viewConfig: {
    	emptyText: 'No hay tipos de deporte disponibles'
    },
    
    plugins : [Ext.create('Ext.grid.plugin.RowEditing', 
        {
            clicksToEdit : 2
        })],
    
    columns: [{
       	text: 'Código', 
    	dataIndex: 'id', 
    	width: 20, 
    	align: 'right'
    }, { 
    	text: 'Nombre', 
    	dataIndex: 'name', 
    	width: 140 ,
    	editor : { allowBlank : true }
    }, { 
    	text: 'Comentarios', 
    	dataIndex: 'comment', 
    	width: 240,
    	editor : { allowBlank : true }
    }],
    buttons: [{ 
    	text: 'Nuevo',
        itemId: 'btnNew',
        handler: 'onClickNew'
    },{ 
    	text: 'Recargar',
        itemId: 'btnLoadStoreData',
        handler: 'onClickLoadStoreData'
    },{ 
		text: 'Borrar',
        itemId: 'btnDelete',
        handler: 'onClickDelete'
    },{ 
        text: 'Grabar',
        itemId: 'btnSave',
        handler: 'onClickSave'
    }]
});