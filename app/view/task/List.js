Ext.define('DemoApp.view.task.List', {
    extend  : 'Ext.List',
    xtype   : 'tasklist',
    
    config: {
        store   : 'Tasks',
        itemTpl : '{description}',
        title   : 'Tasks'
    }
});