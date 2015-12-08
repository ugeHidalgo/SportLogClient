/**
 * Created by Eugenio Hidalgo 2015
 */
Ext.define ('SportLog.store.User',{
    extend: 'Ext.data.Store',

    model: 'SportLog.model.User',

    alias: 'store.user',

    proxy: {
        type: 'rest',
        url: '/SportLogServer/API/Users/login',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    }
});