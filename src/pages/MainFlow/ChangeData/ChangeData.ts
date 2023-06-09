import styles from './ChangeData.module.scss'
import {handlebarsCompile} from "../../../utils/handlebarsCompile.ts";



const ChangeDataPage = `
<div class=${styles.wrapper}>
    <div class=${styles.content}>
      {{> Avatar className="${styles.avatar}" id="userAvatar"}}
      <ul class=${styles.userDataWrapper}>
        <li>{{> UserInfoItem id="email" type="email" fieldName="Почта" fieldValue="pochta@yandex.ru" separator="true"}}</li>
        <li>{{> UserInfoItem id="login" fieldName="Логин" fieldValue="ivanivanov" separator="true"}}</li>
        <li>{{> UserInfoItem id="first_name" fieldName="Имя" fieldValue="Иван" separator="true"}}</li>
        <li>{{> UserInfoItem id="second_name" fieldName="Фамилия" fieldValue="Иванов" separator="true"}}</li>
        <li>{{> UserInfoItem id="display_name" fieldName="Имя в чате" fieldValue="Иван" separator="true"}}</li>
        <li>{{> UserInfoItem id="phone" type="tel"fieldName="Телефон" fieldValue="+7 (909) 967 30 30"}}</li>
      </ul>
      {{> Button type="button" className="${styles.buttonStyle}" text="Сохранить" id="savePasswordBtn" }}
    </div>
</div>
`


export default handlebarsCompile(ChangeDataPage)


