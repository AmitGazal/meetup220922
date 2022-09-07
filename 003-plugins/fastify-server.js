import fastify from 'fastify'
import { controller } from './logging-plugin.js'

const app = fastify({logger: true})
app.register(controller)
await app.listen({port: 3001, host: '0.0.0.0'})