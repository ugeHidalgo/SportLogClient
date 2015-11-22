/**
 * Created by Eugenio Hidalgo 2015
 */
Ext.define('SportLog.view.login.Login',{
    extend: 'Ext.window.Window',
    xtype: 'login',
    
    requires:[
        'SportLog.view.login.LoginController',
        'Ext.form.Panel'
    ],
    
    listeners: {
        afterrender: function() {
			var remember = Ext.util.Cookies.get (SportLog.globals.User.accessCookie);
			if (remember) {
				Ext.getCmp('rememberUserName').setValue(true);
				Ext.getCmp('userText').setValue(remember); 
				Ext.getCmp('passwordText').setValue('12345'); //TODO dejar vacío
			}
        }
	},
    
    controller: 'login',
    
    bodyPadding: 10,
    width: 350,
    title: 'Introduzca usuario y contraseña',
    closable: false,
    autoShow: true,
    
    items: [{
        xtype: 'form',
        reference: 'form',
        frame: true,
        bodyPadding: 10,
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 115,
            msgTarget: 'side'
        },
        
        items:[{
                xtype: 'textfield',
                name: 'username',
                id: 'userText',
                fieldLabel: 'Usuario',
                allowBlank: false
            },{
                xtype: 'textfield',
                name: 'password',
                id: 'passwordText',
                inputType: 'password',
                fieldLabel: 'Contraseña',
                allowBlank: false
            },{
                xtype:'checkbox',
                name: 'remember',
                id: 'rememberUserName',
                fieldLabel: 'Recordar usuario'
            }],
        buttons: [{ 
            		text: 'Crear Nuevo Usuario',
            		formBind: false,
            		listeners: {
            			click: 'onNewUserClick'
            		}
        		},{
                	text: 'Entrar',
                	formBind: true,
                	listeners: {
                		click: 'onLoginClick'
                	}
        		}]
    }]
});