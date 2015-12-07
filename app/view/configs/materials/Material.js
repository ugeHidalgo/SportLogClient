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
    width: '100%',
    title: 'Materiales',
    frame: true,
    closable: false,
    border: true,
    collapsible: true,
    layout: 'vbox',
    
    items: [{
    	xtype: 'grid',
    	id: 'materialsGrid',
    	scrollable: true,
    	flex: 1,
    	width: '100%',
    	selType: 'checkboxmodel',
    	selModel: {
    		mode : 'MULTI'
    	},
    
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
    		xtype: 'checkcolumn',
    		text: 'Activo',
    		dataIndex: 'status', 
    		width: 60 ,
    		editor : { allowBlank : false },
    		processEvent: function () { return false; },
    		align: 'center'
    	},{
       		text: 'Código', 
    		dataIndex: 'id', 
    		width: 40, 
    		align: 'right'
    	}, { 
    		text: 'Alias', 
    		dataIndex: 'alias', 
    		width: 100 ,
    		editor : { allowBlank : true }
    	},{ 
    		text: 'Modelo', 
    		dataIndex: 'name', 
    		width: 100 ,
    		editor : { allowBlank : true }
    	}, { 
    		text: 'Marca', 
    		dataIndex: 'brand', 
    		width: 100 ,
    		editor : { allowBlank : true }
    	},{ 
    		text: 'Parte de...', 
    		dataIndex: 'parent_id', 
    		width: 40 ,
    		editor : { allowBlank : true } //todo: poner un comobobox a materials
    	},{ 
    		text: 'Uso(Tiempo)', 
    		dataIndex: 'total_time', 
    		width: 120, 
    		align: 'right'
    	},{ 
    		text: 'Uso(Dist.)', 
    		dataIndex: 'total_distance', 
    		width: 120, 
    		align: 'right'
    	},{ 
    		text: 'Creado',
    		dataIndex: 'created_at', 
    		width: 100,
    		renderer: Ext.util.Format.dateRenderer ('d/m/Y'), 
    		align: 'center'
    	},{ 
    		xtype: 'datecolumn',
    		text: 'Compra', 
    		dataIndex: 'purchase_date', 
    		width: 100 ,
    		editor : {
    			xtype: 'datefield',
    			allowBlank : true,
    			format: 'd/m/Y'
    		}, 
    		align: 'center'
    	},{ 
    		text: 'Tiempo(Max)', 
    		dataIndex: 'max_time', 
    		width: 80 ,
    		editor : { allowBlank : true }, 
    		align: 'right'
    	},{ 
    		text: 'Distancia(Max)', 
    		dataIndex: 'max_distance', 
    		width: 80 ,
    		editor : { allowBlank : true }, 
    		align: 'right'
    	},{ 
    		text: 'Tiempo(Ini)', 
    		dataIndex: 'initial_time', 
    		width: 80 ,
    		editor : { allowBlank : true }, 
    		align: 'right'
    	},{ 
    		text: 'Distancia(Ini)', 
    		dataIndex: 'initial_distance', 
    		width: 80 ,
    		editor : { allowBlank : true }, 
    		align: 'right'
    	},{ 
    		text: 'Comentarios', 
    		dataIndex: 'comment', 
    		width: 200 ,
    		editor : { allowBlank : true }
    	}],
    	
    	dockedItems: [{
    		xtype: 'toolbar',
    		dock: 'bottom',
    		ui: 'footer',
    		layout:{
    			pack: 'left'
    		},
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
				text: 'Activar',
				tooltip: 'Activar los materiales seleccionados.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnActivate',
        		handler: 'onClickActivate'
    		},{ 
				text: 'Desactivar',
				tooltip: 'Desactivar los materiales seleccionados.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnDeactivate',
        		handler: 'onClickDeactivate'
    		},{ 
        		text: 'Grabar',
        		tooltip: 'Grabar los cambios realizados a los materiales deportivos.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnSave',
        		handler: 'onClickSave'
    		}]
    	}]
    }]
    
 });