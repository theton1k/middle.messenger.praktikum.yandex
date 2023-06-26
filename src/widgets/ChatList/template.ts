import styles from './styles.module.scss';

export default `
<div class=${styles.chatListWrapper}>
  <nav class=${styles.chatListHeader}>
    {{> Navlink href='/profile' text='Профиль >' }}
  </nav>
  <input />
  <ul class=${styles.chatList}>
      {{{chatList}}}
  </ul>
</div>`;
