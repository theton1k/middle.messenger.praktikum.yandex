import { Block } from '../../../utils';
import Button, { IButtonProps } from '../../../components/Button';
import UserInfoItem, {
  IUserInfoItemProps,
} from '../../../components/UserInfoItem';
import SidebarNav from '../../../components/SidebarNav';
import template from './template.ts';
import Form from '../../../components/Form';
import styles from './styles.module.scss';
import Avatar, { IAvatarProps } from '../../../components/Avatar';

export interface IUserDataBaseProps {
  nickname?: string;
  inputs: IUserInfoItemProps[];
  buttons: IButtonProps[];
  buttonPosition?: 'buttonCenter' | 'buttonLeft';
  avatar: IAvatarProps;
}

export default class UserDataBase extends Block<IUserDataBaseProps> {
  constructor(props: IUserDataBaseProps) {
    super('div', props);
  }

  init() {
    this.getContent()?.setAttribute('class', `${styles.wrapper}`);

    const inputs = [];

    inputs.push(
      new Avatar({
        className: styles.avatar,
        inputName: this.props.avatar.inputName,
        disabled: !this.props.avatar.inputName || this.props.avatar.disabled,
        nickname: this.props.avatar.nickname,
        wrapperClassName: styles.avatarWrapper,
      })
    );

    inputs.push(...this.props.inputs.map((props) => new UserInfoItem(props)));

    const buttons = this.props.buttons.map((props) => new Button(props));

    this.children.form = new Form({
      inputs,
      buttons,
      buttonPosition: this.props.buttonPosition,
    });

    this.children.sidebarNav = new SidebarNav();
  }

  render() {
    return this.compile(template, this.props);
  }
}
