Ext.define('DemoApp.store.Tasks', {
    extend: 'Ext.data.Store',
    config: {
        model   : 'DemoApp.model.Task',
        data    : [{
            id: 1,
            description: 'Create app with Cmd'
        },{
            id: 2,
            description: 'Develop & Theme app'
        },{
            id: 3,
            description: 'Create BB10 theme & profile'
        },{
            id: 4,
            description: 'Build for production with Cmd'
        }]
    }
});