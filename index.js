const server = require ('.api/info')

const server = express()
const routes = require('./api/server')
const helmet = require('helmet')

server.use(helmet())
server.use(express.json())
server.use('/api', routes)

const port = 5000
server.listen(port,() => {
    console.log(`\nlistening to server port ${port}`)
})