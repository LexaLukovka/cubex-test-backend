const People = require('../Models/People')

class FirstPeopleController {
  async store(people) {
    const peopleBd = await People.find()

    peopleBd.length === 0 && await people.forEach(async (person) => {
      const newPeople = new People({
        firstName: person.general.firstName,
        lastName: person.general.lastName,
        email: person.contact.email,
        avatar: [person.general.avatar] || null,
        phone: person.contact.phone,
        title: person.job.title,
        company: person.job.company,
      })

      await newPeople.save()
    })

    peopleBd.length === 0 && console.log('First people created')

    return
  }
}

module.exports = new FirstPeopleController()
