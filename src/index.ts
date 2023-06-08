import Handlebars from "handlebars";

import pages from "./pages";
import partials from './components'

import './scss/index.scss'
import context from "./data/context";

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

  function handleLogin() {
   history.pushState({},'','/main')
  }

  function handleNavToSignUp() {
    history.pushState({},'','/signUp')
    renderSignUpPage()

  }

  function handleNavToLogin() {
    history.pushState({},'','/login')
    renderLoginPage()
  }

  function handleSignUp() {
    history.pushState({},'','/login')
    renderLoginPage()
  }


  function renderLoginPage() {
    const loginPageTemplate =  Handlebars.compile(pages.LoginPage)(context.loginContext)

    root.innerHTML = loginPageTemplate

    const loginButton = document.getElementById('loginBtn')!
    const navToSignUpButton = document.getElementById('navToSignUpBtn')!

    loginButton.onclick = handleLogin
    navToSignUpButton.onclick = handleNavToSignUp
  }

  function renderChatPage() {
    const chatPageTemplate =  Handlebars.compile(pages.ChatPage)(context.loginContext)

    root.innerHTML = chatPageTemplate

  }

  function renderSignUpPage() {

    const signUpPageTemplate =  Handlebars.compile(pages.SignUpPage)(context.signUpContext)

    root.innerHTML = signUpPageTemplate

    const signUpButton = document.getElementById('signUpBtn')!
    const navToLoginButton = document.getElementById('navToLoginBtn')!

    signUpButton.onclick = handleSignUp
    navToLoginButton.onclick = handleNavToLogin
  }

  Object.entries(partials).forEach(([key, value]) =>{
    Handlebars.registerPartial(key, value)
  })

  // renderLoginPage()
  renderChatPage()
})

