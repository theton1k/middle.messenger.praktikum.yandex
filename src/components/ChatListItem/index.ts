import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';
import Avatar from '../Avatar';

export interface IChatListItemProps {
  nickname: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadMessagesCount?: number | string;
  avatar?: string;
}

export default class ChatListItem extends Block<IChatListItemProps> {
  constructor(props: IChatListItemProps) {
    super('button', props);
  }

  init() {
    this.getContent()!.setAttribute('class', styles.chatListItem);

    this.children.avatar = new Avatar({
      src: this.props.avatar,
      disabled: true,
    });
  }

  render() {
    if (Number(this.props.unreadMessagesCount) > 9) {
      this.props.unreadMessagesCount = '9+';
    }
    return this.compile(template, this.props);
  }
}
