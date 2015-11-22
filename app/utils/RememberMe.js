/**
 * 
 */
 Ext.define('SportLog.utils.RememberMe', {
	requires : 'SportLog.globals.RememberMe',
	
//Ejemplode uso de remember me 
//me.rememberMeUserName(SportLog.globals.User.user_name,
//					hasToRememberUserName);
//	rememberMeUserName : function(userName, hasToRememberUserName) {
//		var me = this;
//
//		if (hasToRememberUserName) {
//			me.createRememberMeField(SportLog.globals.RememberMe.RememberLogin,
//					'true');
//			me.createRememberMeField(
//					SportLog.globals.RememberMe.LastUserNameLogged, userName);
//		} else {
//			me.deleteRememberMeField(SportLog.globals.RememberMe.RememberLogin);
//			me.deleteRememberMeField(SportLog.globals.RememberMe.LastUserNameLogged);
//		}
//	},

	createRememberMeField : function(fieldNameToSet, fieldValueToSet) {
		var me = this, urlToCreate = '/SportlogServer/API/rememberMe';

		Ext.Ajax.request({
					url : urlToCreate,
					method : "POST",
					headers : {
						'Content-Type' : 'application/x-www-form-urlencoded',
						'Authorization' : SportLog.globals.User.apiKey
					},
					params : {
						fieldName : fieldNameToSet,
						fieldValue : fieldValueToSet
					},
					jsonData : true,
					// success: me.onSuccess,
					// failure: me.onFailure,
					scope : me
				});
	},

	deleteRememberMeField : function(fieldName) {
		var me = this, urlToDelete = '/SportlogServer/API/rememberMe/'
				+ fieldName;

		Ext.Ajax.request({
					url : urlToDelete,
					method : "DELETE",
					headers : {
						'Content-Type' : 'application/json',
						'Authorization' : SportLog.globals.User.apiKey
					},
					jsonData : true,
					// success: me.onSuccess,
					// failure: me.onFailure,
					scope : me
				});
	}
 });