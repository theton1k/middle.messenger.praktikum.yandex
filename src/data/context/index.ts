const login = {
  inputs: [
    { label: 'Логин', inputName: 'login' },
    { label: 'Пароль', inputName: 'password',type: 'password' },
  ],
  buttons: [
    { type: 'button', text: 'Войти', id: 'loginBtn', },
    { type: 'button', text: 'Нет аккаунта?', id: 'navToSignUpBtn', buttonStyle: 'clear' }
  ],
  headerText: 'Вход',
}

const signUp = {
  inputs: [
    { label: 'Почта', inputName: 'email', type: 'email' },
    { label: 'Логин', inputName: 'login', type: 'login' },
    { label: 'Имя', inputName: 'first_name' },
    { label: 'Фамилия', inputName: 'second_name' },
    { label: 'Телефон', inputName: 'phone', type: 'tel' },
    { label: 'Пароль', inputName: 'password',type: 'password' },
  ],
  buttons: [
    { type: 'button', text:' Зарегистрироваться', id: 'signUpBtn', },
    { type: 'button', text: 'Войти', id: 'navToLoginBtn', buttonStyle: 'clear' }
  ],
  headerText: 'Регистрация',
}

const notFound = {
  errorCode: 404,
  description: 'Не туда попали',
}

const serverError = {
  errorCode: 500,
  description: 'Мы уже фиксим',
}

export default {signUp, login, notFound, serverError}
