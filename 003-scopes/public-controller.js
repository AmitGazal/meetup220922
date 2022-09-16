// public-controller.js
export async function controller (app, opts) {
    app.get('/', (req, res) => ({hello: 'public world'}))
}
