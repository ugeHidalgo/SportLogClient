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
    selectedRecord: undefined,
     
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    	
    	apiHelper.setApiKey(me.getStore('materialsStore'));
    	me.materialsStore = me.getStore('materialsStore');
    },
    
    onClickLoadStoreData : function (){
    	var me = this;
    		
    	me.materialsStore.load();
    },
    
    onClickNew: function () {
    	var me = this;
        
        var materialModel = Ext.create('SportLog.model.Material');
        materialModel.set("id", "");
        materialModel.set("status", "1");
        materialModel.set("created_at",new Date());
        me.materialsStore.add(materialModel);
    },
    
    onClickDelete: function () {
    	var me = this,
    		grid = Ext.getCmp('materialsGrid'),
    		selectedRows = grid.getSelectionModel.getSelection();
    		
        if(selectedRows.length<=0){
        	Ext.Msg.alert('Atención', 'No ha seleccionado ninguna fila para borrar.');
        	return;
        }
   
        me.materialsStore.remove(selectedRows);    
    },
    
    onClickSave: function(){
    	var me = this;
    	
    	me.materialsStore.sync({
    		success: function (batch, eOpts){
    			me.materialsStore.load();
    			Ext.Msg.alert('Ok','Cambios actualizados correctamente.');
    		}
    	},{
    		failure: function (batch, eOpts) {
    			Ext.Msg.alert('Error','Los cambios no se han actualizado.');
    		}
    	});
    },
    
    onClickWindowUndo : function (){
    	var me = this;
    		
    	if (me.existChangesOnWindow()) {
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
    				if (btn=='yes'){
    					me.loadSelectedRecord();
    				}
    			}
    		});
    	}
    },
    
    onClickNewWindow: function () {
    	var me = this;
    },
    
//    onSelectionChange: function(model, records) {
//        var rec = records[0],
//            me = this;
//               
//        if (rec) {
//        	materialForm = Ext.getCmp('materialsForm');
//            materialForm.getForm().loadRecord(rec);
//        }
//    },
//    
    onSelectMaterial: function (grid, rowIndex, e) {
    	var me = this,
    		win = me.lookupReference('materialPopupWindow');
    	
    	if (!grid.selectionModel.hasSelection()) return;
        
    	me.selectedRecord = grid.selectionModel.getSelection()[0];
    	
        if (!win) {
            win = new SportLog.view.configs.materials.MaterialForm();
            //win.record = rec;
            // A Window is a floating component, so by default it is not connected
            // to our main View in any way. By adding it, we are creating this link
            // and allow the window to be controlled by the main ViewController,
            // as well as be destroyed automatically along with the main View.
            me.getView().add(win);
        }
        
        win.show();
        me.loadSelectedRecord();
    },
    
    loadSelectedRecord: function () {
    	var me = this, materialForm = undefined;
    	
    	if (me.selectedRecord) {
        	materialForm = me.lookupReference('materialsWindowForm');
        	
        	if (materialForm){
            materialForm.getForm().loadRecord(me.selectedRecord);}
        }
    },
    
    existChangesOnWindow: function () {
    	var me = this, 
    		materialForm  = me.lookupReference('materialsWindowForm'),
    		form = materialForm.getForm(),
    		formRecord = form.getRecord();
    	
    		debugger;
    	if (!formRecord) return false;
    	return formRecord.isModified(); 
    }
 });