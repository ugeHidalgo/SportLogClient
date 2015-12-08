/**
 * Created by Eugenio Hidalgo 2015
 */
Ext.define('SportLog.store.SportType', {
    extend: 'Ext.data.Store',
    model: 'SportLog.model.SportType',
    alias: 'store.SportType',

    proxy: {
        type: 'ajax',
        url: '/SportLogServer/API/SportTypes/sportTypes',
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