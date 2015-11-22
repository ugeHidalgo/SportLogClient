/**
 * Created by Eugenio Hidalgo 2015
 */
Ext.define('SportLog.model.User',{
    extend: 'SportLog.model.Base',

    alias: 'model.user',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'first_name', type: 'string'},
        {name: 'second_name', type: 'string'},
        {name: 'user_name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'password_hash', type: 'string'},
        {name: 'api_key', type: 'string'},
        {name: 'status', type: 'int'},
        {name: 'created_at', type: 'date'},
        {name: 'birthdate', type: 'date'},
        {name: 'sex', type: 'int'},
        {name: 'admin', type: 'int' }
    ]
});