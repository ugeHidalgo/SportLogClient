/**
 * 
 */
Ext.define('SportLog.view.configs.activitytypes.ActivityType', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.activitytype',
    
    controller: 'activitytype-controller',
    viewModel: {
        type: 'activitytype-model'
    },

    requires: [
        'SportLog.view.configs.activitytypes.ActivityTypeController',
        'SportLog.view.configs.activitytypes.ActivityTypeModel'
    ],
    xtype: 'cell-editing',
    
    height: 700,
    width: 600,
    title: 'Tipos de actividad',
    scrollable: true,
    bodyPadding: 10,
    closable: false,
    border: true,
    collapsible: true,
    
    bind: '{activitiesStore}',
    viewConfig: {
    	emptyText: 'No hay tipos de actividad disponibles'
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
    	text: 'Tipo de deporte', 
    	dataIndex: 'sportType_id', 
    	width: 240,
    	//header: 'sportType_id',
        editor: new Ext.form.field.ComboBox({
                    typeAhead: true,
                    triggerAction: 'all',
                    store: [
                        ['1','el 1'],
                        ['2','el 2'],
                        ['3','el 3'],
                        ['4','el 4'],
                        ['5','el 5']
                    ]
        })
    }]
});