import styles from './styles.module.scss';
import { Block } from '../../../utils';
import Button, { IButtonProps } from '../../../components/Button';
import UserInfoItem, {
  IUserInfoItemProps,
} from '../../../components/UserInfoItem';
import SidebarNav from '../../../components/SidebarNav';
import template from './template.ts';

export interface IUserDataBaseProps {
  nickname?: string;
  inputs: IUserInfoItemProps[];
  buttons: IButtonProps[];
  buttonPosition?: 'buttonCenter' | 'buttonLeft';
}

export default class UserDataBase extends Block<IUserDataBaseProps> {
  constructor(props: IUserDataBaseProps) {
    super('div', props);
  }

  init() {
    this.props.buttonPosition = this.props.buttonPosition || 'buttonCenter';

    console.log(
      '${styles.wrapper} ${styles[this.props.buttonPosition]}',
      `${styles.wrapper} ${styles[this.props.buttonPosition]}`
    );

    this.getContent()?.setAttribute(
      'class',
      `${styles.wrapper} ${styles[this.props.buttonPosition]}`
    );

    this.children.inputs = this.props.inputs.map(
      (props) => new UserInfoItem(props)
    );

    this.children.buttons = this.props.buttons.map(
      (props) => new Button(props)
    );

    this.children.sidebarNav = new SidebarNav();
  }

  render() {
    return this.compile(template, this.props);
  }
}
