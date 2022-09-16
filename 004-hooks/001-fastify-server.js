import fastify from 'fastify'
import { controller as privateController } from './private-controller.js'
import { controller as publicController } from './public-controller.js'

const app = fastify({logger: true})

app.register(privateController, {prefix: '/private'})
app.register(publicController, {prefix: '/public'})

app.addHook('onRequest', (request, reply, done) => {
    request.startTime = Date.now()
    done()
})
app.addHook('onResponse', (request, reply, done) => {
    app.log.info({
        duration: Date.now() - request.startTime,
        status: reply.status},
        'request-handled')
    done()
})

await app.listen({port: 3000, host: '0.0.0.0'})
