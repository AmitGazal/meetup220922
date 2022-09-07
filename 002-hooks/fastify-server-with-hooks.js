import fastify from 'fastify'

const app = fastify({logger: true})
app.get('/', (req, res) => {
    res.send({hello: 'world'})
})
app.get('/hook/', (req, res) => {
    res.send({hello: 'world'})
})
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
await app.listen({port: 3001, host: '0.0.0.0'})




