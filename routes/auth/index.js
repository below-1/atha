module.exports = async (fastify, options) => {

  const userRepo = fastify.repository.user
  const auth = fastify.services.auth

  fastify.route({
    method: 'POST',
    url: '/login',
    schema: {
      body: {
        type: 'object',
        username: { type: 'string' },
        password: { type: 'string' }
      }
    },
    handler: async (request, reply) => {
      let user = request.body
      let userData = await auth.findUser(user)
      reply.setCookie('athaUser', {
        username: userData.username,
        userid: userData.id
      })
      reply.send('OK')
    }
  })

  fastify.route({
    method: 'GET',
    url: '/logout',
    handler: async (request, reply) => {
      let options = {
        expires: new Date(1)
      }
      reply.setCookie('athaUser', null, options)
      reply.send('OK')
    }
  })

};