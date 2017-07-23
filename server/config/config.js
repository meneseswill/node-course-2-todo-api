var env = process.env.NODE_ENV || 'development';

//heroku config:set MONGODB_URI=mongodb://meneboni:Rojo2010.*@ds053788.mlab.com:53788/todoappmeneboni

console.log('env =========', env);

if(env === 'development'){
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}else if(env === 'test'){
	process.env.PORT = 3000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
}
