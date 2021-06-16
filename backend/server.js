var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

const app = express()

app.post('/images', upload.single('image'), (req, res) => {
  const file = req.file
  const description = req.body.description
  res.send('hello from the aws server')
})

app.listen(5000, () => console.log("listening on port 5000"))