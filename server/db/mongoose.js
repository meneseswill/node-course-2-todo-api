var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var port= process.env.PORT;
var host = host= 'mongodb://meneboni:Rojo2010.*@ds053788.mlab.com:53788/todoappmeneboni';

if (!port){
	port = 3000;
	host = 'mongodb://localhost:27017/TodoApp';
}

mongoose.connect( host );

module.exports = {
	mongoose,
	port
}
