var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://meneboni:Rojo2010.*@ds053788.mlab.com:53788/todoappmeneboni');

module.exports = {
	mongoose
}
