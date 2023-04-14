const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('This is Assignment 9 of our AWS Lab')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
