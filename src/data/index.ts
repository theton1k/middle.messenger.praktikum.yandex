import {
  ButtonTextStyle,
  ButtonThemes,
  ButtonTypes,
  IUserInfoItemProps,
} from '../components';
import { IAuthBaseProps, IErrorProps, IUserDataBaseProps } from '../pages';

const login: IAuthBaseProps = {
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

const signUp: IAuthBaseProps = {
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
    separator: true,
    disabled: true,
    value: '+7 (909) 967 30 30',
  },
];

const enabledProfileDataInputs = profileDataInputs.map((item) => ({
  ...item,
  disabled: false,
}));

const profile: IUserDataBaseProps = {
  avatar: {
    nickname: 'Иван',
    disabled: false,
    inputName: 'avatar',
  },
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
  buttonsLeft: true,
  nickname: 'Иван',
};

const changeProfileData: IUserDataBaseProps = {
  avatar: {
    disabled: false,
    inputName: 'avatar',
  },
  inputs: enabledProfileDataInputs,
  buttons: [
    {
      type: ButtonTypes.SUBMIT,
      label: 'Сохранить',
      events: { click: () => {} },
    },
  ],
};

const changePasswordInputs: IUserInfoItemProps[] = [
  {
    label: 'Старый пароль',
    type: 'password',
    inputName: 'oldPassword',
    separator: true,
    disabled: false,
    value: '',
  },
  {
    label: 'Новый пароль',
    type: 'password',
    inputName: 'newPassword',
    separator: true,
    disabled: false,
    value: '',
  },
  {
    label: 'Повторите новый пароль',
    type: 'password',
    inputName: 'repeatNewPassword',
    separator: true,
    disabled: false,
    value: '',
  },
];

const changePassword: IUserDataBaseProps = {
  avatar: {
    disabled: false,
    inputName: 'avatar',
  },
  inputs: changePasswordInputs,
  buttons: [
    {
      type: ButtonTypes.SUBMIT,
      label: 'Сохранить',
      events: { click: () => {} },
    },
  ],
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
  changeProfileData,
  changePassword,
};
