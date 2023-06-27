import styles from './styles.module.scss';

export default `
  {{{ avatar }}}
  <div class=${styles.textWrapper}>
    <p class=${styles.chatName}>{{nickname}}</p>
    <p class=${styles.message}>{{lastMessage}}</p>
  </div>
  <div class=${styles.infoBlock}>
    <p class=${styles.time}>{{lastMessageTime}}</p>
    {{#if unreadMessagesCount}}
      <div class="${styles.messageCounter}">{{{unreadMessagesCount}}}</div>
    {{/if}}
  </div>
`;
