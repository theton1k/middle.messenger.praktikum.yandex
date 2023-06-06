import Handlebars from "handlebars/runtime";
import partials from './partials'
import pages from "./pages";

import './scss/index.scss'

document.addEventListener('DOMContentLoaded',()=>{
  const root = document.querySelector('#app')!

  Object.entries(partials).forEach(([key, value]) =>{
    Handlebars.registerPartial(key, value)
  })

  const login = () =>{
    alert('login')
  }

  const signUp = () =>{
    alert('signUp')
  }

  root.innerHTML = pages.LoginPage()

  const loginButton = document.getElementById('loginButton')!

  loginButton.onclick = login

  const signUpButton = document.getElementById('signUp')!

  signUpButton.onclick = signUp

})

