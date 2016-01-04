/**
 * 
 */
Ext.define ('SportLog.model.SportType', {
    extend: 'SportLog.model.Base',
    
    alias: 'model.sporttype',
    
    fields: [
        {name: 'id', type: 'int', convert: null},
        {name: 'userId', type: 'int'},
        {name: 'name', type: 'string' },
        {name: 'comment', type: 'string'}
    ],
    validators: {
        name: [
            {type: 'presence'}
        ]
    }
});