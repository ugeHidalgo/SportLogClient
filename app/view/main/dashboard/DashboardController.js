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
    userId: undefined, 
    
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    	
    	me.userId = SportLog.globals.User.id;
    		
    	apiHelper.setApiKey(me.getStore('sessionsStore'));
    	me.sessionsStore = me.getStore('sessionsStore');
    },
    
    onClickLoadSessions : function (){
    	var me = this;
    	
    	me.sessionsStore.load();
    },
    
    onClickNewSession: function () {
    	var me = this;
        
        var sessionModel = Ext.create('SportLog.model.Session');
        sessionModel.set("id", "");
        sessionModel.set("date", new Date());
        sessionModel.set("name", "Session del día " + new Date().toString());
        sessionModel.set("sessionTime", "0:00:00");
        sessionModel.set("sessionDist", "0.0");
        sessionModel.set("userId", me.userId);
        me.sessionsStore.add(sessionModel);
    },
    
    onClickDeleteSessions: function () {
    	var me = this,
    		grid = Ext.getCmp('sessionsGrid'),
    		selectedRows = grid.getSelectionModel().getSelection();
    		
        if(selectedRows.length<=0){
        	Ext.Msg.alert('Atención', 'No ha seleccionado ninguna fila para borrar.');
        	return;
        }
   
        me.sessionsStore.remove(selectedRows);    
    },
    
    onClickSaveSessions: function(){
    	var me = this;
    	
    	me.sessionsStore.sync({
    		success: function (batch, eOpts){
    			me.sessionsStore.load();
    			Ext.Msg.alert('Ok','Cambios actualizados correctamente.');
    		}
    	},{
    		failure: function (batch, eOpts) {
    			Ext.Msg.alert('Error','Los cambios no se han actualizado.');
    		}
    	});
    }
 });