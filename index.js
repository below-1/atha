const fastify = require('fastify')({ logger: true })
const helmet = require('fastify-helmet')
const fcookie = require('fastify-cookie')
const path = require('path')
const PORT = process.env.PORT || 5000

fastify
  .register(require('fastify-cors'), {
    origin: '*'
  })
  .register(helmet, {})
  .register(fcookie, (err) => {
    if (err) throw err
  })
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public')
})

fastify.register(require('./services'))
fastify.register(require('./schema/fastify'))

fastify.register(require('./routes/auth'), { prefix: 'auth' })
fastify.register(require('./routes/user'), { prefix: 'user' })
fastify.register(require('./routes/smart'), { prefix: 'smart' })

fastify.listen(3000, (err, address) => {
  if (err) {
    console.log(err)
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
