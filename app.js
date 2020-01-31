// Global variable
global.__basedir = __dirname

const path = require('path')

const express = require('express')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const errorController = require('./controllers/error')
// A lot of logic is in this "app" constant
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use('/', errorController.get404)

app.listen(8000)