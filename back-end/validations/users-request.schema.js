const addUserSchema = {
  body: {
    type      : 'object',
    properties: {
      name: { type: 'string' },
      city: { type: 'string' },
    },
    required  : ['name', 'city'],
  },
}

module.exports = {
  addUserSchema,
}