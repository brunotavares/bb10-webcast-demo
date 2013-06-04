Ext.define('DemoApp.view.Menu',{
    extend  : 'Ext.ActionSheet',
    xtype   : 'mainmenu',
    config  : {
        hideOnMaskTap: true,
        items: [{
            ui: 'confirm',
            text: 'New Task'
        },{
            ui: 'decline',
            text: 'Delete Selected'
        },{
            text: 'Send List via Email'
        }]
    },
    
    platformConfig: [{
        theme: ['Blackberry'],
        enter: 'left',
        exit: 'left',
        left: 0
    }]
});