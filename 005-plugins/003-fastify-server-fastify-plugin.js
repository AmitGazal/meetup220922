import fastify from 'fastify'
import { controller as privateController } from './private-controller.js'
import { controller as publicController } from './public-controller.js'
import { loggingPlugin } from './003-looging-plugin-fastify-plugin.js'

const app = fastify({logger: true})

app.register(privateController, {prefix: '/private'})
app.register(publicController, {prefix: '/public'})
app.register(loggingPlugin)

await app.listen({port: 3000, host: '0.0.0.0'})
