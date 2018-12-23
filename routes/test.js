module.exports = async (fastify, options) => {

  fastify.get('/test', async (request, reply) => {
    return { kiss: 'My Ass' }
  });

};