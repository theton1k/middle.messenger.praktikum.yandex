import Handlebars from 'handlebars';

import pages from './pages';
import partials from './components';

import './scss/index.scss';
import { domain } from './config.ts';
import { render } from './utils/render.ts';
import data from './data';

Object.entries(partials).forEach(([key, value]) => {
  Handlebars.registerPartial(key, value);
});

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');

  if (!root) {
    throw Error('no root');
  }

  const path = window.location.href.split(domain).at(-1);

  const loginPage = new pages.Login(data.pages.login);
  const signUpPage = new pages.Login(data.pages.signUp);

  const getPage = () => {
    switch (path) {
      case '/login':
      case '':
      case '/':
        render('#app', loginPage);
        break;
      case '/sign-up':
        render('#app', signUpPage);
        break;
      case '/main':
        return pages.Main();
      case '/profile':
        return pages.Profile();
      case '/change-password':
        return pages.ChangePassword();
      case '/change-data':
        return pages.ChangeData();
      case '/server-error':
        return pages.ServerError();
      default:
        return pages.NotFound();
    }
  };

  getPage();
});
