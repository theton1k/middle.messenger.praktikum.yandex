import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';

export interface IChatListItemProps {
  nickname: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadMessagesCount: number | string;
}

export default class ChatListItem extends Block<IChatListItemProps> {
  constructor(props: IChatListItemProps) {
    super('a', props);
  }

  init() {
    this.getContent()?.setAttribute('class', styles.chatListItem);
  }

  render() {
    if (Number(this.props.unreadMessagesCount) > 9) {
      this.props.unreadMessagesCount = '9+';
    }
    return this.compile(template, this.props);
  }
}
