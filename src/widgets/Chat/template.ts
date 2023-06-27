import styles from './styles.module.scss';
export default `
{{#if selectedChat}}
<div class="${styles.openedChat}">
{{{chatHeader}}}
<div class="${styles.messagesBlock}">
{{{chatMessages}}}
</div>
{{{chatFooter}}}
</div>
{{else}}
  <p class=${styles.selectChat}>Выберите чат чтобы отправить сообщение</p>
{{/if}}
`;
