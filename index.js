const express = require('express')
const morgan = require('morgan')
const app = express()

const router = express.Router()

// app.get('/rotulo', function (req, res) {
//   res.send('hello world')
// })
app.use(express.static('public/clement'))
app.use(express.static('public/antoine'))

app.get('/clement', (req, res) =>
  res.sendFile(__dirname + '/public/clement/index.html')
)

app.get('/antoine', (req, res) =>
  res.sendFile(__dirname + '/public/antoine/index.html')
)

// app.get('/newSite', (req, res) =>
//   res.sendFile(__dirname + '/public/index.html')
// )

app.use(morgan('combined'))
//
app.listen(3000)
