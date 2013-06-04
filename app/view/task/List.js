Ext.define('DemoApp.view.task.List', {
    extend  : 'Ext.List',
    xtype   : 'tasklist',
    
    config: {
        cls     : 'tasklist',
        store   : 'Tasks',
        itemTpl : '{description}',
        title   : 'Tasks'
    }
});