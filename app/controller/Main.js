Ext.define('DemoApp.controller.Main',{
    extend: 'Ext.app.Controller',
    config: {
        control: {
            'mainview #btn-more': {
                tap: 'onBtnMoreTap'
            },
            
            'mainmenu button': {
                tap: 'hideMenu'
            }
        }
    },
    
    onBtnMoreTap: function(btn) {
        var mainMenu = Ext.Viewport.child('mainmenu');
        
        if (!mainMenu) {
            mainMenu = Ext.Viewport.add({
                xtype: 'mainmenu'
            });
        }
        
        mainMenu.show();
    },
    
    hideMenu: function(btn) {
        btn.up('mainmenu').hide();
    }
});