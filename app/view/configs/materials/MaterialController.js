/**
 * 
 */
 Ext.define ('SportLog.view.configs.materials.MaterialController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.material-controller',
    
    requires: [
    	'SportLog.utils.APIHelper',
    	'SportLog.store.Material',
    	'SportLog.view.configs.materials.MaterialPanel'
    ],
    
    materialsStore: undefined,
    materialModel: undefined,
    selectedRecord: undefined,
    materialForm: undefined,
     
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    	
    	apiHelper.setApiKey(me.getStore('materialsStore'));
    	me.materialsStore = me.getStore('materialsStore');
    	me.materialForm = Ext.getCmp('materialsForm');
    },
    
    onSelectionChange: function(model, records) {
    	var rec = records[0], confirm = false;
            me = this;
            
        me.materialModel=rec;
        if (!me.existChangesOnWindow()) {
        	me.loadRecordInForm(rec,me);
        	return;
        }

        if (rec.id==me.selectedRecord.id) return;
        me.confirmPendingChanges(function (confirm){
         		if (confirm) {
        			me.loadRecordInForm(rec,me);
        		} else {
        			me.findAndSelectRecordInGrid(me.selectedRecord);
        		}
        });
    },
    
    onClickLoadStoreData : function (){
    	var me = this;
    		
    	if (!me.existChangesOnWindow()) {
    		var mask = new Ext.LoadMask(me.materialForm, { msg: "Cargando datos..." });
        	mask.show();
    		me.refreshScreen();
    		mask.hide();
    		return;
    	}
    },
    
    onClickNew: function () {
    	var me = this;
    		
    	if (!me.existChangesOnWindow()) {
    		me.createNewEmptyRecord();
    		return;
    	}
    		
    	me.confirmPendingChanges(function (confirm){
         		if (confirm) {
        			me.createNewEmptyRecord();
        		}
        	});
    },
    
    onClickSave: function(){
    	var me = this, 
    		materialModel;
    	
    	if (!me.materialForm.getForm().isDirty()) {
            Ext.Msg.alert('Atención', 'No hay cambios para salver.');
            return;
        }
        else if (!me.materialForm.getForm().isValid()) {
            Ext.Msg.alert('Atención', 'Datos incorrectos.');
            return;
        }

        me.materialModel.set(me.materialForm.getForm().getValues());
        me.materialsStore.add(me.materialModel);
        
        var mask = new Ext.LoadMask(me.materialForm, { msg: "Salvando datos..." });
        mask.show();
    	debugger;
    	me.materialsStore.sync({
    		success: function (batch, eOpts){
    			me.materialsStore.load();
    			Ext.Msg.alert('Ok','Cambios actualizados correctamente.');
    			mask.hide();
    		},
    		failure: function (batch, eOpts) {
    			Ext.Msg.alert('Error','Los cambios no se han actualizado.');
    			mask.hide();
    		}
    	});
    	mask.hide();
    },
    
    refreshScreen: function () {
    	var me = this;
    
    	me.materialsStore.load();
    	me.clearForm();
   		//me.loadSelectedRecordInForm();
    },
    
    clearForm: function () {
    	var me = this;

    	me.materialForm.getForm().getFields().each(function(field){
    		field.validateOnChange = false;
    		field.setValue('');
    		if (field=='id'){
    			field.setValue('-1');
    		}
    		field.resetOriginalValue();
    	});
    },
    
    loadSelectedRecordInForm: function (){
    	var me = this;
    	if (me.selectedRecord) {
            me.materialForm.getForm().loadRecord(me.selectedRecord);
        }
    },
    
    createNewEmptyRecord: function () {
        var newRecord, me= this;
        
        me.materialModel = Ext.create('SportLog.model.Material');
        me.materialModel.set("id", "");
        me.materialModel.set("status", "1");
        me.materialModel.set("created_at",new Date());
        me.materialModel.set("purchase_date",new Date());
        
        me.loadRecordInForm(me.materialModel,me);
        //me.materialsStore.add(me.materialModel);
        //newRecord = me.materialsStore.findRecord('id', me.materialModel.id) ;
        
		//me.loadRecordInForm(newRecord,me);
    },
    
    findAndSelectRecordInGrid: function (record) {
    	var grid = Ext.getCmp('materialsGrid');
	   			
    	grid.getSelectionModel().select(record);
    },
    
    loadRecordInForm: function (record, scope) {
    	var me = scope;
    	if (record) {
    		me.materialForm.getForm().loadRecord(record);
        	me.selectedRecord = record;					
    	}
    },
    
    confirmPendingChanges: function (callBackFn) {
    	var me = this;
    
    		Ext.MessageBox.show ({
    			title: 'Confirmar',
    			msg: 'Hay cambios pendientes de grabar, si continua se perderán los cambios.',
    			buttons: Ext.MessageBox.YESNO,
    			buttonsText: {
    				yes : 'SI',
    				no : 'NO'
    			},
    			scope: me,
    			fn: function (btn, text){
    					callBackFn(btn=='yes');
    			}
    		});  
    },
    
    existChangesOnWindow: function () {
    	var me = this;
    	return me.materialForm.getForm().isDirty()
    }
 
    
