/**
 * 
 */
Ext.define('SportLog.view.configs.activitytypes.ActivityTypeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.activitytype-model',
    
        requires: [
        'SportLog.model.Activity',
        'SportLog.globals.User'
        ],
    
    stores: {
        activitiesStore: {
            model: 'Activity',
            autoLoad: true,
            
            proxy: {
        		type: 'ajax',
        		url: '/SportLogServer/API/activities',
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