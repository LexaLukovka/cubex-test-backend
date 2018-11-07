module.exports = class People {
  get rules() {
    return {
      firstName: 'required',
      lastName: 'required',
      email: 'required|email|email_exists',
      phone: 'required',
      title: 'required',
      company: 'required',
    }
  }

  get messages() {
    return {
      'email.email_exists': 'Пользователь с такой почтой на найден',
      'email.required': 'Введите email пожалуйста',
      'email.email': 'Неправильный email',
      'firstName.required': 'Введите firstName пожалуйста',
      'lastName.required': 'Введите lastName пожалуйста',
      'phone.required': 'Введите phone пожалуйста',
      'title.required': 'Введите title пожалуйста',
      'company.required': 'Введите company пожалуйста',
    }
  }
}
