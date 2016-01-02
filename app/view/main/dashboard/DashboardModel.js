/**
 * 
 */
 Ext.define('SportLog.view.main.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard-model',
    
    requires: [
        'SportLog.model.Session',
        'SportLog.globals.User'
        ],
    
    stores: {
        sessionsStore: {
            model: 'Session',
            autoLoad: true,
            
            proxy: {
        		type: 'ajax',
        		url: '/SportLogServer/API/Sessions/sessions',
        		actionMethods: {
        			read: 'GET',
        			create: 'POST',
        			update: 'PUT',
        			destroy: 'DELETE'
        		},
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