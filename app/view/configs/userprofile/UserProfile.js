/**
 * 
 */
 Ext.define('SportLog.view.configs.userprofile.UserProfile', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userprofile',
    
    controller: 'userprofile-controller',
    viewModel: {
        type: 'userprofile-model'
    },

    requires: [
        'SportLog.view.configs.userprofile.UserProfileController',
        'SportLog.view.configs.userprofile.UserProfileModel'
    ],
    
    height: 300,
    width: '100%',
    //title: 'Mi cuenta de usuario', // No title for the panel because is the unique panel in this tab.
    header: false,
    bodyPadding: 10,
    html: 'Aqui iran los datos de la cuenta de usuario',
    constrain: true,
    closable: false,
    border: true,
    collapsible: false
    
});