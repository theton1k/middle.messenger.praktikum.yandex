import styles from './ChangeData.module.scss'
import {handlebarsCompile} from "../../../utils/handlebarsCompile.ts";

const ChangeDataPage = `
<div class=${styles.wrapper}>
  <div class=${styles.content}>
    {{> Avatar className="${styles.avatar}" inputName="avatar"}}
    <form class=${styles.userDataWrapper}>
      <ul>
        <li>{{> UserInfoItem name="email" type="email" fieldName="Почта" fieldValue="pochta@yandex.ru" separator="true"}}</li>
        <li>{{> UserInfoItem name="login" fieldName="Логин" fieldValue="ivanivanov" separator="true"}}</li>
        <li>{{> UserInfoItem name="first_name" fieldName="Имя" fieldValue="Иван" separator="true"}}</li>
        <li>{{> UserInfoItem name="second_name" fieldName="Фамилия" fieldValue="Иванов" separator="true"}}</li>
        <li>{{> UserInfoItem name="display_name" fieldName="Имя в чате" fieldValue="Иван" separator="true"}}</li>
        <li>{{> UserInfoItem name="phone" type="tel"fieldName="Телефон" fieldValue="+7 (909) 967 30 30"}}</li>
      </ul>
      {{> Button type="submit" className="${styles.buttonStyle}" text="Сохранить" id="savePasswordBtn" }}
    </form>
  </div>
</div>
`

export default handlebarsCompile(ChangeDataPage)


