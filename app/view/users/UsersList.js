/**
 * 
 */
 Ext.define('SportLog.view.users.UsersList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userslist',
    
    controller: 'userslist',
    viewModel: {
        type: 'userslist'
    },

    requires: [
        'SportLog.view.users.UsersListController',
        'SportLog.view.users.UsersListModel',
        'Ext.util.Format'
    ],

    title: 'Usuarios registrados',
    collapsible: true,
    
    bind: '{usersListStore}',
    viewConfig: {
    	emptyText: 'No hay usuarios disponibles'
    },
    columns: [{
        xtype: 'actioncolumn',
        width: 50,
        items: [{
        	icon: '/SportLog/resources/images/icons/table_refresh.png',
            tooltip: 'Cambiar estado',
            handler: 'setUserStateValue'
        }, {
        	icon: '/SportLog/resources/images/icons/cog.png',
            tooltip: 'Hacer administrador',
            handler: 'setUserAdminValue'
        }]
    }, {
       	text: 'Ac', 
    	dataIndex: 'status', 
    	width: 40, 
    	align: 'center' 
    }, { 
    	text: 'Ad', 
    	dataIndex: 'admin', 
    	width: 40, 
    	align: 'center'
    }, { 
    	text: 'Fecha registro', 
    	dataIndex: 'created_at', 
    	width: 140,
    	renderer: Ext.util.Format.dateRenderer ('d-m-Y'),
    	align: 'center'//, style: 'text-align:left' //first for column, second for header title
    }, { 
    	text: 'Usuario',  
    	dataIndex: 'user_name', 
    	width: 150 
    }, { 
    	text: 'Nombre',  
    	dataIndex: 'first_name', 
    	width: 150 
    }, { 
    	text: 'Apellidos',  
    	dataIndex: 'second_name', 
    	flex: 1 
    }, { 
    	text: 'e-Mail', 
    	dataIndex: 'email', 
    	flex: 1 
    }]

/*    store: {
        type: 'userslist'
    },

    columns: [
        { text: 'Id', dataIndex: 'id' },
        { text: 'UserName',  dataIndex: 'userName' },
        { text: 'Nombre',  dataIndex: 'firstName' },
        { text: 'Apellidos',  dataIndex: 'secondName' },
        { text: 'Email', dataIndex: 'eMail', flex: 1 },
        { text: 'Status', dataIndex: 'status', flex: 1 },
        { text: 'Created at', dataIndex: 'createdAt', flex: 1 }
    ],

    listeners: {
        //select: 'onItemSelected'
    }*/
});