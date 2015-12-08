/**
 * Created by Eugenio Hidalgo 2015
 */
Ext.define ('SportLog.store.Users',{
    extend: 'Ext.data.Store',
    
    model: 'SportLog.model.User',
    
    alias: 'store.users',
    
    autoload: true,
    proxy: {
        type: 'ajax',
        url: '/SportLogServer/API/Users/users',
        reader: {
            type: 'json',
            rootProperty: 'data' //users
        },
        writer: {
            type: 'json'
        }
    }
    
/*    data: { 
    	items: [{ 
    			id: '1',
    			userName: 'ugeHidalgo', 
    			firstName: 'Eugenio',
    			secondName: 'Hidalgo Hernández',
    			email: "ugehidalgo@hotmail.com", 
    			status: '1', 
    			createdAt: '11/10/2015',
    			birthdate: '19/04/1971',
    			sex: '1'
    			},{ 
    			id: '2',
    			userName: 'peteNathan', 
    			firstName: 'Pete',
    			secondName: 'Nathan',
    			email: "petenathan@hotmail.com", 
    			status: '1', 
    			createdAt: '11/10/2015',
    			birthdate: '3/12/1965',
    			sex: '1'
    			},{ 
    			id: '3',
    			userName: 'wandaWeir', 
    			firstName: 'Wanda',
    			secondName: 'Weir',
    			email: "wandaweir@hotmail.com", 
    			status: '1', 
    			createdAt: '11/10/2015',
    			birthdate: '19/02/1968',
    			sex: '2'
    			}
    ]},*/    
/*    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }*/
});