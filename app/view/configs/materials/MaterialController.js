/**
 * 
 */
 Ext.define ('SportLog.view.configs.materials.MaterialController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.material-controller',
    
    requires: [
    	'SportLog.utils.APIHelper',
    	'SportLog.utils.TimeHelper',
    	'SportLog.store.Material',
    	'SportLog.view.configs.materials.MaterialPanel'
    ],
    
    newRecord : false,
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
    
    changeToStringTime: function(value){
    	debugger;
    	var timeHelper = Ext.create ('SportLog.utils.TimeHelper');
    	return timeHelper.bigIntToStringTime(value);
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
    	var me = this, mask,
    		materialModel, 
    		form = me.materialForm.getForm();
    	
    	if (!form.isDirty()) {
            Ext.Msg.alert('Atención', 'No hay cambios para grabar.');
            return;
        }
        else if (!form.isValid()) {
            Ext.Msg.alert('Atención', 'Datos incorrectos.');
            return;
        }
        
        mask = new Ext.LoadMask(me.materialForm, { msg: "Salvando datos..." });
        mask.show();
        
        me.materialModel.set(form.getValues());
        me.materialModel.set("purchase_date",
       					Ext.util.Format.date(form.getFieldValues().purchase_date, 'Y-m-d'));
        if (me.newRecord) {
        	me.materialsStore.add(me.materialModel); 
        }
        
    	me.materialsStore.sync({
    		success: function (batch, eOpts){
    			me.newRecord = false;
    			me.materialsStore.load();
    			me.loadRecordInForm(me.materialModel,me);
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
    
    onClickDelete: function () {
    	var me = this, selectedRows,
    		grid = Ext.getCmp('materialsGrid');
    		
    	if (!me.materialModel){
    		Ext.Msg.alert('Atención', 'Debe seleccionar un material de la lista de materiales para ser borrado.');
    		return;
    	}
    	
    	Ext.MessageBox.show ({
    		title: 'Confirmar',
    		msg: 'Va a borrar el material seleccionado.' +
    			 '</br>¿Continuar con el borrado?',
    		buttons: Ext.MessageBox.YESNO,
    		buttonText: {
    			yes: 'Si',
    			no: 'No'
    		},
    		scope: me,
    		fn: function (btn, text){
    				if (btn=='yes') {
    					me.deleteMaterial();
    				}
    		}
    	});
    	
    	
    },
    
    deleteMaterial: function () {
    	var me = this,
    		mask = new Ext.LoadMask(me.materialForm, { msg: "Borrando material seleccionado..." });
        mask.show();
    	
    	me.materialsStore.remove(me.materialModel);
    	me.materialModel = null;
    	
    	me.materialsStore.sync({
    		success: function (batch, eOpts){
    			me.materialsStore.load();
    			me.selectedRecord = null;
    			me.loadSelectedRecordInForm();
    			Ext.Msg.alert('Ok','Material borrado correctamente.');
    			mask.hide();
    		},
    		failure: function (batch, eOpts) {
    			Ext.Msg.alert('Error','El material seleccionado no ha podido ser borrado.');
    			mask.hide();
    		}
    	});
    	mask.hide();
    },
    
    refreshScreen: function () {
    	var me = this;
    
    	me.materialsStore.load();
    	me.clearForm();
   		me.loadSelectedRecordInForm();
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
        } else {
        	me.clearForm();
        }
    },
    
    createNewEmptyRecord: function () {
        var newRecord, me= this;
        
        me.newRecord = true;
        me.materialModel = Ext.create('SportLog.model.Material');
        me.materialModel.set("id", "");
        me.materialModel.set("status", "1");
        me.materialModel.set("created_at",new Date());
        me.materialModel.set("purchase_date",new Date());
        
        me.loadRecordInForm(me.materialModel,me);
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
    		msg: 'Hay cambios pendientes de grabar, si continua se perderán los cambios.' +
    			 '</br>¿Continuar sin grabar cambios?',
    		buttons: Ext.MessageBox.YESNO,
    		buttonText: {
    			yes : 'Si',
    			no : 'No'
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