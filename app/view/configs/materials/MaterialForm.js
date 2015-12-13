/**
 * This a window to show materials detail when doble click on a row in materials grid.
 */
 Ext.define('SportLog.view.configs.materials.MaterialForm', {
    extend: 'Ext.window.Window',
    xtype: 'material-form-window',
    
    reference: 'materialPopupWindow',
    
    title: 'Detalles de material',
    width: 620,
    height: 600,
    minWidth: 300,
    minHeight: 380,
    layout: 'fit',
    resizable: false,
    modal: true,
    defaultFocus: 'alias',
    closeAction: 'hide',
    
    items: [{
        xtype: 'form',
        reference: 'materialsWindowForm',
        scrollable: true,
        layout: {
            type: 'vbox',
            //align: 'stretch'
        },
        border: false,
        bodyPadding: 10,

        fieldDefaults: {
            msgTarget: 'side',
            labelAlign: 'top',
            labelStyle: 'font-weight:bold'
        },
        
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
            		flex: 1,
            		afterLabelTextTpl: [
                    	'<span style="color:red;font-weight:bold" data-qtip="Requerido">*</span>'
                	],
                	allowBlank: false
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
        		xtype: 'textareafield',
           		fieldLabel: 'Descripción:',
           		name: 'comment',
           		width: '100%'
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
       	}],
       	
       	buttons: [{
    			text: 'Nuevo',
    			tooltip: 'Crear un nuevo tipo de material deportivo.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnWindowNew',
        		handler: 'onClickWindowNew'
    		},{ 
    			text: 'Deshacer',
    			tooltip: 'Deshacer los cambios.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnWindowUndo',
        		handler: 'onClickWindowUndo'
    		},{ 
				text: 'Cerrar',
				tooltip: 'Cerrar ventana sin grabar cambios.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnWindowClose',
        		handler: 'onClickWndowClose'
    		},{ 
        		text: 'Grabar',
        		tooltip: 'Grabar los cambios realizados.',
    			//iconCls: 'poner aqui el icono correspondiente',
        		itemId: 'btnWindowSave',
        		handler: 'onClickWindowSave'
    		}]
   	}]
});