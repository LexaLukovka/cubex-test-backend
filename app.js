const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const passport = require('passport')
const people = require('./people')

const FisrstPeopleController = require('./app/Controllers/FisrstPeopleController')

const authRoutes = require('./routes/auth')
const peopleRoutes = require('./routes/people')
const uploadRoutes = require('./routes/upload')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(cors())
app.use(fileUpload())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/uploads', express.static('uploads'))
app.use(morgan('dev'))
app.use(passport.initialize())

app.use('/', authRoutes)
app.use('/', peopleRoutes)
app.use('/', uploadRoutes)


app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
});

(function() {FisrstPeopleController.store(people)}())

module.exports = app
