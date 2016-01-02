Ext.define('SportLog.view.main.dashboard.Dashboard', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.dashboard',
    
    controller: 'dashboard-controller',
    viewModel: {
        type: 'dashboard-model'
    },

    requires: [
        'SportLog.view.main.dashboard.DashboardController',
        'SportLog.view.main.dashboard.DashboardModel',
        'SportLog.view.main.dashboard.SessionsGrid',
        'Ext.layout.container.VBox'
    ],

    height: 700,
    width : '100%',
    //height: '100%',
    
    layout: {
    	type: 'border',
    	padding: 5,
    	bodypadding: 10
    },

//    layout: {
//    	type: 'vbox',
//    	pack: 'start',
//    	align: 'left'
//    },
    	
    defaults: {
    	frame: true,
    	collapsible: true
    },
    
        items: [{
    	region: 'west',
        width: 123,
        split: true,
        collapsible: true,
        floatable: false,
        items: [{
        	xtype: 'segmentedbutton',
            vertical: true,
            items: [{
            	text: 'Entrada Sesión',
            	pressed: true
            }, {
            	text: 'Total Semanal'
            }, {
            	text: 'Total Mensual',
            	iconCls: '/SportLog/resources/images/icons/table_refresh.png'
            }, {
            	text: 'Total Año'
            }]
        }]
    },{
       region: 'center',
       xtype: 'tabpanel',
       bodypadding: 10,
       items: [{
       		title: 'Entrada de sesión',
    		height: 800,
    		width: 800,
			//html: '<h2>Main content</h2><p>The main content goes here...</p>'
    		items: [{
    			xtype: 'sessionsGrid'
    		}]
    	}]
    }] 
    
    
});