const loginContext = {
  inputs: [
    { label: 'Логин', inputID: 'login' },
    { label: 'Пароль', inputID: 'password',type: 'password' },
  ],
  buttons: [
    { type: 'button', text: 'Войти', id: 'loginBtn', },
    { type: 'button', text: 'Нет аккаунта?', id: 'navToSignUpBtn', buttonStyle: 'clear' }
  ],
  headerText: 'Вход',
}

const signUpContext = {
  inputs: [
    { label: 'Почта', inputID: 'email', type: 'email' },
    { label: 'Логин', inputID: 'login', type: 'login' },
    { label: 'Имя', inputID: 'first_name' },
    { label: 'Фамилия', inputID: 'second_name' },
    { label: 'Телефон', inputID: 'phone', type: 'tel' },
    { label: 'Пароль', inputID: 'password',type: 'password' },
  ],
  buttons: [
    { type: 'button', text:' Зарегистрироваться', id: 'signUpBtn', },
    { type: 'button', text: 'Войти', id: 'navToLoginBtn', buttonStyle: 'clear' }
  ],
  headerText: 'Регистрация',
}

export default {signUpContext, loginContext}
