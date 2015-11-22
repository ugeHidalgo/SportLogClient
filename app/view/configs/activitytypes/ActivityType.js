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
        'SportLog.view.configs.activitytypes.ActivityTypeModel'
    ],
    
    height: 700,
    width: 600,
    title: 'Tipos de actividades',
    scrollable: true,
    bodyPadding: 10,
    html: 'Aqui iran los tipos de actividad.',
    closable: false,
    border: true,
    collapsible: true
});