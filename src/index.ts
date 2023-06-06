import Handlebars from "handlebars";

import pages from "./pages";
import partials from './components'

import './scss/index.scss'

Object.entries(partials).forEach(([key, value]) =>{
  Handlebars.registerPartial(key, value)
})

document.addEventListener('DOMContentLoaded',()=>{
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

    root.innerHTML = Handlebars.compile(pages.LoginPage)({})

    const loginButton = document.getElementById('loginBtn')!
    const navToSignUpButton = document.getElementById('navToSignUpBtn')!

    loginButton.onclick = handleLogin
    navToSignUpButton.onclick = handleNavToSignUp
  }

  function renderSignUpPage() {

    root.innerHTML = Handlebars.compile(pages.SignUpPage)({})

    const signUpButton = document.getElementById('signUpBtn')!

    signUpButton.onclick = handleSignUp

    const navToLoginButton = document.getElementById('navToLoginBtn')!

    navToLoginButton.onclick = handleNavToLogin
  }

  Object.entries(partials).forEach(([key, value]) =>{
    Handlebars.registerPartial(key, value)
  })

  renderLoginPage()
})

