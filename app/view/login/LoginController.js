/**
 * Controller class for login screen Created by Eugenio Hidalgo 2015
 */
Ext.define('SportLog.view.login.LoginController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.login',
	requires : ['SportLog.globals.User', 'SportLog.globals.RememberMe',
			'SportLog.view.register.Register'],

	onLoginClick : function() {
		var me = this, 
			userModelData = Ext.create('model.user', {}), 
			user = Ext.getCmp('userText').getValue(), 
			pass = Ext.getCmp('passwordText').getValue();

		Ext.Ajax.request({
					url : '/SportLogServer/API/Users/login',
					method : "POST",
					headers : {
						'Content-Type' : 'application/json'
					},
					params : {
						user_name : user,
						password : pass
					},
					jsonData : true,
					success : me.onSuccess,
					failure : me.onFailure,
					scope : me
				});
	},

	onSuccess : function(jsonData) {
		var me = this, 
			hasToRememberUserName = Ext.getCmp('rememberUserName').checked, 
			accessGranted = false, 
			result = Ext.util.JSON.decode(jsonData.responseText);
			
		accessGranted = !result.error;
		if (accessGranted) {

			me.setRememberUserCookie(hasToRememberUserName);
			me.setGlobalDataForUser(result);

			localStorage.setItem("SportLogLoggedIn", true);
			me.getView().destroy();
			var mainView = Ext.create({
						xtype : 'app-main'
					});

			Ext.getCmp('logoutBtn').setText(SportLog.globals.User.user_name
					+ ' (Salir)');
		} else {
			Ext.Msg.alert('Atencion', result.message);
		}

	},

	onFailure : function() {
		var result = Ext.util.JSON.decode(jsonData.responseText);

		Ext.Msg.alert('Atencion', result.message);
	},

	onNewUserClick : function() {

		Ext.create({
					xtype : 'register-form'
				});
	},

	setGlobalDataForUser : function(result) {

		SportLog.globals.User.id = result.data.id;
		SportLog.globals.User.user_name = result.data.user_name;
		SportLog.globals.User.apiKey = result.data.api_key;
		SportLog.globals.User.isAdmin = result.data.admin==1;
	},
	
	setRememberUserCookie: function(rememberUserName) {
		var expire, now = new Date(),
			user = Ext.getCmp('userText').getValue();
		
		if (rememberUserName) {
			expire = new Date(now.getTime() + (30*24*60*60*1000));
			Ext.util.Cookies.set (SportLog.globals.User.accessCookie,user,expire);
		} else {
			if (Ext.util.Cookies.get (SportLog.globals.User.accessCookie)){
				expire = new Date(now.getTime() + 1);
				Ext.util.Cookies.set (SportLog.globals.User.accessCookie,user,expire);
			}
		}
		
	}
});