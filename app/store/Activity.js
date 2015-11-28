/**
 * 
 */
 Ext.define('SportLog.store.Activity', {
    extend: 'Ext.data.Store',
    model: 'SportLog.model.Activity',
    alias: 'store.Activity',

    proxy: {
        type: 'rest',
        url: 'http://localhost/SportLog/API/activities',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    autoSync: true
});