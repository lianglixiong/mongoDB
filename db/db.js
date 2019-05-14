
var mongoose = require('mongoose');
const options = {
    user: 'admin',
    pwd: '123456',
    host: 'localhost',
    port: '27017',
    database: 'hollywood',
    authSource: 'admin',
}
//const uri = `mongodb://${options.user}:${options.pwd}@${options.host}:${options.port}/${options.database}?authSource=${options.authSource}`
const DB_URL = 'mongodb://localhost:27017/config';

mongoose.Promise = global.Promise //需要

/**
 * 连接
 */
mongoose.connect(DB_URL);

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ' + DB_URL);  
});    

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    
 
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
});


module.exports = mongoose;