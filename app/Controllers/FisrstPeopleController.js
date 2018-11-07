const People = require('../Models/People')

class FirstPeopleController {
  async store(request, response) {
    request.body.people && await request.body.people.forEach(async (person) => {
      const newPeople = new People({
        firstName: person.general.firstName,
        lastName: person.general.lastName,
        email: person.contact.email,
        avatar: person.general.avatar || null,
        phone: person.contact.phone,
        title: person.job.title,
        company: person.job.company,
      })

      await newPeople.save()
    })

    return response.json('First people created')
  }
}

module.exports = new FirstPeopleController()
