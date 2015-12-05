/**
 * 
 */
 Ext.define('SportLog.view.configs.materials.Material', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.material',
    
    controller: 'material-controller',
    viewModel: {
        type: 'material-model'
    },

    requires: [
        'SportLog.view.configs.materials.MaterialController',
        'SportLog.view.configs.materials.MaterialModel'
    ],
    
    height: 515,
    width: 450,
    title: 'Materiales',
    frame: true,
    closable: false,
    border: true,
    collapsible: true,
    layout: 'vbox'
    
 });