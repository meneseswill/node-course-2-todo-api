const {MongoClient, ObjectID} = require('mongodb');
// var ObjectId = require('mongodb').ObjectID;
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

	// db.collection('Todos').find({
	// 	_id: new ObjectId("5970aa2f9a3a5cded9640ce6")
	// }).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err)=>{
	// 	console.log('Unable to fetch todos', err);
	// });


	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log(`Todos count ${count}`);
	// }, (err)=>{
	// 	console.log('Unable to fetch todos', err);
	// });

	// db.collection('Users').find({name: 'Wilfredo'}).count().then((count)=>{
	// 	console.log(`Todos by Wilfredo: ${count}`);
	// }, (err)=>{
	// 	console.log('Unable to fetch todos ', err);
	// });

	db.collection('Users').find({name: 'Wilfredo'}).toArray().then((docs)=>{
		// console.log(`Todos by Wilfredo: ${count}`);
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err)=>{
		console.log('Unable to fetch todos ', err);
	});

	// db.close();
});
