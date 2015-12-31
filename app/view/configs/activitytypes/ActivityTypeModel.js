/**
 * 
 */
Ext.define('SportLog.view.configs.activitytypes.ActivityTypeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.activitytype-model',
    
        requires: [
        'SportLog.model.ActivityType',
        //'SportLog.model.SportType',
        'SportLog.globals.User'
        ],
    
    stores: {
        activityTypesStore: {
            model: 'ActivityType',
            autoLoad: true,
            
            proxy: {
        		type: 'ajax',
        		url: '/SportLogServer/API/ActivityTypes/activityTypes',
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
//        sportTypesStore: {
//            model: 'SportType',
//            autoLoad: true,
//            
//            proxy: {
//        		type: 'ajax',
//        		url: '/SportLogServer/API/sportTypes',
//        		headers: {
//        			'Authorization' : SportLog.globals.User.apiKey
//        		},
//        		reader: {
//            		type: 'json',
//            		rootProperty: 'data'
//        		}
//    		}
//        }
    }
});