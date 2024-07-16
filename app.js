//What is the express JS?
//MVC(mode view controller) framework which is build on node js
//advantages:Security,Scalable
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/home.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname+'/about.html')
})

app.get('/cake', (req, res) => {
  res.sendFile(__dirname+'/cake.html')
})

app.get('/home', (req, res) => {
    res.send('Hello home')
  })

  app.get('/about', (req, res) => {
    res.send('Hello about')
  })

  app.get('/cake', (req, res) => {
    res.send('Hello cake')
  })

  app.get('/cake/surat', (req, res) => {
    res.send('Hello surat cake')
  })

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})


