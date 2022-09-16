import fastify from 'fastify'

const app = fastify({logger: true})

app.get('/', (req, res) => ({hello: 'world'}))
app.post('/', (req, res) => ({hello: 'world'}))
app.put('/', (req, res) => ({hello: 'world'}))
app.post('/', (req, res) => ({hello: 'world'}))
app.delete('/', (req, res) => ({hello: 'world'}))
app.get('/public/', (req, res) => ({hello: 'world'}))
app.delete('/public/', (req, res) => ({hello: 'world'}))

await app.listen({port: 3000, host: '0.0.0.0'})
