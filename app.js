require('dotenv').config();
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRoute = require('./routes');
const port = process.env.PORT

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api',usersRoute)
const server = app

server.listen(port, () => {
  console.log(`listen on port ${port}`)
})

module.exports = app