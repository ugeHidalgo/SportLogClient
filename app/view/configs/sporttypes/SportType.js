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
    width: 400,
    title: 'Tipos de deporte',
    scrollable: true,
    bodyPadding: 10,
    closable: false,
    border: true,
    collapsible: true,
    
    bind: '{sportTypesStore}',
    viewConfig: {
    	emptyText: 'No hay tipos de deporte disponibles'
    },
    
    columns: [{
       	text: 'Código', 
    	dataIndex: 'id', 
    	width: 20, 
    	align: 'right' 
    }, { 
    	text: 'Nombre', 
    	dataIndex: 'name', 
    	width: 140 
    }, { 
    	text: 'Comentarios', 
    	dataIndex: 'coment', 
    	width: 240
    }]
});