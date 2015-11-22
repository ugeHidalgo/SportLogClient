/**
 *  Singleton class used to hold global variables for the user.
 *  
 *  Eugenio Hidalgo 2015
 */
Ext.define('SportLog.globals.User',{
	singleton : true,
	
	id : undefined,
	user_name : undefined,
	apiKey : undefined,
	isAdmin : false,
	
	accessCookie : 'rememberAcccessForSportLog'
});