/**
 * 
 */
Ext.define('SportLog.view.configs.activitytypes.ActivityTypeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.activitytype-model',
    
        requires: [
        'SportLog.model.Activity',
        //'SportLog.model.SportType',
        'SportLog.globals.User'
        ],
    
    stores: {
        activitiesStore: {
            model: 'Activity',
            autoLoad: true,
            
            proxy: {
        		type: 'ajax',
        		url: '/SportLogServer/API/Activities/activities',
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