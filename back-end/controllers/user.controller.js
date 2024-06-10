const httpStatus = require('http-status')
const responseHandler = require('../middlewares/response-handler')
const { findAll, create } = require('../services/user.service')

const createUser = async (req, res) => {
  const { name, city } = req.body;
  const imageBuffer = req.file.buffer;

  const userDetails = await create(name, city, imageBuffer);

  res.status(httpStatus.CREATED).send(responseHandler(userDetails));
}

const getUsers = async (req, res) => {
  const offset = req.query.offset ? parseInt(req.query.offset, 10) : 0
  const limit = req.query.limit ? parseInt(req.query.limit, 10) : 30

  const users = await findAll(offset, limit)

  res.status(httpStatus.OK).send(responseHandler(users))
}

module.exports = {
  createUser,
  getUsers,
}