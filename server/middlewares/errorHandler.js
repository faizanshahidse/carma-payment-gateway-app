const AppError = require('../utils/appError');

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err?.details || err?.errors).map(
    (el) => el.message,
  );
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  if (
    err.name === 'ValidationError' ||
    err.name === 'SequelizeUniqueConstraintError' ||
    err.name === 'SequelizeValidationError'
  ) {
    err = handleValidationErrorDB(err);
  }

  res.json({
    status: 'fail',
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    optional: err.optional,
  });
  next();
};

module.exports = errorHandler;
