const siswaConverter = require('../converters/siswa')

module.exports = async (fastify, options) => {

  const gsService = fastify.services.groupSiswa
  const groupRepo = fastify.repository.groupSiswa
  const smart = fastify.smart

  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      querystring: {
        groupId: { type: 'number' }
      }
    },
    handler: async (request, reply) => {
      let groupId = request.query.groupId
      let result = await gsService.findMembers(groupId)
      result = result.map(siswaConverter.dbToFastify)

      let group = await groupRepo.getById(groupId)
      let weights = JSON.parse(group[0].properties).weights

      let smResult = smart(result, weights)

      reply.send(smResult)
    }
  })
  
};