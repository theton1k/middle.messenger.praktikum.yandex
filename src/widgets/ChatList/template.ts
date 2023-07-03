import styles from './styles.module.scss';

export default `
<div class=${styles.chatListWrapper}>
  <nav class=${styles.chatListHeader}>
  {{{navlink}}}
  </nav>
  <input />
  <ul class=${styles.chatList}>
      {{{chatList}}}
  </ul>
</div>`;
