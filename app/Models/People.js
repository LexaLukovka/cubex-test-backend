const mongoose = require('mongoose')
const db = require('../../database/connect')
const Schema = mongoose.Schema

const PeopleSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('People', PeopleSchema)
