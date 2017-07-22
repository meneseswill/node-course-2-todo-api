var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const Port= process.env.PORT;
var host = 'mongodb://localhost:27017/TodoApp';

if (port){
	host= 'mongodb://meneboni:Rojo2010.*@ds053788.mlab.com:53788/todoappmeneboni';
}

mongoose.connect( host );

module.exports = {
	mongoose,
	Port
}
