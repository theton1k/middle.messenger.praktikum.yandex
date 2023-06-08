import widgets from "../../../widgets";
import styles from './Chat.module.scss'

const Chat =  widgets.Chat
const ChatList =  widgets.ChatList


const ChatPage = `
<div class=${styles.chatWrapper}>
    ${ChatList}
    ${Chat}
</div>
`


export default ChatPage


