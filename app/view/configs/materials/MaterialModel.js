/**
 * 
 */
 Ext.define('SportLog.view.configs.materials.MaterialModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.material-model',
    
    requires: [
        'SportLog.model.Material',
        'SportLog.globals.User'
        ],
    
    stores: {
        materialsStore: {
            model: 'Material',
            autoLoad: true,
            
            proxy: {
        		type: 'ajax',
        		url: '/SportLogServer/API/materials',
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