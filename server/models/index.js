import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
import config from '../config/config.json';
const basename = path.basename(__filename);

const db = {};
const conn = config[env];

console.log(conn);

const sequelize = new Sequelize(conn.databse, conn.username, conn.password, {
  host: conn.host,
  dialect: conn.dialect,
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const modelPath = path.join(__dirname, file);
    const model = require(path.join(__dirname, file));
    const splitting = modelPath.split('\\');
    const modelName = splitting[splitting.length - 1].split('.')[0];
    db[modelName] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
