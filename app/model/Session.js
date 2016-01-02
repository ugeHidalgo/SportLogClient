/**
 * 
 */
 Ext.define ('SportLog.model.Session', {
    extend: 'SportLog.model.Base',
    
    alias: 'model.session',
    
    fields: [
        {name: 'id', type: 'int', convert: null},
        {name: 'name', type: 'string' },
        {name: 'date', type: 'date'},
        {name: 'sessionDist', type: 'float'},
        {name: 'sessionTime', type: 'string'},
        {name: 'userId', type: 'int'}
    ],
    validators: {
        name: [
            {type: 'presence'}
        ]
    }
});