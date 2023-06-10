import styles from './ChatList.module.scss'
import ChatListItem from '../ChatListItem/ChatListItem.tmpl.ts'

export default `
<div class=${styles.chatListWrapper}>
  <nav class=${styles.chatListHeader}>
    {{> Navlink href='/profile' text='Профиль >' }}
  </nav>
  <input />
  <ul class=${styles.chatList}>
      <li>${ChatListItem}</li>
      <li>${ChatListItem}</li>
      <li>${ChatListItem}</li>
      <li>${ChatListItem}</li>
      <li>${ChatListItem}</li>
      <li>${ChatListItem}</li>
      <li>${ChatListItem}</li>
      <li>${ChatListItem}</li>
      <li>${ChatListItem}</li>
      <li>${ChatListItem}</li>
      <li>${ChatListItem}</li>
  </ul>
</div>`
