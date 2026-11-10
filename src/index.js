'use strict'
const express = require('express')
const app = express()
app.use(express.json())
app.get('/actuator/health', (_, res) => res.json({ status: 'UP' }))
app.get('/users', (_, res) => res.json({ status: 'ok' }))
app.post('/users', (_, res) => res.json({ status: 'ok' }))
app.get('/users/:id', (_, res) => res.json({ status: 'ok' }))
app.listen(process.env.PORT || 8104)
