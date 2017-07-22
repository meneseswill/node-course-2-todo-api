var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var db = {
	localhost:'mongodb://localhost:27017/TodoApp',
	mlab: 'mongodb://meneboni:Rojo2010.*@ds053788.mlab.com:53788/todoappmeneboni'
}
mongoose.connect(db.localhost || db.mlab);

module.exports = {
	mongoose
}
