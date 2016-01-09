/**
 * 
 */
 Ext.define ('SportLog.view.main.dashboard.ActivitiesForm', {
 	extend: 'Ext.window.Window',
 	xtype: 'activities-form-window',
 	
 	reference: 'activitiesPopUpWindow',
 	
 	title: 'Ficha de sesión',
 	width: 1200,
 	height: 600,
 	x: 10,
 	y : 10,
 	layout: 'absolute',
 	expandOnShow: true,
 	resizeable: false,
 	modal: true,
 	closeAction: 'close',
 	
 	items: [{
 		xtype: 'form',
 		reference: 'activitiesWindowForm',
 		scrollable: true,
 		border: false,
 		bodyPadding: 3,
 		fieldDefaults: {
 			
 		},
 		layout:  {
 			
 		},
 		
    	items: [{
    		xtype: 'activitiesGrid'
    	}]
 	}]
});