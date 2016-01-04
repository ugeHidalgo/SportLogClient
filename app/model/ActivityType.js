/**
 * 
 */
 Ext.define ('SportLog.model.ActivityType', {
    extend: 'SportLog.model.Base',
    
    alias: 'model.activityType',
    
    fields: [
        {name: 'id', type: 'int', convert: null},
        {name: 'name', type: 'string' },
        {name: 'sportType_id', type: 'int'},
        {name: 'userId', type: 'int'}
    ],
    validators: {
        name: [
            {type: 'presence'}
        ]
    }
});