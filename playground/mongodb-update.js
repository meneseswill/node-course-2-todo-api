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

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5970c5299a3a5cded9641276')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5970d4569a3a5cded9641501')
	}, {
		$set: {
			name: 'Wilfredo'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result)=>{
		console.log(result);
	});
	// db.close();
});
