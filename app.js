require('dotenv').config();
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var morgan = require('morgan')
const cors = require('cors');
const usersRoute = require('./routes');
const port = process.env.PORT
const fs = require('fs')

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
const accessLogStream = fs.createWriteStream(__dirname + '/http.log', {flags: 'a'})
app.use(morgan('combined', {"stream": accessLogStream}))

app.use('/api',usersRoute)
const server = app

server.listen(port, () => {
  console.log(`listen on port ${port}`)
})

module.exports = app