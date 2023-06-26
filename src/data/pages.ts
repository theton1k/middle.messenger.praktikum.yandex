import { ButtonThemes, ButtonTypes } from '../components/Button';
import { IAuthFormProps } from '../widgets/AuthForm';

type TErrorPageData = {
  errorCode: number;
  description: string;
};

const login: IAuthFormProps = {
  inputs: [
    { label: 'Логин', inputName: 'login' },
    { label: 'Пароль', inputName: 'password', type: 'password' },
  ],
  buttons: [
    {
      type: ButtonTypes.SUBMIT,
      label: 'Войти',
      theme: ButtonThemes.DEFAULT,
      events: { click: () => {} },
    },
    {
      type: ButtonTypes.BUTTON,
      label: ' Зарегистрироваться',
      theme: ButtonThemes.OUTLINE,
      events: { click: () => {} },
    },
  ],
  header: 'Вход',
};

const signUp: IAuthFormProps = {
  inputs: [
    { label: 'Почта', inputName: 'email', type: 'email' },
    { label: 'Логин', inputName: 'login' },
    { label: 'Имя', inputName: 'first_name' },
    { label: 'Фамилия', inputName: 'second_name' },
    { label: 'Телефон', inputName: 'phone', type: 'tel' },
    { label: 'Пароль', inputName: 'password', type: 'password' },
  ],
  buttons: [
    {
      type: ButtonTypes.SUBMIT,
      label: 'Зарегистрироваться',
      theme: ButtonThemes.DEFAULT,
      events: { click: () => {} },
    },
    {
      type: ButtonTypes.BUTTON,
      label: ' Войти',
      theme: ButtonThemes.OUTLINE,
      events: { click: () => {} },
    },
  ],
  header: 'Регистрация',
};

const notFound: TErrorPageData = {
  errorCode: 404,
  description: 'Не туда попали',
};

const serverError: TErrorPageData = {
  errorCode: 500,
  description: 'Мы уже фиксим',
};

export const pages = {
  login,
  signUp,
  notFound,
  serverError,
};
