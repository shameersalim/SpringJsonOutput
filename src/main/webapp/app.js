Ext.require(['Ext.data.*', 'Ext.grid.*']);
Ext.onReady(function(){
	
Ext.define('Person', {
    extend: 'Ext.data.Model',
    fields: [
             { name: 'id', type: 'int'}, 
             'firstName', 'lastName', 'email', 'phone']
   
});

			
Ext.onReady(function(){

    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        autoSync: true,
        model: 'Person',
       proxy: {
    	type: 'ajax',
    	url: 'http://localhost:8080/SpringJsonOutput/studentlist.json',
    	reader: {
    	   type: 'json'
    	   }
       
    	}
    
        
    });
    
   var grid = Ext.create('Ext.grid.Panel', {
        renderTo: document.body,
        width: 600,
        height: 300,
        frame: true,
        title: 'Students',
        store: store,
        columns: [
        {
            text: 'ID',
            width: 60,
            sortable: true,
            dataIndex: 'id'
        }, 
        {
            text: 'Name',
            flex: 1,
            sortable: true,
            dataIndex: 'firstName',
            renderer:function(value, meta, record) {
        	console.log(value, meta, record);
        	return Ext.String.format(record.data.lastName + "," + record.data.firstName);
        	}
        
        }, 
        {
            text: 'Email',
            flex: 1,
            
            sortable: true,
            dataIndex: 'email',
            renderer: function(value) {
        		return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
        	}
        }, 
        {
            text: 'Phone no.',
            flex: 1,
            sortable: true,
            dataIndex: 'phone',
           renderer:function(value, meta, record) {
        		return Ext.String.format("+1" +value);
        	}
        
        
        }]
    });
    
});
  });