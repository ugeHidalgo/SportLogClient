/**
 * 
 */
 Ext.define('SportLog.store.ActivityType', {
    extend: 'Ext.data.Store',
    model: 'SportLog.model.ActivityType',
    alias: 'store.ActivityType',

    proxy: {
        type: 'rest',
        url: 'http://localhost/SportLog/API/ActivityTypes/activityTypes',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    autoSync: true
});