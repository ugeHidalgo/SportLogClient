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
        'Ext.layout.container.VBox'
    ],
    
	height: 400,
    width: 700,
    padding: 10,
    title: 'Sesiones',
    frame: false,
    closable: false,
    border: false,
    collapsible: true,
    layout: 'vbox',
    
    items: [{
    	xtype: 'grid',
    	id: 'sessionsGrid',
    	scrollable: true,
    	flex: 1,
    	width: '100%',
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
    		dataIndex: 'date', 
    		width: 100 ,
    		renderer: Ext.util.Format.dateRenderer ('d/m/Y'), 
    		align: 'center'
    	}, { 
    		text: 'Nombre', 
    		dataIndex: 'name', 
    		width: 350 
    		//editor : { allowBlank : true }
    	},{ 
    		text: 'Tiempo', 
    		dataIndex: 'sessionTime', 
    		width: 100,
    		align: 'right'
    	},{ 
    		text: 'Distancia', 
    		dataIndex: 'sessionDist', 
    		width: 100, 
    		align: 'right'
    	}],
    	
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