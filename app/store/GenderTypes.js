/**
 *  Gender Types
 *  Eugenio Hidalgo Hernández 2015
 */
Ext.define('SportLog.store.GenderTypes', {
    extend: 'Ext.data.ArrayStore',
    model: 'SportLog.model.GenderTypes',
    alias: 'store.genderTypes',
    
    storeId: 'genderTypes',

	data: [ 
	        ['0', 'Indefinido' ],
            ['1', 'Mujer' ],
            ['2', 'Hombre' ]
          ]
});