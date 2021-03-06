const {format, createLogger, transports} = require('winston');
const {timestamp, combine, colorize, errors, printf } = format;



const logFormat = printf(({level, message, timestamp, stack})=>{
    return `${timestamp} ${level}: ${stack || message }`;
})

const buildProdLogger = createLogger({
    format: combine(
        colorize(),
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        errors({stack: true}),
        logFormat
    ),
    defaultMeta : { service: 'user-service' },
    transports: [ new transports.Console() ],
});


module.exports = buildProdLogger;