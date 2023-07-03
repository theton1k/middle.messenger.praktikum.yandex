import { Block } from '../../../utils';
import styles from './styles.module.scss';
import { Chat, ChatList } from '../../../widgets';

export class Main extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.getContent()!.setAttribute('class', styles.chatWrapper);

    this.children.chatList = new ChatList({
      list: [
        {
          lastMessage: 'asdasd',
          lastMessageTime: '10:20',
          unreadMessagesCount: 5,
          nickname: 'hehe',
        },
        {
          lastMessage: 'wregw4gr',
          lastMessageTime: '10:20',
          unreadMessagesCount: 0,
          nickname: 'peta',
        },
        {
          lastMessage: 'asdasd',
          lastMessageTime: '10:20',
          unreadMessagesCount: 44,
          nickname: 'ruru',
        },
        {
          lastMessage: 'asdasd',
          lastMessageTime: '10:20',
          unreadMessagesCount: 12,
          nickname: 'roevj',
        },
        {
          lastMessage: 'asdasd',
          lastMessageTime: '10:20',
          unreadMessagesCount: 11,
          nickname: 'aev',
        },
        {
          lastMessage: 'asdasd',
          lastMessageTime: '10:20',
          unreadMessagesCount: 5,
          nickname: 'pekce',
        },
        {
          lastMessage: 'asdasd',
          lastMessageTime: '10:20',
          unreadMessagesCount: 35,
          nickname: 'vvvv',
        },
        {
          lastMessage: 'asdasd',
          lastMessageTime: '10:20',
          unreadMessagesCount: 5,
          nickname: 'Pofl',
        },
      ],
    });
    this.children.chat = new Chat({
      selectedChat: '123',
    });
  }

  render() {
    return this.compile(
      `
    {{{chatList}}}
    {{{chat}}}
    `,
      this.props
    );
  }
}
