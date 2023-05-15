const express = require('express').Router()
const primaryServer = express()


//routes
const receivers = require('/receivers')
const products = require('receivers/products')
const senders = require('/senders')
const orders = require('products/orders')

server.use(express.json())

//Primary Routes

primaryServer.use('/receivers', receivers)
primaryServer.use('/products', products)
primaryServer.use('/senders', senders)
primaryServer.use()