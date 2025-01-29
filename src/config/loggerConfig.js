const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} : ${level} : ${message}`;
  });

  const Logger = createLogger({
    format: combine(
      timestamp({ formate: 'YYYY-MM-DD HH:mm:ss'}),
      customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log'})
    ]
  });

module.exports = Logger;