//    
//    onClickDelete: function () {
//    	var me = this,
//    		grid = Ext.getCmp('materialsGrid'),
//    		selectedRows = grid.getSelectionModel.getSelection();
//    		
//        if(selectedRows.length<=0){
//        	Ext.Msg.alert('Atención', 'No ha seleccionado ninguna fila para borrar.');
//        	return;
//        }
//   
//        me.materialsStore.remove(selectedRows);    
//    },
//    
//    
//    onClickWindowUndo : function (){
//    	var me = this;
//    		
//    	if (me.existChangesOnWindow()) {
//    		Ext.MessageBox.show ({
//    			title: 'Confirmar',
//    			msg: 'Hay cambios pendientes de grabar, si continua se perderán los cambios.',
//    			buttons: Ext.MessageBox.YESNO,
//    			buttonsText: {
//    				yes : 'SI',
//    				no : 'NO'
//    			},
//    			scope: me,
//    			fn: function (btn, text){
//    				if (btn=='yes'){
//    					me.loadSelectedRecord();
//    				}
//    			}
//    		});
//    	}
//    },
//    
//    onClickNewWindow: function () {
//    	var me = this;
//    },
//    
//    onSelectMaterial: function (grid, rowIndex, e) {
//    	var me = this,
//    		win = me.lookupReference('materialPopupWindow');
//    	
//    	if (!grid.selectionModel.hasSelection()) return;
//        
//    	me.selectedRecord = grid.selectionModel.getSelection()[0];
//    	
//        if (!win) {
//            win = new SportLog.view.configs.materials.MaterialForm();
//            //win.record = rec;
//            // A Window is a floating component, so by default it is not connected
//            // to our main View in any way. By adding it, we are creating this link
//            // and allow the window to be controlled by the main ViewController,
//            // as well as be destroyed automatically along with the main View.
//            me.getView().add(win);
//        }
//        
//        win.show();
//        me.loadSelectedRecord();
//    },
//    
//    loadSelectedRecord: function () {
//    	var me = this, materialForm = undefined;
//    	
//    	if (me.selectedRecord) {
//        	materialForm = me.lookupReference('materialsWindowForm');
//        	
//        	if (materialForm){
//            materialForm.getForm().loadRecord(me.selectedRecord);}
//        }
//    },
//    
//    existChangesOnWindow: function () {
//    	var me = this, 
//    		materialForm  = me.lookupReference('materialsWindowForm'),
//    		form = materialForm.getForm(),
//    		formRecord = form.getRecord();
//    	
//    		debugger;
//    	if (!formRecord) return false;
//    	return formRecord.isModified(); 
//    }
 });