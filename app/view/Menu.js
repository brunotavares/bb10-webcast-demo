Ext.define('DemoApp.view.Menu',{
    extend  : 'Ext.ActionSheet',
    xtype   : 'mainmenu',
    config  : {
        hideOnMaskTap: true,
        items: [{
            ui: 'confirm',
            text: 'New Task',
            iconCls: 'ico-compose'
        },{
            ui: 'decline',
            text: 'Delete Selected',
            iconCls: 'ico-trash'
        },{
            text: 'Send List via Email',
            iconCls: 'ico-email'
        }]
    },
    
    platformConfig: [{
        theme: ['Blackberry'],
        enter: 'left',
        exit: 'left',
        left: 0
    }]
});