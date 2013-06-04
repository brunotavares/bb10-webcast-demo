Ext.define('DemoApp.view.Main', {
    extend  : 'Ext.navigation.View',
    xtype   : 'mainview',
    config  : {
        navigationBar: {
            items: [{
                xtype   : 'button',
                itemId  : 'btn-more',
                iconCls : 'more'
            }]
        },
        items: [{
            xtype: 'tasklist'
        }]
    }
});