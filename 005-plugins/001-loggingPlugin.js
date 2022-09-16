// 001-loggingPlugin.js
export async function loggingPlugin (app, opts) {
    app.addHook('onRequest', (request, reply) => {
        request.startTime = Date.now()
    })
    app.addHook('onResponse', (request, reply) => {
        app.log.info({
            duration: Date.now() - request.startTime,
            status: reply.status},
            'request-handled')
    })
}
