import createError from 'http-errors';
import express from 'express';
import path from 'path';
import logger from 'morgan';

import sequelize from './config/db';
import indexRouter from './routes/index';
import errorHandler from './middlewares/errorHandler';
// import dotenv from 'dotenv';

// console.log('dirname,,,,,,', `${__dirname}`);

// dotenv.config({ path: `${__dirname}` });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/*.........Test connection..............*/
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler middleware
app.use(errorHandler);

export default app;
