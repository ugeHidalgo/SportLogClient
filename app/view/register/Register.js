/**
 * Eugenio Hidalgo Hernández 2015
 */
Ext.define('SportLog.view.register.Register', {
    extend: 'Ext.window.Window',
    xtype: 'register-form',
    
    requires:[
              'SportLog.view.register.RegisterController',
              'SportLog.store.GenderTypes',
              'Ext.form.Panel'
          ],
          
    controller: 'register',
          
    frame: true,
    title: 'Registro de nuevo usuario',
    bodyPadding: 10,
    scrollable:true,
    width: 500,
    closable: false,
    modal: true,
    autoShow: true,

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 120,
        msgTarget: 'side'
    },
    
    items: [{
        xtype: 'form',
        reference: 'form',
        frame: true,
        bodyPadding: 10,
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 120,
            msgTarget: 'side'
        },
    
        items: [{
        	xtype: 'fieldset',
        	title: 'Información de acceso',
        	defaultType: 'textfield',
        	defaults: {
        		anchor: '100%'
        	},
        
        	items: [{ 
        		allowBlank:false, 
        	    fieldLabel: 'Usuario :', 
        	    id: 'userName',
        	    allowBlank: false,
        	    emptyText: 'nombre de usuario',
        	    value: 'ugeHidalgo'  //TODO: remove <---------
        	},{ 
        		allowBlank:false, 
        		fieldLabel: 'Contraseña :', 
        		id: 'registerPassword', 
        		allowBlank: false,
        		emptyText: 'contraseña', 
        		inputType: 'password',
        		value: '12345',  //TODO: remove <---------
        		validator:  function(value){
        			var me = this,
        			    passwordTyped = Ext.getCmp ('confirmPassword').getValue();
        			
        			if (passwordTyped!==value){
        				return 'La contraseña y su confirmación no coindiden';
        			} else {
        				return true;
        			}
        		}
        	},{ 
        		allowBlank:false, 
        		fieldLabel: 'Confirmar contraseña :', 
        		id: 'confirmPassword', 
        		allowBlank: false,
        		emptyText: 'confirmar contraseña', 
        		inputType: 'password',
        		value: '12345',  //TODO: remove <---------
        		validator:  function(value){
        			var me = this,
        			    passwordTyped = Ext.getCmp ('registerPassword').getValue();
        			
        			if (passwordTyped!==value){
        				return 'La contraseña y su confirmación no coindiden';
        			} else {
        				return true;
        			}
        		}
        	}]
        },{
        	xtype: 'fieldset',
        	title: 'Información de contacto',
        
        	defaultType: 'textfield',
        	defaults: {
        		anchor: '100%'
        	},
        
        	items: [{
        		fieldLabel: 'Nombre :',
        		emptyText: 'First Name',
        		id: 'firstName',
        		allowBlank: false,
        		value: 'Eugenio'  //TODO: remove <---------
        	}, {
        		fieldLabel: 'Apellidos :',
        		emptyText: 'Last Name',
        		id: 'secondName',
        		allowBlank: false,
        		value: 'Hidalgo'  //TODO: remove <---------
        	}, {
        		fieldLabel: 'eMail :',
        		id: 'email',
        		allowBlank: false,
        		vtype: 'email',
        		value: 'ugeHidalgo@hotmail.com'  //TODO: remove <---------
        	},{
        		xtype: 'fieldset',
        		title: '',
        		defaultType: 'textfield',
        		defaults: {
        			anchor: '100%'
        		},
        
        		items: [{
        			xtype: 'combobox',
        			fieldLabel: 'Género :',
        			id: 'gender',
        			store: {
        				type: 'genderTypes'
        			},
        			valueField: 'id',
        			allowBlank: false,
        			displayField: 'description',
        			typeAhead: true,
        			queryMode: 'local',
        			emptyText: 'Seleccione género...',
        			value: 'Hombre'  //TODO: remove <---------
        		}, {
        			xtype: 'datefield',
        			fieldLabel: 'Fecha de Nacimiento :',
        			id: 'birthdate',
        			allowBlank: false,
        			maxValue: new Date(),
        			value: '04/19/1971'  //TODO: remove <---------
        		}]
        	}]
        }]
    }],

    buttons: [{
    	text: 'Cancelar',
    	formBind:false,
    	listeners: {
    		click: 'onCancelRegisterClick'
    	}	
    },{
    	text: 'Crear nuevo',
//        disabled: true,
        formBind: true,
        listeners: {
    		click: 'onRegisterClick'
        }
    }]
});