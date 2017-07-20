const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID}= require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
// var user = {name: 'Wilfredo', age: 33};
// var {name} = user;

// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
	if(error){
		console.log('Unable to connnect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (error, result)=>{
	// 	if(error){
	// 		return console.log('Unable to insert todo', error);
	// 	}
	// 	console.log (JSON.stringify(result.ops, undefined, 2));
	// })

	db.collection('Users').insertOne({
		name: 'Wilfredo',
		age: 33,
		location: 'Nicaragua'
	}, (error, result)=>{
		if(error){
			return console.log ('Unable to insert user', error);
		}
		console.log(result.ops[0]._id.getTimestamp())
	});
	db.close();
});
