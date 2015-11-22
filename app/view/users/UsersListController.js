/**
 * 
 */
 Ext.define('SportLog.view.users.UsersListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userslist',
    
    requires: [
    	'SportLog.utils.APIHelper'
    ],
    
    initViewModel: function() {
    	var me = this,
    		apiHelper = Ext.create ('SportLog.utils.APIHelper');
    	
    	apiHelper.setApiKey(me.getStore('usersListStore'));
    },
    
	setUserStateValue: function (grid, rowIndex, colIndex){
    	var me = this, aut,
    		usersStore = grid.getStore();
    		rec = usersStore.getAt(rowIndex),
    		newStatus = rec.get('status'),
    		resultMessage = 'El usuario ' + rec.get('first_name') + ' ha sido ',
    		performedAction = '';
    	
    	if (newStatus === 1){
    		newStatus = 0;
    		performedAction = 'desactivado.';
    	} else {
    		newStatus = 1;
    		performedAction = 'activado.';
    	}
    		
    	rec.set('status', newStatus);
    	aut = SportLog.globals.User.apiKey;
    	Ext.apply(usersStore.proxy.headers, {'Authorization':aut});
    	usersStore.sync({
    		success: function () {
    			alert (resultMessage + performedAction);
    		}
    	}); 
    },
    
    setUserAdminValue: function (grid, rowIndex, colIndex) {
    	var me = this,
    		usersStore = grid.getStore();
    		rec = usersStore.getAt(rowIndex),
    		newAdmin = rec.get('admin'),
    		resultMessage = resultMessage = 'El usuario ' + rec.get('first_name') + ' es ahora un ',
    		tipoUsuario = '';
    	
    	if (newAdmin === 1){
    		newAdmin = 0;
    		tipoUsuario = 'usuario normal.';
    	} else {
    		newAdmin = 1;
    		tipoUsuario = 'administrador.';
    	}
    		
    	rec.set('admin', newAdmin);
    	usersStore.sync({
    		success: function () {
    			alert (resultMessage + tipoUsuario);
    		}
    	});
    }
    
//    setUserStateValue: function (grid, rowIndex, colIndex){
//    	
//    	var me = this,
//    		rec = grid.getStore().getAt(rowIndex),
//    		newStatus = rec.get('status'),
//    		resultMessage = '',
//    		performedAction = 'desactivado';
//    	
//    		if (newStatus === 1){
//    			newStatus = 0;
//    		} else {
//    			newStatus = 1;
//    		}
//    		
//    		Ext.Ajax.request({
//        		url: '/SportlogServer/API/users',
//        		method : "POST",
//        		headers: {
//        			'Content-Type': 'application/json'
//        		},
//        		params : {
//        			id : rec.get ('id'),
//        			status : newStatus
////        			first_name: rec.get ('firstName'),
////        			second_name: rec.get ('secondName'),
////        			user_name: rec.get ('userName').getValue(),
////        			email: Ext.getCmp ('email').getValue(),
////        			birthdate: Ext.getCmp ('birthdate').getValue(),
////        			sex: Ext.getCmp ('gender').getValue(),
////        			password: Ext.getCmp ('registerPassword').getValue()
//        		},
//        		jsonData: true,
//        		success: me.onUpdateStatusSuccess,
//        		failure: me.onFailure,
//        		scope : me
//        	});
//    	
////    	rec.set('status', status);
////    	grid.getStore().sync({
////    		success: function () {
////    			debugger;
////    			resultMessage = 'El usuario ' + rec.get('first_name') + ' ha sido ';
////    			if (status){
////    				performedAction = 'activado';
////    			}
////    			alert (resulMessage + performedAction);
////    		}
////    	}); 
//    },
//    
//    onUpdateStatusSuccess: function (grid){
//    	grid.getStore().load();
//    }, 
    
});