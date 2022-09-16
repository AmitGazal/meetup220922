export async function controller (app, opts) {
    app.get('/', (req, res) => ({hello: 'public world'}))

    app.addHook('onRequest', async (request, reply) => {
        request.startTime = Date.now()
    })
    app.addHook('onResponse', async (request, reply) => {
        app.log.info({
            duration: Date.now() - request.startTime,
            status: reply.status},
            'request-handled')
    })
}
