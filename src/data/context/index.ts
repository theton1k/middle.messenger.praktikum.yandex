export type TAuthInput = {
  label: string;
  inputName: string;
  type?: string;
};

type TAuthButton = {
  type: string;
  text: string;
  id?: string;
  buttonStyle?: string;
};

type THeaderText = string;

export type TAuthContext = {
  inputs: TAuthInput[];
  buttons: TAuthButton[];
  headerText: THeaderText;
};

export type TErrorContext = {
  errorCode: number;
  description: string;
};

export type TGlobalContext = TErrorContext | TAuthContext;

const login: TAuthContext = {
  inputs: [
    { label: 'Логин', inputName: 'login' },
    { label: 'Пароль', inputName: 'password', type: 'password' },
  ],
  buttons: [
    { type: 'button', text: 'Войти', id: 'loginBtn' },
    {
      type: 'button',
      text: 'Нет аккаунта?',
      id: 'navToSignUpBtn',
      buttonStyle: 'clear',
    },
  ],
  headerText: 'Вход',
};

const signUp: TAuthContext = {
  inputs: [
    { label: 'Почта', inputName: 'email', type: 'email' },
    { label: 'Логин', inputName: 'login', type: 'login' },
    { label: 'Имя', inputName: 'first_name' },
    { label: 'Фамилия', inputName: 'second_name' },
    { label: 'Телефон', inputName: 'phone', type: 'tel' },
    { label: 'Пароль', inputName: 'password', type: 'password' },
  ],
  buttons: [
    { type: 'button', text: ' Зарегистрироваться', id: 'signUpBtn' },
    {
      type: 'button',
      text: 'Войти',
      id: 'navToLoginBtn',
      buttonStyle: 'clear',
    },
  ],
  headerText: 'Регистрация',
};

const notFound: TErrorContext = {
  errorCode: 404,
  description: 'Не туда попали',
};

const serverError: TErrorContext = {
  errorCode: 500,
  description: 'Мы уже фиксим',
};

export default { signUp, login, notFound, serverError };
