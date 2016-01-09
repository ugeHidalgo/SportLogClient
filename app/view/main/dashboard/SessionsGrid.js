/**
 * 
 */
Ext.define('SportLog.view.main.dashboard.SessionsGrid', {
	extend: 'Ext.panel.Panel',
   	alias: 'widget.sessionsGrid',
    
    controller: 'dashboard-controller',
    viewModel: {
        type: 'dashboard-model'
    },

    requires: [
        'SportLog.view.main.dashboard.DashboardController',
        'SportLog.view.main.dashboard.DashboardModel',
        'SportLog.view.main.dashboard.ActivitiesForm',
        'Ext.layout.container.VBox'
        //'Ext.toolbar.Paging'
    ],
    
	height: 650,
    width: '100%', //900,
    padding: 10,
    id: 'sessionsPanel',
    frame: false,
    closable: false,
    border: false,
    layout: 'border',
    scrollable: true,
    
    items: [{
    	xtype: 'panel',
    	region: 'west',
    	frame: true,
    	border: true,
    	collapsible: true,
    	width: 200
    },{
    	xtype: 'grid',
    	region: 'center',
    	id: 'sessionsGrid',
    	scrollable: true,
    	flex: 1,
    	//width: '100%',
    	selType: 'checkboxmodel',
    	selModel: {
    		mode : 'MULTI'
    	},
    
    	bind: '{sessionsStore}',
    	viewConfig: {
    		emptyText: 'No hay sesiones disponibles'
    	},
    
    	plugins : [
    		Ext.create('Ext.grid.plugin.CellEditing', {
            	clicksToEdit : 1
        	})
        ],
    
    	columns: [{
       		text: 'Fecha', 
       		xtype: 'datecolumn',
    		format: 'd/m/Y',
    		dataIndex: 'date', 
    		width: 100 ,
    		align: 'center',
    		editor : { 
    				allowBlank : false,
    				xtype: 'datefield',
    				format: 'd/m/Y'
    			}
    	},{ 
    		text: 'Tiempo', 
    		dataIndex: 'sessionTime', 
    		width: 100,
    		align: 'center'
//    		editor : { 
//    				allowBlank : false ,
//    				align: 'center',
//    				format: '0:00:00'
//    			}
    	},{ 
    		text: 'Distancia', 
    		dataIndex: 'sessionDist',
    		width: 100, 
    		align: 'right'
//    		editor : { 
//    				xtype: 'numberfield',
//    				minvalue: 0,
//    				value: 0,
//    				maxvalue: 999,
//    				allowDecimals: true,
//    				hideTrigger: true,
//    				decimalPrecision: 3,
//    				allowBlank : false
//    			}
    	},{ 
    		text: 'Nombre', 
    		dataIndex: 'name', 
    		width: 350,
    		editor : { allowBlank : false }
    	}],
    	
//    	bbar: {
//    		xtype: 'pagingtoolbar',
//    		pageSize: 10,
//    		store: '{sessionsStore}',
//    		displayInfo: true
//    		//plugins: new Ext.ux.ProgressBarPager()
//    	},
    	
    	listeners: {
    		rowdblclick: 'onSelectSession'
    	},
    	
    	dockedItems: [{
    		xtype: 'toolbar',
    		dock: 'top',
    		ui: 'footer',
    		layout:{
    			pack: 'left'
    		},
    		items: [{
    			text: '+',
    			tooltip: 'Crear nueva sesión.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnNewSession',
        		handler: 'onClickNewSession'
    		},{ 
				text: '-',
				tooltip: 'Borrar las sesiones seleccionados.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnDeleteSessions',
        		handler: 'onClickDeleteSessions'
    		},{ 
    			text: 'Recargar',
    			tooltip: 'Recargar sesiones desechando los cambios.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnLoadSessions',
        		handler: 'onClickLoadSessions'
    		},{ 
        		text: 'Grabar',
        		tooltip: 'Grabar los cambios realizados a las sesiones.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnSaveSessions',
        		handler: 'onClickSaveSessions'
    		}]
    	}]
    }]
});