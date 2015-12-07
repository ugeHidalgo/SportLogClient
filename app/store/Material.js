/**
 * 
 */
 Ext.define('SportLog.store.Material', {
    extend: 'Ext.data.Store',
    model: 'SportLog.model.Material',
    alias: 'store.Material',

    proxy: {
        type: 'ajax',
        url: '/SportLogServer/API/materials',
        headers: {
        	'Authorization' : SportLog.globals.User.apiKey
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    autoSync: true
});