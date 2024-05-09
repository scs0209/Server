require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'blog',
    host: '127.0.0.1',
    port: '3307',
    dialect: 'mariadb',
  },
  production: {
    username: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'blog',
    host: 'svc.sel3.cloudtype.app',
    dialect: 'mariadb',
  },
};
