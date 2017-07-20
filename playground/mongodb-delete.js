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

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	// DeleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	// FindOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
	// 	console.log(result);
	// });

	// db.close();

	// db.collection('Users').deleteMany({name: 'Wilfredo'});
	// db.collection('Users').findOneAndDelete({
	// 	_id: new ObjectID('5970a977ec42c602b0244f9b')
	// }).then((result)=>{
	// 	console.log(JSON.stringify(result, undefined, 2));
	// });
});
