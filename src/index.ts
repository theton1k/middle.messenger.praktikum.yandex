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

  const loginPage = new pages.Login(data.login);
  const signUpPage = new pages.Login(data.signUp);
  const chatPage = new pages.Chat();
  const changeDataPage = new pages.ChangeProfileData(data.changeProfileData);
  const changePasswordPage = new pages.ChangePassword(data.changePassword);
  const profilePage = new pages.ChangePassword(data.profile);
  const notFoundPage = new pages.Error(data.notFound);
  const serverErrorPage = new pages.Error(data.serverError);

  const getPage = () => {
    switch (path) {
      case '/login':
      case '':
      case '/':
        return render('#app', loginPage);
      case '/sign-up':
        return render('#app', signUpPage);
      case '/main':
        return render('#app', chatPage);
      case '/profile':
        return render('#app', profilePage);
      case '/change-password':
        return render('#app', changePasswordPage);
      case '/change-data':
        return render('#app', changeDataPage);
      case '/server-error':
        return render('#app', serverErrorPage);
      default:
        return render('#app', notFoundPage);
    }
  };

  getPage();
});
