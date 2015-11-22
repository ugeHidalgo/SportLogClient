 /**
 * Controller class for register screen
 * Created by Eugenio Hidalgo 2015
 */
Ext.define ('SportLog.view.register.RegisterController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.register',
    requires: 'SportLog.globals.User',
    
    onRegisterClick: function () {
        var me = this;
        
        Ext.Ajax.request({
        	url: '/SportlogServer/API/register',
        	method : "POST",
        	headers: {
        		'Content-Type': 'application/json'
        	},
        	params : {
        		first_name: Ext.getCmp ('firstName').getValue(),
        		second_name: Ext.getCmp ('secondName').getValue(),
        		user_name: Ext.getCmp ('userName').getValue(),
        		email: Ext.getCmp ('email').getValue(),
        		birthdate: Ext.getCmp ('birthdate').getValue(),
        		sex: Ext.getCmp ('gender').getValue(),
        		password: Ext.getCmp ('registerPassword').getValue()
        	},
        	jsonData: true,
        	success: me.onSuccess,
        	failure: me.onFailure,
        	scope : me
        });
    },
    
    onSuccess: function(jsonData) {
    	var me = this,
            result = Ext.util.JSON.decode(jsonData.responseText);
    	
        if (!result.error){
        	SportLog.globals.User.apiKey = result.apiKey;
            Ext.Msg.alert(result.message , 'En cuanto su administrador active su usario podrá entrar al sistema.');
            me.getView().destroy();
        } else {
        	Ext.Msg.alert('Atención...',result.message);
        }
    },
    
    onFailure: function(jsonData) {
    	var result = Ext.util.JSON.decode(jsonData.responseText);

        Ext.Msg.alert('Atención',result.message);
    },
        
    onCancelRegisterClick: function () {
    	var me = this;
    		
        Ext.MessageBox.confirm('Confirmar',
        		'Si cancela se perderán los datos introducidos. ¿Está seguro?', 
            	me.cancelRegistration, me);
    },
    
    cancelRegistration: function (buttonPressed){
    	var me = this;
    	
    	if (buttonPressed =='yes'){
    		me.getView().destroy();
    	}
    }
	
});