/**
 * 
 */
 Ext.define('SportLog.view.users.UsersListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userslist',
    
    requires: [
        'SportLog.model.User',
        'SportLog.globals.User'
        ],
    
    stores: {
        usersListStore: {
            model: 'User',
            autoLoad: true,
            
            proxy: {
        		type: 'ajax',
        		url: '/SportLogServer/API/Users/users',
        		headers: {
        			'Authorization' : SportLog.globals.User.apiKey
        		},
        		reader: {
            		type: 'json',
            		rootProperty: 'data'
        		},
        		writer: {
            		type: 'json',
            		writeAllFields: true,
            		rootProperty: 'data'
        		}
    		}
        }
    }
 });