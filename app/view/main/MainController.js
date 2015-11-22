/**
 * 
 */
 Ext.define('SportLog.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    
    requires: [	
    	'SportLog.globals.User',
    	'SportLog.view.main.dashboard.Dashboard'
    ],
    
    beforeInit: function () {
    	
    	var me = this,
    		mainView, mainTab, 
    		isAdmin = SportLog.globals.User.isAdmin;

    	mainView = me.getView();
    	mainTab = mainView.getTabBar("mainTab");
    	//TODO: Aqui deberia ir el desactivar las partes no visibles para usuarios no admin.
    	//mainTab.child('#usersTab').tab.hide();
    	//Ext.getCmp('mainTab').down('usersTab').setDisabled(!isAdmin);
    	//Ext.getCmp('usersTab').setDisabled(!isAdmin);
    },

    onUsersSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') { 
            Ext.Msg.alert ();
        }
    }, 
        
    onClickLogOutButton: function () {
        localStorage.removeItem('SportLogLoggedIn');
        
        this.getView().destroy();
        
        Ext.create({
            xtype: 'login'
        });
    }
});