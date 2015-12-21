/**
 * This a panel to show materials detail when doble click on a row in materials grid.
 */
 Ext.define('SportLog.view.configs.materials.MaterialPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'material-panel',

    id: 'materialPanel',
    width: '100%',
    height: 350,
    layout: 'vbox',
    border: false,
    
    items: [{
       	xtype: 'container',
       	width: '100%',
        layout: 'hbox',
        items: [{
       		xtype: 'fieldset',
    		title:'Detalles del material',
       		border: true,
       		margin: '0 5 0 0',
       		height: 200,
    		width: '50%',
       		layout: 'vbox',
       		fieldDefaults: {
       				labelAlign: 'top',
       				flex: 1,
       				margin: '0 5 0 0'
    			},
       		items: [{
       			xtype: 'container',
       			layout: 'hbox',
       			defaultType: 'textfield',
       			fieldDefaults: {
       				margin: '-10 10 0 0',
       				fieldStyle: 'text-align: left'
    			},
       			items: [{
       				fieldLabel: 'Alias:',
       				name: 'alias',
        			afterLabelTextTpl: [
               			'<span style="color:red;font-weight:bold" data-qtip="Requerido">*</span>'
           			],
           			allowBlank: false
       			},{
       				fieldLabel: 'Modelo:',
           			name: 'name'
       			},{
       				fieldLabel: 'Marca:',
           			name: 'brand'
       			}]
       		},{
       			xtype: 'container',
           		layout: 'hbox',
           		defaultType: 'datefield',
           		fieldDefaults: {
       				margin: '-10 10 0 0',
       				fieldStyle: 'text-align: center'
    			},
           		items: [{
       				xtype: 'checkbox',
       				fieldLabel: 'Activo:',
           			name: 'status'
       			},{
            		fieldLabel: 'Alta:',
           			name: 'created_at',
       				renderer: Ext.util.Format.dateRenderer ('d/m/Y')
            	},{
       				fieldLabel: 'Compra:',
           			name: 'purchase_date'
   	   			},{
   	   				xtype: 'textfield',
       				fieldLabel: 'Parte de:',
       				name: 'parent_id'  //TODO: poner un combo que coja datos de
    			}]
    		}]
    	},{
       		xtype: 'container',
       		width: '50%',
           	layout: 'hbox',
           	defaultType: 'textfield',
           	items: [{
   				xtype: 'fieldset',
   				title:'Detalles de uso',
    			border: true,
    			margin: '0 15 0 0',
    			height: 200,
   				width: '100%',
    			layout: 'vbox',
    			defaultType: 'fieldcontainer',
    			fieldDefaults: {
       				labelAlign: 'top',
       				flex: 1,
       				margin: '0 5 0 0',
       				fieldStyle: 'text-align: center'
    			},
       			items: [{
					layout: 'hbox',
       				defaultType: 'textfield',
       				fieldLabel: 'Tiempo',
       				labelAlign: 'left',
       				labelWidth: 70,
       				width: '100%',
       				items: [{
       					fieldLabel: 'Inicial:',
           				name: 'initial_time'
        			},{
        				fieldLabel: 'Total:',
           				name: 'total_time'
       				},{
       					fieldLabel: 'Máximo:',
            			name: 'max_time'
        			}]
       			},{
					layout: 'hbox',
    				defaultType: 'textfield',
       				fieldLabel: 'Distancia',
       				labelAlign: 'left',
     				labelWidth: 70,
       				width: '100%',
       				items: [{
       					fieldLabel: 'Inicial:',
           				name: 'initial_distance'
       				},{
      					fieldLabel: 'Total:',
           				name: 'total_distance'
       				},{
       					fieldLabel: 'Máxima:',
            			name: 'max_distance'
        			}]
       			}]
    		}]
    	}]    	
    },{
    	xtype: 'fieldset',
    	title:'Otros datos',
       	border: true,
       	margin: '0 15 0 0',
    	width: '100%',
       	layout: 'vbox',
       	items: [{
       		xtype: 'container',
       		width: '100%',
           	layout: 'hbox',
           	defaultType: 'textfield',
           	items: [{
           		xtype: 'textareafield',
       			fieldLabel: 'Descripción:',
    	   		name: 'comment',
	       		width: '100%'
           	}]
    	}]
    }]
});  
   
    
       	
//       	buttons: [{
//    			text: 'Nuevo',
//    			tooltip: 'Crear un nuevo tipo de material deportivo.',
//    			//iconCls: 'poner aqui el icono correspondiente',
//        		itemId: 'btnWindowNew',
//        		handler: 'onClickWindowNew'
//    		},{ 
//    			text: 'Deshacer',
//    			tooltip: 'Deshacer los cambios.',
//    			//iconCls: 'poner aqui el icono correspondiente',
//        		itemId: 'btnWindowUndo',
//        		handler: 'onClickWindowUndo'
//    		},{ 
//				text: 'Cerrar',
//				tooltip: 'Cerrar ventana sin grabar cambios.',
//    			//iconCls: 'poner aqui el icono correspondiente',
//        		itemId: 'btnWindowClose',
//        		handler: 'onClickWindowClose'
//    		},{ 
//        		text: 'Grabar',
//        		tooltip: 'Grabar los cambios realizados.',
//    			//iconCls: 'poner aqui el icono correspondiente',
//        		itemId: 'btnWindowSave',
//        		handler: 'onClickWindowSave'
//    		}]