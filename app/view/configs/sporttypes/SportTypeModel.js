/**
 * 
 */
Ext.define('SportLog.view.configs.sporttypes.SportTypeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sporttype-model',
        
    requires: [
        'SportLog.model.SportType',
        'SportLog.globals.User'
        ],
    
    stores: {
        sportTypesStore: {
            model: 'SportType',
            autoLoad: true,
            
            proxy: {
        		type: 'ajax',
        		url: '/SportLogServer/API/SportTypes/sportTypes',
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