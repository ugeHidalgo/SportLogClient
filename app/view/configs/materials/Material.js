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
    	width: '50%',
    	selType: 'checkboxmodel',
    	selModel: {
    		mode : 'MULTI'
    	},
    
    	bind: '{materialsStore}',
    	viewConfig: {
    		emptyText: 'No hay materiales definidos...'
    	},
    
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
//    		xtype: 'datecolumn',
//    		text: 'Compra', 
//    		dataIndex: 'purchase_date', 
//    		width: 100 ,
//    		editor : {
//    			xtype: 'datefield',
//    			allowBlank : true,
//    			format: 'd/m/Y'
//    		},
//    		renderer: Ext.util.Format.dateRenderer ('d/m/Y'), 
//    		align: 'center'
//    	},{ 
//    		text: 'Inic(Tiempo)', 
//    		dataIndex: 'initial_time', 
//    		width: 120 ,
//    		editor : { allowBlank : true }, 
//    		align: 'right'
//    	},{ 
//    		text: 'Inic(Dist)', 
//    		dataIndex: 'initial_distance', 
//    		width: 120 ,
//    		editor : { allowBlank : true }, 
//    		align: 'right'
//    	},{ 
    		text: 'Uso(Tiempo)', 
    		dataIndex: 'total_time', 
    		width: 120, 
    		align: 'right'
    	},{ 
    		text: 'Uso(Dist.)', 
    		dataIndex: 'total_distance', 
    		width: 120, 
    		align: 'right'
//    	},{ 
//    		text: 'Máx(Tiempo)', 
//    		dataIndex: 'max_time', 
//    		width: 120 ,
//    		editor : { allowBlank : true }, 
//    		align: 'right'
//    	},{ 
//    		text: 'Máx(Dist.)', 
//    		dataIndex: 'max_distance', 
//    		width: 120 ,
//    		editor : { allowBlank : true }, 
//    		align: 'right'
//    	},{ 
//    		text: 'Comentarios', 
//    		dataIndex: 'comment', 
//    		width: 150 ,
//    		editor : { allowBlank : true }
    	}],
    	
    	listeners: {
            selectionchange: 'onSelectionChange'
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
    },{
    	xtype: 'fieldset',
    	id: 'materialsFieldSet',
    	scrollable: true,
    	border: true,
    	margin: '0 0 -5 0',
    	height: '100%',
    	width: '50%',
        defaultType: 'textfield',
        items: [{
        	xtype: 'fieldset',
    		title:'Detalles del material',
        	border: true,
        	margin: '-5 0 0 0',
    		width: '100%',
        	layout: 'vbox',
        	items: [{
        		xtype: 'container',
                layout: 'hbox',
                defaultType: 'textfield',
                items: [{
                	fieldLabel: 'Alias:',
            		name: 'alias',
            		labelAlign : 'top',
            		margin: '-10 10 0 0',
            		flex: 1
        		},{
        			fieldLabel: 'Modelo:',
            		name: 'name',
            		labelAlign : 'top',
            		margin: '-10 10 0 0',
            		flex: 1
        		},{
        			fieldLabel: 'Marca:',
            		labelAlign : 'top',
            		margin: '-10 0 0 0',
            		name: 'brand',
            		flex: 1
        		}]
        	},{
         		xtype: 'container',
                layout: 'hbox',
                defaultType: 'textfield',
                items: [{
                	xtype: 'datefield',
                   	fieldLabel: 'Alta:',
            		name: 'created_at',
            		labelAlign : 'top',
            		margin: '0 10 0 0',
            		width: 130,
         			renderer: Ext.util.Format.dateRenderer ('d/m/Y')
                },{
        			xtype: 'datefield',
        			fieldLabel: 'Compra:',
            		name: 'purchase_date',
            		margin: '0 10 0 0',
            		labelAlign : 'top',
            		width: 130
        		},{
        			xtype: 'checkbox',
        			fieldLabel: 'Activo:',
            		name: 'status',
            		margin: '0 10 0 0',
            		labelAlign : 'top'
        		},{
            		fieldLabel: 'Parte de:',
            		name: 'parent_id',  //TODO: poner un combo que coja datos de
            		labelAlign : 'top',
            		flex: 1
        		}]
        	}]
        },{
        	xtype: 'fieldset',
    		title:'Detalles de uso',
        	border: true,
    		width: '100%',
        	layout: 'vbox',
        	defaultType: 'fieldcontainer',
        	items: [{
				layout: 'hbox',
        		defaultType: 'textfield',
        		fieldLabel: 'Tiempo',
        		labelAlign: 'left',
        		labelWidth: 90,
        		items: [{
        			fieldLabel: 'Inicial:',
            		name: 'initial_time',
            		width: 120,
            		labelAlign : 'top',
            		margin: '0 5 0 0'
        		},{
        			fieldLabel: 'Total:',
            		name: 'total_time',
            		width: 120,
            		labelAlign : 'top',
            		margin: '0 5 0 0'
        		},{
        			fieldLabel: 'Máximo:',
            		name: 'max_time',
            		width: 120,
            		labelAlign : 'top'
        		}]
        	},{
				layout: 'hbox',
        		defaultType: 'textfield',
        		fieldLabel: 'Distancia',
        		labelAlign: 'left',
        		labelWidth: 90,
        		items: [{
        			fieldLabel: 'Inicial:',
            		name: 'initial_distance',
            		width: 120,
            		labelAlign : 'top',
            		margin: '0 5 0 0'
        		},{
        			fieldLabel: 'Total:',
            		name: 'total_distance',
            		width: 120,
            		labelAlign : 'top',
            		margin: '0 5 0 0'
        		},{
        			fieldLabel: 'Máxima:',
            		name: 'max_distance',
            		width: 120,
            		labelAlign : 'top'
        		}]
        	}]
        },{
            fieldLabel: 'Comentarios:',
            name: 'comment',
            width: '100%'
        }]
    }]
 });