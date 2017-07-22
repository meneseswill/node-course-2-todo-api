var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds053788.mlab.com:53788/todoappmeneboni' ||'mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose
}
