import { Sequelize } from 'sequelize';

import config from './config.json';

const env = process.env.NODE_ENV || 'development';

const conn = config[env];

const sequelize = new Sequelize(conn.databse, conn.username, conn.password, {
  host: conn.host,
  dialect: conn.dialect,
});

export default sequelize;
