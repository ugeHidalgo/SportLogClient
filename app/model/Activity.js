/**
 * 
 */
 Ext.define ('SportLog.model.Activity', {
    extend: 'SportLog.model.Base',
    
    alias: 'model.activity',
    
    fields: [
        {name: 'id', type: 'int', convert: null},
        {name: 'name', type: 'string' },
        {name: 'sportType_id', type: 'int'}
    ],
    validators: {
        name: [
            {type: 'presence'}
        ]
    }
});