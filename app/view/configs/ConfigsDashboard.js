/**
 * 
 */
Ext.define('SportLog.view.configs.ConfigsDashboard', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.configsdashboard',
    
    controller: 'configsdashboard-controller',
    viewModel: {
        type: 'configsdashboard-model'
    },

    requires: [
        'SportLog.view.configs.ConfigsDashboardController',
        'SportLog.view.configs.ConfigsDashboardModel',
        'SportLog.view.configs.sporttypes.SportType',
        'SportLog.view.configs.activitytypes.ActivityType',
        'SportLog.view.configs.userprofile.UserProfile',
        'SportLog.view.configs.materials.Material'
    ],
    
    height: 700,
    width: '100%',
    title: 'Configuración',
    border: true,
    frame: true,
    scrollable: true,
    
    items: [{
       xtype: 'tabpanel',
       
       defaults: {
       		xtype: 'panel',
       		height: 700,
       		width: '100%',
       		closable: false,
       		bodypadding: 5,
       		collapsible: true,
       		border: true
       },
       
       items: [{
       		itemId: 'MyProfileConfigTab',
       		title: 'Mi cuenta',
       		items: [{
        		xtype: 'userprofile'
       		}]
       },{
       		itemId: 'SportsConfigTab',
       		title: 'Deportes',
       		layout: 'hbox',
       		autoScroll: true,
       		defaults: {
       			margin: 5
      		},
       		items: [{
        		xtype: 'sporttype'
       		},{
       			xtype: 'activitytype'
       		}]
       	},{
       		itemId: 'UsersConfigTab',
       		title: 'Usuarios',
       		defaults: {
       			margin: 5
       		},
       		items: [{
        		xtype: 'userslist'
       		}]
        },{
       		itemId: 'MaterialConfigTab',
        	title: 'Material',
        	defaults: {
       			margin: 5
       		},
        	items: [{
        		xtype: 'material'
        	}]
        }]
    }] 
});