const express = require('express')
const cors = require('cors')
const routes = require('./routes')
require('./bootstrap')
require('./database')

class App {
  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    
    this.server.use(
      cors({
        origin: '*',
      })
    )
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

module.exports = new App().server