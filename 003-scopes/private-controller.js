export async function controller (app, opts) {
    app.get('/', (req, res) => ({hello: 'world'}))
}
