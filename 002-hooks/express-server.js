import express from 'express'

const app = express()

app.use((req, res, next) => {
    const start = Date.now()
    res.on('finish', () => {            
        console.log('request-handled', {
            duration: Date.now() - start,
            status: res.statusCode},
            )
    })
    next()
})

app.get('/', (req, res) => {
    res.send({hello: 'world'})
})
app.get('/hook', (req, res) => {
    res.send({hello: 'world'})
})

await app.listen(3000)