/**
 * Created by Eugenio Hidalgo 2015
 */
Ext.define('SportLog.store.SportType', {
    extend: 'Ext.data.Store',
    model: 'SportLog.model.SportType',
    alias: 'store.SportType',

    proxy: {
        type: 'rest',
        url: 'http://localhost/SportLog/API/sportTypes',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
    autoSync: true
});