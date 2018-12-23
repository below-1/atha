const fp = require('fastify-plugin')
const repository = require('./repository')

module.exports = async (fastify, options) => {
  const knex = fastify.knex

  fastify.decorate('repository', {
    user: repository(knex, 'app_user'),
    groupSiswa: repository(knex, 'group_siswa'),
    siswa: repository(knex, 'siswa')
  })

}
