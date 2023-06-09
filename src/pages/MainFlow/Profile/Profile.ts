import styles from './Profile.module.scss'
import {handlebarsCompile} from "../../../utils/handlebarsCompile.ts";



const ProfilePage = `
<div class=${styles.wrapper}>
  <div class=${styles.content}>
  {{> Avatar className="${styles.avatar}" id="userAvatar"}}
  <p class=${styles.name}>Иван</p>
    <ul class=${styles.userDataWrapper}>
      <li>{{> UserInfoItem id="email" type="email" fieldName="Почта" fieldValue="pochta@yandex.ru" separator="true"}}</li>
      <li>{{> UserInfoItem id="login" fieldName="Логин" fieldValue="ivanivanov" separator="true"}}</li>
      <li>{{> UserInfoItem id="first_name" fieldName="Имя" fieldValue="Иван" separator="true"}}</li>
      <li>{{> UserInfoItem id="second_name" fieldName="Фамилия" fieldValue="Иванов" separator="true"}}</li>
      <li>{{> UserInfoItem id="display_name" fieldName="Имя в чате" fieldValue="Иван" separator="true"}}</li>
      <li>{{> UserInfoItem id="phone" type="tel"fieldName="Телефон" fieldValue="+7 (909) 967 30 30"}}</li>
    </ul>

    <ul class=${styles.userDataActions}>
      {{> Navlink className="${styles.action}" href='/changeData' text='Изменить данные' }}
      {{> Separator }}
      {{> Navlink className="${styles.action}" href='/changePassword' text='Изменить пароль' }}
      {{> Separator }}
      {{> Navlink className="${styles.action} ${styles.destructive}" href='/logout' text='Выйти' }}
    </ul>
  </div>
</div>
`

export default handlebarsCompile(ProfilePage)


