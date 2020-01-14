const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')

const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop')

const app = express()
const port = 8000

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRouter)

app.use('/', function (req, res) {
  res.status(404).render('404', { pageTitle: 'Page Not Found' })
})

app.listen(port)