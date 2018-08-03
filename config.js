

// set the enviroment object
var enviroment = {}

enviroment.staging = {
    port: '1234',
    envName: 'staging'
}

enviroment.zada = {
    port: '3000',
    envName: 'production'
}


var currentMode = typeof (process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

var env = typeof (enviroment[currentMode]) != 'undefined' ? enviroment[currentMode] : enviroment.staging;


module.exports = env;