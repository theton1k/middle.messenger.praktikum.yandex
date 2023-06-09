import styles from './ChangePassword.module.scss'
import {handlebarsCompile} from "../../../utils/handlebarsCompile.ts";



const ChangePasswordPage = `
<div class=${styles.wrapper}>
    <div class=${styles.content}>
      {{> Avatar className="${styles.avatar}" id="avatar"}}
      <ul class=${styles.userDataWrapper}>
        <li>{{> UserInfoItem id="oldPassword" type="password" fieldName="Старый пароль" fieldValue="234234" separator="true"}}</li>
        <li>{{> UserInfoItem id="newPassword" type="password" fieldName="Новый пароль" fieldValue="234234" separator="true"}}</li>
        <li>{{> UserInfoItem id="repeatNewPassword" type="password" fieldName="Повторите новый пароль" fieldValue="234234" }}</li>
      </ul>
        {{> Button type="button" className="${styles.buttonStyle}" text="Сохранить" id="savePasswordBtn" }}
    </div>
</div>
`


export default handlebarsCompile(ChangePasswordPage)


