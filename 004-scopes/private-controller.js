export function controller (app, opts, done) {
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
            status: reply.status,
            external: false},
            'request-handled')
        done()
    })
    done()
  }