import Handlebars from "handlebars";

import pages from "./pages";
import partials from './components'

import './scss/index.scss'
import {domain} from "./config.ts";


Object.entries(partials).forEach(([key, value]) => {
  Handlebars.registerPartial(key, value)
})

Handlebars.registerHelper("authFormInputs", function(context, options) {
  return (
    context
      .map(function(item: any) {
        return options.fn(item)
      }).join("\n")
  );
});

Handlebars.registerHelper("authFormButtons", function(context, options) {
  return (
    context
      .map(function(item: any) {
        return options.fn(item)
      })
      .join("\n")
  );
});

document.addEventListener('DOMContentLoaded', () => {

  const root = document.querySelector('#app')!

  const path = window.location.href.replace(domain , '')

  console.log('path', path)

  const getPage = () =>{
    switch (path) {
      case '/login':
      case '':
      case '/':
        return pages.Login()
      case '/auth':
        return pages.SignUp()
      case '/main':
        return pages.Main()
      case '/profile':
        return pages.Profile()
      case '/change-password':
        return pages.ChangePassword()
      case '/change-data':
        return pages.ChangeData()
      case '/server-error':
        return pages.ServerError()
      default:
        return pages.NotFound()

    }
  }

  root.innerHTML = getPage()
})

