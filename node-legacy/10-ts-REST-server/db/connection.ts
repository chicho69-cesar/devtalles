import { Sequelize } from 'sequelize';

const db = new Sequelize('ts-server', 'root', '123456-78a', {
  host: 'localhost',
  dialect: 'mariadb',
  port: 33066,
});

export default db;
