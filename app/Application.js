/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('SportLog.Application', {
    extend: 'Ext.app.Application',
    
    requires: 'SportLog.globals.User',
    
    name: 'SportLog',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    views:[
        'SportLog.view.login.Login',
        'SportLog.view.register.Register',
        'SportLog.view.main.dashboard.Dashboard',
        'SportLog.view.configs.ConfigsDashboard'
    ],
    
    launch: function () {
        var loggedIn;
        
        loggedIn = localStorage.getItem ('SportLogLoggedIn');
        
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
