import {
  ButtonTextStyle,
  ButtonThemes,
  ButtonTypes,
} from '../components/Button';
import { IAuthFormProps } from '../widgets/AuthForm';
import { IUserInfoItemProps } from '../components/UserInfoItem';
import { IErrorProps } from '../pages/ErrorFlow/Error';
import { IUserDataBaseProps } from '../pages/UserDataFlow/UserDataBase';

const login: IAuthFormProps = {
  inputs: [
    { label: 'Логин', inputName: 'login' },
    { label: 'Пароль', inputName: 'password', type: 'password' },
  ],
  buttons: [
    {
      type: ButtonTypes.SUBMIT,
      label: 'Войти',
      events: { click: () => {} },
    },
    {
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
      events: { click: () => {} },
    },
    {
      label: ' Войти',
      theme: ButtonThemes.OUTLINE,
      events: { click: () => {} },
    },
  ],
  header: 'Регистрация',
};

const profileDataInputs: IUserInfoItemProps[] = [
  {
    label: 'Почта',
    type: 'email',
    inputName: 'email',
    separator: true,
    disabled: true,
    value: 'pochta@yandex.ru',
  },
  {
    label: 'Логин',
    inputName: 'login',
    separator: true,
    disabled: true,
    value: 'ivanivanov',
  },
  {
    label: 'Имя',
    inputName: 'first_name',
    separator: true,
    disabled: true,
    value: 'Иван',
  },
  {
    label: 'Фамилия',
    inputName: 'second_name',
    separator: true,
    disabled: true,
    value: 'Иванов',
  },
  {
    label: 'Имя в чате',
    inputName: 'display_name',
    separator: true,
    disabled: true,
    value: 'Иван',
  },
  {
    label: 'Телефон',
    inputName: 'phone',
    separator: false,
    disabled: true,
    value: '+7 (909) 967 30 30',
  },
];

const enabledProfileDataInputs = profileDataInputs.map((item) => ({
  ...item,
  disabled: false,
}));

const changeData: IUserDataBaseProps = {
  inputs: enabledProfileDataInputs,
  buttons: [
    {
      type: ButtonTypes.SUBMIT,
      label: 'Сохранить',
      events: { click: () => {} },
    },
  ],
};

const profile: IUserDataBaseProps = {
  inputs: profileDataInputs,
  buttons: [
    {
      label: 'Изменить данные',
      events: { click: () => {} },
      theme: ButtonThemes.OUTLINE,
    },
    {
      label: 'Изменить пароль',
      events: { click: () => {} },
      theme: ButtonThemes.OUTLINE,
    },
    {
      label: 'Выйти',
      events: { click: () => {} },
      theme: ButtonThemes.OUTLINE,
      textStyle: ButtonTextStyle.DESTRUCTED,
    },
  ],
  buttonPosition: 'buttonLeft',
  nickname: 'Иван',
};

const notFound: IErrorProps = {
  errorCode: 404,
  description: 'Не туда попали',
};

const serverError: IErrorProps = {
  errorCode: 500,
  description: 'Мы уже фиксим',
};

export default {
  login,
  signUp,
  notFound,
  serverError,
  profile,
  changeData,
};
