import * as pages from './pages';

import './scss/index.scss';
import { domain } from './config.ts';
import { render } from './utils';
import data from './data';

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
        return new pages.Main();
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
