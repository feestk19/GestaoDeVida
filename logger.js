//logger.js
const { createLogger, format, transports } = require('winston');
const path = require('path');

const logger = createLogger({
    level: 'info', // Define o nível mínimo de logs (info, warn, error)
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new transports.Console({ // Exibe logs no console
            format: format.combine(
                format.colorize(),
                format.simple()
            )
        }),
        new transports.File({ // Salva logs em um arquivo
            filename: path.join(__dirname, 'logs', 'app.log'),
            level: 'info'
        }),
        new transports.File({ // Salva erros em um arquivo separado
            filename: path.join(__dirname, 'logs', 'error.log'),
            level: 'error'
        })
    ],
    exitOnError: false, // Não encerra em caso de erro
});

module.exports = logger;