require('dotenv').config();

module.exports = {
  development: {
    username: 'tutorial_user',
    password: process.env.MYSQL_PASSWORD,
    database: 'blog',
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
  },
  production: {
    username: 'tutorial_user',
    password: process.env.MYSQL_PASSWORD,
    database: 'blog',
    host: 'https://port-0-server-p8xrq2mlfsc6kg2.sel3.cloudtype.app/',
    dialect: 'mysql',
  },
};
