/**
 * 
 */
Ext.define ('SportLog.model.SportType', {
    extend: 'SportLog.model.Base',
    
    alias: 'model.sporttype',
    
    fields: [
        {name: 'id', type: 'int', convert: null},
        {name: 'name', type: 'string' },
        {name: 'coment', type: 'string'}
    ],
    validators: {
        name: [
            {type: 'presence'}
        ]
    }
});