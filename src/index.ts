import Handlebars from 'handlebars';

import pages from './pages';
import partials from './components';

import './scss/index.scss';
import { domain } from './config.ts';
import { render } from './utils';
import data from './data';

Object.entries(partials).forEach(([key, value]) => {
  Handlebars.registerPartial(key, value);
});

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.href.split(domain).at(-1);

  const getPage = () => {
    switch (path) {
      case '/login':
      case '':
      case '/':
        return new pages.Login(data.login);
      case '/sign-up':
        return new pages.SignUp(data.signUp);
      case '/main':
        return new pages.Chat();
      case '/profile':
        return new pages.ChangeProfileData(data.changeProfileData);
      case '/change-password':
        return new pages.ChangePassword(data.changePassword);
      case '/change-data':
        return new pages.ChangeProfileData(data.changeProfileData);
      case '/server-error':
        return new pages.Error(data.serverError);
      default:
        return new pages.Error(data.notFound);
    }
  };

  render('#app', getPage());
});
