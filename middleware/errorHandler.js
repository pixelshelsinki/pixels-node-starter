const {
  ValidationError,
  NotFoundError
} = require('objection')

const {
  DBError,
  ConstraintViolationError,
  UniqueViolationError,
  NotNullViolationError,
  ForeignKeyViolationError,
  CheckViolationError,
  DataError
} = require('objection-db-errors')


/**
 * Main erro handler
 */
const errorHandler = (err, req, res, next) => {
  console.log('here!')
  if (err instanceof ValidationError) {
    switch (err.type) {
      case 'ModelValidation':
        res.status(400).json({
          message: err.message,
          type: err.type,
        });
        break;
      case 'RelationExpression':
        res.status(400).json({
          message: err.message,
          type: 'RelationExpression',
        });
        break;
      case 'UnallowedRelation':
        res.status(400).json({
          message: err.message,
          type: err.type,
        });
        break;
      case 'InvalidGraph':
        res.status(400).json({
          message: err.message,
          type: err.type,
        });
        break;
      default:
        res.status(400).json({
          message: err.message,
          type: 'UnknownValidationError',
        });
        break;
    }
  } else if (err instanceof NotFoundError) {
    res.status(404).json({
      message: err.message,
      type: 'NotFound',
    });
  } else if (err instanceof UniqueViolationError) {
    res.status(409).json({
      message: err.message,
      type: 'UniqueViolation',
    });
  } else if (err instanceof NotNullViolationError) {
    res.status(400).json({
      message: err.message,
      type: 'NotNullViolation',
    });
  } else if (err instanceof ForeignKeyViolationError) {
    res.status(409).json({
      message: err.message,
      type: 'ForeignKeyViolation',
    });
  } else if (err instanceof CheckViolationError) {
    res.status(400).json({
      message: err.message,
      type: 'CheckViolation',
    });
  } else if (err instanceof DataError) {
    res.status(400).json({
      message: err.message,
      type: 'InvalidData',
    });
  } else if (err instanceof DBError) {
    res.status(500).json({
      message: err.message,
      type: 'UnknownDatabaseError',
    });
  } else {
    res.status(500).json({
      message: err.message,
      type: 'UnknownError',
    });
  }
}

/**
 * Catch-all-handler if we miss main error handler
 * Should only happen if we accidentally break the main handler
 */
const missedErrorHandler = (err, req, res, next) => {
  if (err) {
    res.status(err.statusCode || err.status || 500).send(err.data || err.message || {})
  } else {
    next()
  }
}

module.exports = {
  errorHandler,
  missedErrorHandler
}
