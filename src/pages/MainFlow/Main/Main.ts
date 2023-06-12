import widgets from '../../../widgets';
import styles from './Main.module.scss';
import { handlebarsCompile } from '../../../utils/handlebarsCompile.ts';

const Main = widgets.Chat;
const ChatList = widgets.ChatList;

const MainPage = `
<div class=${styles.chatWrapper}>
  ${ChatList}
  ${Main}
</div>
`;

export default handlebarsCompile(MainPage);
