/**
 * 
 */
 Ext.define ('SportLog.model.Material', {
    extend: 'SportLog.model.Base',
    
    alias: 'model.material',
    
    fields: [
        {name: 'id', type: 'int', convert: null},
        {name: 'alias', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'brand', type: 'string' },
        {name: 'parent_id', type: 'int'},
        {name: 'total_time', type: 'string'},
        {name: 'total_distance', type: 'float'},
        {name: 'status', type: 'boolean'},
        {name: 'created_at', type: 'date'},
        {name: 'purchase_date', type: 'date'},
        {name: 'max_time', type: 'string'},
        {name: 'max_distance', type: 'float'},
        {name: 'comment', type: 'string'},
        {name: 'initial_time', type: 'string'},
        {name: 'initial_distance', type: 'float'},
        {name: 'userId', type: 'int'}
    ],
    validators: {
        name: [
            {type: 'presence'}
        ]
    }
});