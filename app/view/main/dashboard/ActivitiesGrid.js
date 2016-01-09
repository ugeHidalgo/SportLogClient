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
	//height: 600,
    //width: 800,
    padding: 3,
    frame: false,
    closable: false,
    border: false,
    collapsible: false,
    layout: 'vbox',
    
    items: [{
    	xtype: 'panel',
    	title:'Datos de la sesión',
    	region: 'top',
    	frame: true,
    	border: false,
    	collapsible: true,
    	height: 180,
    	width: '100%',
    	padding: 10,
    	
    	items: [{
    		xtype: 'fieldset',
        	layout: 'vbox',
        	bind: '{sessionsStore}',
        	fieldDefaults: {
       				labelAlign: 'left',
       				//flex: 1,
       				margin: '10 0 0 0'
    			},
        	
        	items: [{
        		xtype: 'container',
        		width: '100%',
       			layout: 'hbox',
       			defaultType: 'textfield',
       			fieldDefaults: {
       				//margin: '-10 10 0 0',
       				//fieldStyle: 'text-align: left'
    			},
    			items: [{
        			fieldLabel: 'Nombre',
           			name: 'name',
           			width: '100%' 
        		}]
        	},{
        		xtype: 'container',
        		width: '100%',
       			layout: 'hbox',
       			defaultType: 'textfield',
       			fieldDefaults: {
       				margin: '10 0 0 0'
       				//fieldStyle: 'text-align: left'
    			},
    			items: [{
    				fieldLabel: 'Fecha',
            		name: 'date',
            		//width: 100 ,
            		flex: 1,
            		align: 'center',
    				renderer: Ext.util.Format.dateRenderer ('d/m/Y')
    			},{
    				fieldLabel: 'Tiempo', 
    				name: 'sessionTime', 
    				//width: 100,
    				flex: 1,
    				align: 'center'
//    				editor : { 
//    					allowBlank : false ,
//    					align: 'center',
//    					format: '0:00:00'
//    				}
    			},{
    				fieldLabel: 'Distancia', 
    				name: 'sessionDist',
    				//width: 100,
    				flex: 1,
    				align: 'right'
//    				editor : { 
//    					xtype: 'numberfield',
//    					minvalue: 0,
//    					value: 0,
//    					maxvalue: 999,
//    					allowDecimals: true,
//    					hideTrigger: true,
//    					decimalPrecision: 3,
//    					allowBlank : false
//    				}
    			}]
        	}]
        }]
    },{
    	xtype: 'grid',
    	title: 'Actividades',
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
    			text: 'Deshacer',
    			tooltip: 'Recargar actividades desechando los cambios.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnLoadActivities',
        		handler: 'onClickLoadActivities'
//    		},{ 
//        		text: 'Grabar',
//        		tooltip: 'Grabar las actividades.',
//    			//iconCls: 'poner aqui el icono correspondiente',
//        		itemId: 'btnSaveActivities',
//        		handler: 'onClickSaveActivities'
    		}]
    	}]
    }]
});