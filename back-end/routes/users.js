const express = require('express')
const multer = require('multer')
const { Validator } = require('express-json-validator-middleware')

const { createUser, getUsers } = require('../controllers/user.controller')
const { addUserSchema } = require('../validations/users-request.schema')
const upload = require('../middlewares/file-uploader')

const router = express.Router()
const { validate } = new Validator()

router
  .route('/')
  .post(upload.single('image'), validate(addUserSchema), createUser)
  .get(getUsers)

module.exports = router