import fastify from 'fastify'
import { controller as publicController } from './public-controller.js'

const app = fastify({logger: true})

app.register(publicController, {})

await app.listen({port: 3000, host: '0.0.0.0'})
