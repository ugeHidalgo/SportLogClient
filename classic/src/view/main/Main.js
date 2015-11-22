/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 */
Ext.define('SportLog.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'SportLog.view.main.MainController',
        'SportLog.view.main.MainModel',
        
        'SportLog.globals.User'
    ],
    
    userId: undefined,

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [{
        	id:'logoutBtn',
            xtype: 'button',
            text: '(Salir)'+this.userId,
            margin: '10 0',
            handler: 'onClickLogOutButton'
        },{
        	title: 'Users',
            iconCls: 'fa-user',
    		xtype: 'displayfield',
    		hideEmptyLabel: false,
    		bind: {
                html: '{SportLog.globals.User.name}'
            }
        }]
    },

    tabBar: {
    	id: 'mainTab',
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 5,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
    	//tabIndex: 0,
    	//itemId:'dashboardTab',
        title: 'Dashboard',
        iconCls: 'fa-home',
        items: [{
            xtype: 'dashboard'
        }]
        
//        bind: {
//            html: '{loremIpsum}'
//        }
//    }, {
//    	tabIndex: 1,
//    	itemId:'usersTab',
//        title: 'Usuarios',
//        iconCls: 'fa-user'
        // The following grid shares a store with the classic version's grid as well!
//        items: [{
//        	xtype: 'userslist'
//        }]
//    }, {
//    	//tabIndex: 2,
//    	//itemId:'groupsTab',
//        title: 'Grupos',
//        iconCls: 'fa-users',
//        bind: {
//            html: '{loremIpsum}'
//        }  
    }, {
    	//tabIndex: 3,
    	//itemId:'configTab',
        title: 'Configurar',
        iconCls: 'fa-cog',
        items: [{
        	xtype: 'configsdashboard'
        }]
    }] 
});
