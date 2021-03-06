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
        'SportLog.view.main.dashboard.ActivitiesGrid',
        'Ext.layout.container.VBox'
    ],

    height: 700,
    width : '100%',
    scrollable: true,
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
    	collapsible: false
    },
    
        items: [{
//    	region: 'west',
//        width: 123,
//        split: true,
//        collapsible: true,
//        floatable: false,
//        items: [{
//        	xtype: 'segmentedbutton',
//            vertical: true,
//            items: [{
//            	text: 'Entrada Sesión',
//            	pressed: true
//            }, {
//            	text: 'Total Semanal'
//            }, {
//            	text: 'Total Mensual',
//            	iconCls: '/SportLog/resources/images/icons/table_refresh.png'
//            }, {
//            	text: 'Total Año'
//            }]
//        }]
//    },{
       region: 'center',
       xtype: 'tabpanel',
       //height: 800,
       //width: 800,
       bodypadding: 10,
       items: [{
       		title: 'Sesiones',
    		//height: 800,
    		//width: 800,
    		scrollable: false,
    		items: [{
    			xtype: 'sessionsGrid'
//    		},{
//    			xtype: 'activitiesGrid'
    		}]
    	},{
    		title: 'Total Semanal'
    	},{
    		title: 'Total Mensual'
    	}]
    }] 
    
    
});