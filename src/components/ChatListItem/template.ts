import styles from './styles.module.scss';

export default `
  {{> Avatar }}
  <div class=${styles.textWrapper}>
    <p class=${styles.chatName}>{{nickname}}</p>
    <p class=${styles.message}>{{lastMessage}}</p>
  </div>
  <div class=${styles.infoBlock}>
    <p class=${styles.time}>{{lastMessageTime}}</p>
    <div class="${styles.messageCounter}">{{{unreadMessagesCount}}}</div>
  </div>
`;
