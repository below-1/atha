/**
 * Main Application Routes.
 * This routes are scoped by `userId`
 */

const siswaConverter = require('../../converters/siswa')

module.exports = async (fastify, options) => {

  const groupSiswaRepo = fastify.repository.groupSiswa
  const siswaRepo = fastify.repository.siswa
  const gsService = fastify.services.groupSiswa
  const gsListener = fastify.groupListener

  fastify.route({
    method: 'POST',
    url: '/group-siswa',
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            result: { type: 'number' }
          }
        }
      },

      querystring: {
        userId: { type: 'number' }
      }
    },
    handler: async (request, reply) => {
      let gs = request.body
      const statWeights = { weights: [ 0.5, 0.2, 0.15, 0.1, 0.05 ] }
      const weightString = JSON.stringify(statWeights)
      let gsWithId = { ...gs, user_id: request.query.userId, properties: weightString }
      let result = await groupSiswaRepo.add(gsWithId)
      let id = result[0]

      reply.send({
        result: result[0]
      })
    }
  })

  fastify.route({
    method: 'GET',
    url: '/group-siswa',
    schema: {
      querystring: {
        userId: { type: 'number' }
      },
      response: {
        200: {
          type: 'array',
          items: 'groupSiswaEntity#'
        }
      }
    },
    handler: async (request, reply) => {
      let list = await gsService.findByUser(request.query.userId)
      reply.send(list)
    }
  })

  fastify.route({
    method: 'DELETE',
    url: '/group-siswa',
    schema: {
      querystring: {
        groupId: { type: 'number' }
      }
    },
    handler: async (request, reply) => {
      let id = request.query.groupId
      await groupSiswaRepo.delete(id)
      reply.send('ok')
    }
  })

  fastify.route({
    method: 'PUT',
    url: '/group-siswa',
    schema: {
      querystring: {
        groupId: { type: 'number' }
      }
    },
    handler: async (request, reply) => {
      let id = request.query.groupId

      let payload = request.body
      // Remove id from the payload
      delete payload.id

      await groupSiswaRepo.update(id, request.body)
      reply.send('OK')
    }
  })

  fastify.route({
    method:'POST',
    url: '/group-siswa/members',
    schema: {
      querystring: {
        groupId: { type: 'number' }
      },
      body: 'siswa#',
      response: {
        200: {
          type: 'object',
          properties: {
            result: { type: 'number' }
          }
        }
      }
    },
    handler: async (request, reply) => {
      let groupId = request.query.groupId
      let member = request.body

      // Convert from fastify schema to db schema
      member = siswaConverter.fastifyToDb(member)

      let result = await gsService.addMember(groupId, member)
      reply.send({ result: result[0] })
    }
  })

  fastify.route({
    method: 'PUT',
    url: '/group-siswa/members',
    schema: {
      querystring: {
        id: { type: 'number' }
      },
      body: 'siswa#'
    },
    handler: async (request, reply) => {
      let id = request.query.id
      let member = request.body
      let payload = siswaConverter.fastifyToDb(member)
      await gsService.updateMember(id, payload)

      reply.send('OK')
    }
  })

  fastify.route({
    method: 'GET',
    url: '/group-siswa/members',
    schema: {
      querystring: {
        groupId: { type: 'number' }
      },
      response: {
        200: {
          type: 'array',
          items: 'siswaEntity#'
        }
      }
    },
    handler: async (request, reply) => {
      let groupId = request.query.groupId
      let result = await gsService.findMembers(groupId)
      result = result.map(siswaConverter.dbToFastify)
      reply.send( result )
    }
  })

  fastify.route({
    method: 'DELETE',
    url: '/group-siswa/members',
    schema: {
      querystring: {
        id: { type: 'number' }
      }
    },
    handler: async (request, reply) => {
      let id = request.query.id
      await siswaRepo.delete(id)
      // gsListener.memberChange(groupId)
      reply.send('OK')
    }
  })

}
