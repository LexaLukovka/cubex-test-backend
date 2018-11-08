const People = require('../Models/People')
const PeopleValidator = require('../Validators/People')
const { validate } = require('../Validators/Validator')

class PeopleController {
  async index(request, response) {
    let people = await People.find()
    people = people.reverse()

    return response.json({ people })
  }

  async store(request, response) {
    const [err, data] = await validate(request.body, PeopleValidator)
    if (err) return response.status(401).json(err)

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

  async find(request, response) {
    const person = await People.findOne({ _id: request.params.id })

    return response.json({ person })
  }

  async destroy(request, response) {
    const data = request.params

    const person = await People.findOne({ _id: data.id })

    const name = `${person.firstName} ${person.lastName}`

    await person.delete()

    return response.json(`${name} deleted`)
  }
}

module.exports = new PeopleController()
