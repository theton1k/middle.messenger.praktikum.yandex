import styles from './ChatListItem.module.scss';

export default `
<div class=${styles.chatListItem}>
  {{> Avatar }}
  <div class=${styles.textWrapper}>
    <p class=${styles.chatName}>Андрей</p>
    <p class=${styles.message}>Текст</p>
  </div>
  <div class=${styles.infoBlock}>
    <p class=${styles.time}>10:20</p>
    {{> MessageCounter count=5 }}
  </div>
</div>
`;
