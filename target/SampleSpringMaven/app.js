Ext.require(['Ext.data.*', 'Ext.grid.*']);
Ext.onReady(function(){
	
Ext.define('Person', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, 'email', 'name', 'age']
   
});
//var data = [{
//					"id": "1",
//					"name": "Bob",
//                                        "age": "23",
//                                        "email" : "bob@somedomain.com"
//					}, {
//					"id": "2",
//					"name": "Suzy",
//					"age" : "32",
//                                        "email": "suzy@somedomain.com"
//					}, {
//					"id": "3",
//					"name": "Mike",
//					"age" : "22",
//                                        "email": "mike@somedomain.com"
//					}, {
//					"id": "4",
//					"name": "Tom",
//					"age" : "33",
//                                        "email": "tom@somedomain.com"
//					}, {
//					"id": "5",
//					"name": "Peter",
//					"age" : "42",
//                                        "email": "peter@somedomain.com"
//					}];
			
Ext.onReady(function(){

    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        autoSync: true,
        model: 'Person',
       proxy: {
    	type: 'ajax',
    	url: 'http://localhost:8080/SampleSpringMaven/studentlist.json',
    	reader: {
    	   type: 'json'
    	   }
       
    	}
    
        
    });
    
   var grid = Ext.create('Ext.grid.Panel', {
        renderTo: document.body,
        width: 400,
        height: 300,
        frame: true,
        title: 'Students',
        store: store,
        columns: [
        {
            text: 'ID',
            width: 40,
            sortable: true,
            dataIndex: 'id'
        }, 
        {
            text: 'Name',
            flex: 1,
            sortable: true,
            dataIndex: 'firstName'
        }, 
        {
            text: 'Email',
            width: 80,
            sortable: true,
            dataIndex: 'email',
            renderer: function(value) {
        		return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
        	}
        }, 
        {
            text: 'Phone no.',
            width: 80,
            sortable: true,
            dataIndex: 'phone'
           
        
        }]
    });
    
});
  });