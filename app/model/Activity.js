/**
 * 
 */
 Ext.define ('SportLog.model.Activity', {
    extend: 'SportLog.model.Base',
    
    alias: 'model.activity',
    
    fields: [
        {name: 'id', type: 'int', convert: null},
        {name: 'userId', type: 'int' },
        {name: 'sessionId', type: 'int'},
        {name: 'activityTypeId', type: 'int'},
        {name: 'activityTime', type: 'string'},
        {name: 'activityDist', type: 'float'},
        {name: 'avgHRate', type: 'int'},
        {name: 'maxHRate', type: 'int'},
        {name: 'minHRate', type: 'int'},
        {name: 'avgPower', type: 'int'},
        {name: 'maxPower', type: 'int'},
        {name: 'minPower', type: 'int'},
        {name: 'value', type: 'int'},
        {name: 'comment', type: 'string'}
    ]
});