import fastify from 'fastify'

const app = fastify()

app.get('/', (req, res) => ({hello: 'world'}))

await app.listen({port: 3000, host: '0.0.0.0'})
