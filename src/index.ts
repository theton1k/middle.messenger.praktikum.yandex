import Handlebars from 'handlebars/runtime'
import button from './partials/button.hbs'
import greetings from './templates/greetings.hbs'


Handlebars.registerPartial('button', button);

document.addEventListener('DOMContentLoaded',()=>{
  const root = document.querySelector('#app')!
  const btn = document.querySelector('#qweasd')!


  const greeting = greetings({ username:'JABA' })
  const tub = button({ label:'asdasd' })

  root.innerHTML = greeting
  btn.innerHTML = tub

})

