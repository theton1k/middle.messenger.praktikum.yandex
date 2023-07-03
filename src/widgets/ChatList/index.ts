import { Block } from '../../utils';
import styles from './styles.module.scss';
import { IChatListItemProps, ChatListItem } from '../ChatListItem';
import template from './template.ts';
import { Navlink } from '../../components';

export interface IChatListProps {
  list: IChatListItemProps[];
}

export class ChatList extends Block<IChatListProps> {
  constructor(props: IChatListProps) {
    super('div', props);
  }

  init() {
    this.getContent()!.setAttribute('class', styles.chatListWrapper);

    this.children.chatList = this.props.list.map(
      (item) => new ChatListItem(item)
    );
    this.children.navlink = new Navlink({
      href: '/profile',
      text: 'Профиль >',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
