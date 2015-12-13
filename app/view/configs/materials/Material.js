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
        'SportLog.view.configs.materials.MaterialModel'
    ],
    
    height: 515,
    width: '100%',
    title: 'Materiales',
    id: 'materialsForm',
    frame: true,
    closable: false,
    border: true,
    collapsible: true,
    layout: 'hbox',
    
    items: [{
    	xtype: 'grid',
    	id: 'materialsGrid',
    	scrollable: true,
    	border: true,
    	height: '100%',
    	width: '100%', //'50%',
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
//    		text: 'Parte de...', 
//    		dataIndex: 'parent_id', 
//    		width: 100 ,
//    		editor : { allowBlank : true } //todo: poner un comobobox a materials
//    	},{ 
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
    		renderer: Ext.util.Format.dateRenderer ('d/m/Y'), 
    		align: 'center'
    	},{ 
    		text: 'Inic(Tiempo)', 
    		dataIndex: 'initial_time', 
    		width: 120 ,
    		editor : { allowBlank : true }, 
    		align: 'right'
    	},{ 
    		text: 'Inic(Dist)', 
    		dataIndex: 'initial_distance', 
    		width: 120 ,
    		editor : { allowBlank : true }, 
    		align: 'right'
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
    		text: 'Máx(Tiempo)', 
    		dataIndex: 'max_time', 
    		width: 120 ,
    		editor : { allowBlank : true }, 
    		align: 'right'
    	},{ 
    		text: 'Máx(Dist.)', 
    		dataIndex: 'max_distance', 
    		width: 120 ,
    		editor : { allowBlank : true }, 
    		align: 'right'
    	},{ 
    		text: 'Comentarios', 
    		dataIndex: 'comment', 
    		width: 150 ,
    		editor : { allowBlank : true }
    	}],
    	
    	listeners: {
            //selectionchange: 'onSelectionChange',
            rowdblclick: 'onSelectMaterial'
        },
    	
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