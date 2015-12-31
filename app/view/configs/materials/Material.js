/**
 * 
 */
 Ext.define('SportLog.view.configs.materials.Material', {
    extend: 'Ext.form.Panel',
    alias: 'widget.material',
    
    controller: 'material-controller',
    viewModel: {
        type: 'material-model'
    },

    requires: [
        'SportLog.view.configs.materials.MaterialController',
        'SportLog.view.configs.materials.MaterialModel',
        'SportLog.view.configs.materials.MaterialPanel'
    ],
    
    height: 600,
    width: '100%',
    id: 'materialsForm',
    frame: false,
    closable: false,
    border: false,
    collapsible: false,
    layout: 'vbox',
    trackResetOnLoad: true,
    
    items: [{
    	xtype: 'material-panel'
    },{
    	xtype: 'grid',
    	id: 'materialsGrid',
    	scrollable: true,
    	border: true,
    	margin: '0 15 5 0',
    	flex: 160,
    	width: '50%',
    
    	bind: '{materialsStore}',
    	viewConfig: {
    		emptyText: 'No hay materiales definidos...'
    	},
    	
    	plugins : [
    		Ext.create('Ext.grid.plugin.CellEditing', {
            	clicksToEdit : 1
        	})
        ],
    
    	columns: [{ 
    		text: 'Compra', 
    		dataIndex: 'purchase_date', 
    		width: 100 ,
    		renderer: Ext.util.Format.dateRenderer ('d/m/Y'), 
    		align: 'center'
    	},{ 
    		text: 'Alias',
    		id: 'alias_field',
    		dataIndex: 'alias',
    		allowBlank: false,
    		width: 100
    	},{ 
    		text: 'Modelo', 
    		dataIndex: 'name', 
    		allowBlank: false,
    		width: 100
    	}, { 
    		text: 'Marca', 
    		dataIndex: 'brand', 
    		width: 100
    	},{
    		text: 'Creado',
    		dataIndex: 'created_at', 
    		width: 100,
    		renderer: Ext.util.Format.dateRenderer ('d/m/Y'), 
    		align: 'center'
	   	},{ 
    		text: 'Uso(Tiempo)', 
    		dataIndex: 'total_time', 
    		width: 120,
//    		renderer: function(value){
//    					var timeHelper = Ext.create ('SportLog.utils.TimeHelper');
//    					return timeHelper.bigIntToStringTime(value);
//    					},
    		align: 'right'
    	},{ 
    		text: 'Uso(Dist.)', 
    		dataIndex: 'total_distance', 
    		width: 120, 
    		align: 'right'
    	}],
    	
    	listeners: {
    		selectionChange: 'onSelectionChange'
        }
    }],
    
    
    dockedItems: [{
    		xtype: 'toolbar',
    		dock: 'bottom',
    		ui: 'footer',
    		layout:{
    			pack: 'left'
    		},
    		margin: '20 0 0 -5',
    		items: [{
    			text: 'Nuevo',
    			tooltip: 'Crear un nuevo tipo de material deportivo.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnNew',
        		handler: 'onClickNew'
    		},{ 
    			text: 'Recargar',
    			tooltip: 'Recargar los materiales deportivos desechando los cambios.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnLoadStoreData',
        		handler: 'onClickLoadStoreData'
    		},{ 
				text: 'Borrar',
				tooltip: 'Borrar los materiales seleccionados.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnDelete',
        		handler: 'onClickDelete'
    		},{ 
        		text: 'Grabar',
        		tooltip: 'Grabar los cambios realizados a los materiales deportivos.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnSave',
        		handler: 'onClickSave'
    		}]
    	}]
 });