const People = require('../Models/People')
const PeopleValidator = require('../Validators/People')
const { validate } = require('../Validators/Validator')

class PeopleController {
  async index(request, response) {}

  async store(request, response) {
    const [err, data] = await validate(request.body, PeopleValidator)
    if (err) return response.status(401).json(err)

    console.log(data)

    const newPeople = new People({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      avatar: data.avatar || null,
      phone: data.phone,
      title: data.title,
      company: data.company,
    })

    await newPeople.save()

    return response.json(`${data.firstName} ${data.lastName} created`)
  }
}

module.exports = new PeopleController()
