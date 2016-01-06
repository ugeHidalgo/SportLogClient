/**
 * 
 */
 Ext.define('SportLog.view.main.dashboard.ActivitiesGrid', {
	extend: 'Ext.panel.Panel',
   	alias: 'widget.activitiesGrid',
    
    controller: 'dashboard-controller',
    viewModel: {
        type: 'dashboard-model'
    },

    requires: [
        'SportLog.view.main.dashboard.DashboardController',
        'SportLog.view.main.dashboard.DashboardModel',
        'Ext.layout.container.VBox'
    ],
    
    flex: 1,
	//height: 400,
    //width: 800,
    padding: 10,
    title: 'Actividades de la sesión',
    id: 'activitiesPanel',
    frame: false,
    closable: false,
    border: false,
    collapsible: false,
    layout: 'vbox',
    
    items: [{
    	xtype: 'grid',
    	id: 'activitiesGrid',
    	scrollable: true,
    	flex: 1,
    	width: '100%',
    	selType: 'checkboxmodel',
    	selModel: {
    		mode : 'MULTI'
    	},
    
    	bind: '{activitiesStore}',
    	viewConfig: {
    		emptyText: 'No hay actividades disponibles'
    	},
    
    	plugins : [
    		Ext.create('Ext.grid.plugin.CellEditing', {
            	clicksToEdit : 1
        	})
        ],
    
    	columns: [{
       		text: 'Tipo', 
    		dataIndex: 'activityTypeId', 
    		width: 100
    		//renderer: Ext.util.Format.dateRenderer ('d/m/Y'), 
    		//align: 'center'
    	}, { 
    		text: 'Tiempo', 
    		dataIndex: 'activityTime', 
    		width: 100,
    		align: 'right'
    		//editor : { allowBlank : true }
    	},{ 
    		text: 'Distancia', 
    		dataIndex: 'activityDist', 
    		width: 100,
    		align: 'right'
    	},{ 
    		text: 'Distancia', 
    		dataIndex: 'sessionDist', 
    		width: 100, 
    		align: 'right'
    	},{ 
    		text: 'Valor', 
    		dataIndex: 'value', 
    		width: 50, 
    		align: 'right'
    	},{ 
    		text: 'Comentarios', 
    		dataIndex: 'comment', 
    		width: 400
    	},{ 
    		text: 'Pulso Min', 
    		dataIndex: 'minHR', 
    		width: 80, 
    		align: 'right'
    	},{ 
    		text: 'Pulso Med', 
    		dataIndex: 'avgHR', 
    		width: 80, 
    		align: 'right'
    	},{ 
    		text: 'Pulso Max', 
    		dataIndex: 'maxHR', 
    		width: 80, 
    		align: 'right'
    	},{ 
    		text: 'Power Min', 
    		dataIndex: 'minPower', 
    		width: 80, 
    		align: 'right'
    	},{ 
    		text: 'Power Med', 
    		dataIndex: 'medPower', 
    		width: 80, 
    		align: 'right'
    	},{ 
    		text: 'Power Max', 
    		dataIndex: 'maxPower', 
    		width: 80, 
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
    			tooltip: 'Crear nueva actividad.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnNewActivity',
        		handler: 'onClickNewActivity'
    		},{ 
				text: '-',
				tooltip: 'Borrar las actividades seleccionados.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnDeleteActivities',
        		handler: 'onClickDeleteActivity'
    		},{ 
    			text: 'Recargar',
    			tooltip: 'Recargar actividades desechando los cambios.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnLoadActivities',
        		handler: 'onClickLoadActivities'
    		},{ 
        		text: 'Grabar',
        		tooltip: 'Grabar las actividades.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnSaveActivities',
        		handler: 'onClickSaveActivities'
    		}]
    	}]
    }]
});