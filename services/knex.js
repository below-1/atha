const fp = require('fastify-plugin')

module.exports = fp(async (fastify, options) => {
  const db = require('../conf').db

  console.log(db)
  const knex = require('knex')(db)
  fastify.decorate('knex', knex)
})