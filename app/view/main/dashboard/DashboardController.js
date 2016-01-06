/**
 * 
 */
 Ext.define ('SportLog.view.main.dashboard.DashboardController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard-controller',
    
    requires: [
    	'SportLog.utils.APIHelper',
    	'SportLog.globals.User'
    ],
    
    sessionsStore: undefined,
    activitiesStore: undefined,
    userId: undefined, 
    
    sessionsPanel: undefined,
    activitiesPanel: undefined,
    
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    	
    	me.userId = SportLog.globals.User.id;
    		
    	apiHelper.setApiKey(me.getStore('sessionsStore'));
    	apiHelper.setApiKey(me.getStore('activitiesStore'));
    	
    	me.sessionsStore = me.getStore('sessionsStore');
    	me.activitiesStore = me.getStore('activitiesStore');
    	
    	me.sessionsPanel = Ext.getCmp('sessionsPanel');
    	me.activitiesPanel = Ext.getCmp('activitiesPanel');
    },
    
    onClickLoadSessions : function (){
    	var me = this;
    	
    	me.sessionsStore.load();
    },
    
    onClickLoadActivities : function (){
    	var me = this;
    	
    	me.activitiesStore.load();
    },
    
    onClickNewSession: function () {
    	var me = this;
        
        var sessionModel = Ext.create('SportLog.model.Session');
        sessionModel.set("id", "");
        sessionModel.set("date", new Date().toString());
        sessionModel.set("name", "Session del día " + new Date().toString());
        sessionModel.set("sessionTime", "0:00:00");
        sessionModel.set("sessionDist", "0.0");
        sessionModel.set("userId", me.userId);
        me.sessionsStore.add(sessionModel);
    },
    
    onClickNewActivity: function () {
    	var me = this, sessionModel, sessionId = 0,
    		grid = Ext.getCmp('sessionsGrid'),
    		selectedRows = grid.getSelectionModel().getSelection();
    		
        if(selectedRows.length<=0){
        	Ext.Msg.alert('Atención', 'No ha seleccionado ninguna session a la que añadir la nueva actividad.');
        	return;
        }
        sessionId = selectedRows[0].get("id");
        
        sessionModel = Ext.create('SportLog.model.Activity');
        sessionModel.set("id", "");
        sessionModel.set("activityTime", "0:00:00");
        sessionModel.set("activityDist", "0.0");
        sessionModel.set("userId", me.userId);
        sessionModel.set("sessionId", sessionId);
        me.sessionsStore.add(sessionModel);
    },
    
    onClickDeleteSessions: function () {
    	var me = this,
    		grid = Ext.getCmp('sessionsGrid'),
    		selectedRows = grid.getSelectionModel().getSelection();
    		
        if(selectedRows.length<=0){
        	Ext.Msg.alert('Atención', 'No ha seleccionado ninguna sesión para borrar.');
        	return;
        }
        me.sessionsStore.remove(selectedRows);    
    },
    
    onClickDeleteActivities: function () {
    	var me = this,
    		grid = Ext.getCmp('activitiesGrid'),
    		selectedRows = grid.getSelectionModel().getSelection();
    		
        if(selectedRows.length<=0){
        	Ext.Msg.alert('Atención', 'No ha seleccionado ninguna actividad para borrar.');
        	return;
        }
        me.sessionsStore.remove(selectedRows);    
    },
    
    onClickSaveSessions: function(){
    	var me = this, mask;
    		
    	if (!me.isDirty(me.sessionsStore)) {
    		Ext.Msg.alert('Atención','No hay sesiones con cambios pendientes de grabar.');
    		return;
    	}
    	mask = me.createMask(me.sessionsPanel,'Grabando sesiones...');
        mask.show();
    	debugger;
    	me.sessionsStore.sync({
    		success: function (batch, eOpts){
    			me.sessionsStore.load();
    			Ext.Msg.alert('Ok','Sesiones guardadas correctamente.');
    			mask.hide();
    		}
    	},{
    		failure: function (batch, eOpts) {
    			Ext.Msg.alert('Error','Los cambios en las sesiones no se han actualizado.');
    			mask.hide();
    		}
    	});
    },
    
    onClickSaveActivities: function(){
    	var me = this, mask;
    		
    	if (!me.isDirty(me.activitiesStore)) {
    		Ext.Msg.alert('Atención','No hay actividades con cambios pendientes de grabar.');
    		return;
    	}
    	mask = me.createMask(me.activitiesPanel,'Grabando actividades...');
        mask.show();
    	
    	me.activitiesStore.sync({
    		success: function (batch, eOpts){
    			me.activitiesStore.load();
    			Ext.Msg.alert('Ok','Actividades guardadas correctamente.');
    			mask.hide();
    		}
    	},{
    		failure: function (batch, eOpts) {
    			Ext.Msg.alert('Error','Los cambios en las actividades no se han actualizado.');
    			mask.hide();
    		}
    	});
    },
    
    createMask: function (targetToMask,messageToShowDuringMask) {
    	return new Ext.LoadMask({ target: targetToMask, msg: messageToShowDuringMask });
    },
    
    isDirty: function (store) {
    	return (store.getNewRecords().length > 0) ||
    		   (store.getUpdatedRecords().length >0 ) ||
    		   (store.getRemovedRecords().length > 0);
    }
 });