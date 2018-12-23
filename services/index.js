module.exports = require('fastify-plugin')(async (fastify, options) => {

  await require('./knex')(fastify, options)
  await require('./repository-plugins')(fastify, options)

  const knex = fastify.knex

  fastify.decorate('services', {
    auth: require('./auth')(knex),
    groupSiswa: require('./gsService')(knex)
  })
  fastify.decorate('smart', require('./smart'))

  await require('./group-listener')(fastify, options)

})