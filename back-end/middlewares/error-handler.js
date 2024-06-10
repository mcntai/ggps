const httpStatus = require('http-status')
const { ValidationError } = require('express-json-validator-middleware')

const { APIError } = require('../utils/api-error')

module.exports = async (err, req, res,) => {
  let { status } = err

  let error = {}
  let msg

  console.error(`${err.name}: ${err.message}`)

  if (err instanceof APIError) {
    msg = err.message
  } else if (err instanceof ValidationError) {
    status = httpStatus.BAD_REQUEST
    msg = httpStatus[httpStatus.BAD_REQUEST]
    error = err.validationErrors
  } else {
    status = httpStatus.INTERNAL_SERVER_ERROR
    msg = 'Something Went Wrong'
    error = err
  }

  return res.status(status).send({
    success: false,
    msg,
    error,
  })
}