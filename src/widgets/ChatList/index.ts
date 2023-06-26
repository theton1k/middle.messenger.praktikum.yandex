import { Block } from '../../utils';
import styles from './styles.module.scss';
import ChatListItem, {
  IChatListItemProps,
} from '../../components/ChatListItem';
import template from './template.ts';

export interface IChatListProps {
  list: IChatListItemProps[];
}

export default class ChatList extends Block<IChatListProps> {
  constructor(props: IChatListProps) {
    super('div', props);
  }

  init() {
    this.getContent()?.setAttribute('class', styles.chatListWrapper);

    this.children.chatList = this.props.list.map(
      (item) => new ChatListItem(item)
    );
  }

  render() {
    return this.compile(template, this.props);
  }
}

// <H2>(FOR REVIEWER)</H2>
// <nav>
// <ul>
//   <li>
//     <a href="/login">login</a>
// </li>
// <li>
// <a href="/sign-up">signUp</a>
// </li>
// <li>
// <a href="/main">main</a>
// </li>
// <li>
// <a href="/profile.ts">profile.ts</a>
// </li>
// <li>
// <a href="/change-password">change password</a>
// </li>
// <li>
// <a href="/change-data">change data</a>
// </li>
// <li>
// <a href="/server-error">500</a>
// </li>
// <li>
// <a href="/asd">404</a>
//   </li>
//   </ul>
//   </nav>
//   </div>
