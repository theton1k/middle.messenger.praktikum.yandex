import styles from './Profile.module.scss';
import { handlebarsCompile } from '../../../utils/handlebarsCompile.ts';

const ProfilePage = `
<div class=${styles.wrapper}>
  <div class=${styles.content}>
    {{> Avatar className="${styles.avatar}" inputName="avatar"}}
    <p class=${styles.name}>Иван</p>
    <form class=${styles.userDataWrapper}>
      <ul>
        <li>{{> UserInfoItem name="email" type="email" fieldName="Почта" fieldValue="pochta@yandex.ru" separator="true"}}</li>
        <li>{{> UserInfoItem name="login" fieldName="Логин" fieldValue="ivanivanov" separator="true"}}</li>
        <li>{{> UserInfoItem name="first_name" fieldName="Имя" fieldValue="Иван" separator="true"}}</li>
        <li>{{> UserInfoItem name="second_name" fieldName="Фамилия" fieldValue="Иванов" separator="true"}}</li>
        <li>{{> UserInfoItem name="display_name" fieldName="Имя в чате" fieldValue="Иван" separator="true"}}</li>
        <li>{{> UserInfoItem name="phone" type="tel"fieldName="Телефон" fieldValue="+7 (909) 967 30 30"}}</li>
      </ul>
      <nav class=${styles.userDataActions}>
        <ul>
          {{> Navlink className="${styles.action}" href='/changeData' text='Изменить данные' }}
          {{> Separator }}
          {{> Navlink className="${styles.action}" href='/changePassword' text='Изменить пароль' }}
          {{> Separator }}
          {{> Navlink className="${styles.action} ${styles.destructive}" href='/logout' text='Выйти' }}
        </ul>
      </nav>
    </form>
  </div>
</div>
`;

export default handlebarsCompile(ProfilePage);
