import styles from './ChangePassword.module.scss'
import {handlebarsCompile} from "../../../utils/handlebarsCompile.ts";

const ChangePasswordPage = `
<div class=${styles.wrapper}>
  <div class=${styles.content}>
    {{> Avatar className="${styles.avatar}" inputName="avatar"}}
    <form class=${styles.userDataWrapper}>
      <ul>
        <li>{{> UserInfoItem name="oldPassword" type="password" fieldName="Старый пароль" fieldValue="234234" separator="true"}}</li>
        <li>{{> UserInfoItem name="newPassword" type="password" fieldName="Новый пароль" fieldValue="234234" separator="true"}}</li>
        <li>{{> UserInfoItem name="repeatNewPassword" type="password" fieldName="Повторите новый пароль" fieldValue="234234" }}</li>
      </ul>
      {{> Button type="submit" className="${styles.buttonStyle}" text="Сохранить" id="savePasswordBtn" }}
    </form>
  </div>
</div>
`

export default handlebarsCompile(ChangePasswordPage)


