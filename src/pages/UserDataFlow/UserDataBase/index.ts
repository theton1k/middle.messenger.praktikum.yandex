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
import BlockWrapper from '../../../components/BlockWrapper';
import Text from '../../../components/Text';
import { FONT_SIZES, FONT_WEIGHT } from '../../../theme/config.ts';

export interface IUserDataBaseProps {
  nickname?: string;
  inputs: IUserInfoItemProps[];
  buttons: IButtonProps[];
  buttonsLeft?: boolean;
  avatar: IAvatarProps;
}

export default class UserDataBase extends Block<IUserDataBaseProps> {
  constructor(props: IUserDataBaseProps) {
    super('div', props);
  }

  init() {
    this.getContent()!.setAttribute('class', `${styles.wrapper}`);

    const { avatar, nickname, inputs, buttons, buttonsLeft } = this.props;

    const formInputs = inputs.map((props) => new UserInfoItem(props));

    const formButtons = buttons.map((props) => new Button(props));

    const avatarBlock = new BlockWrapper({
      block: [
        new Avatar({
          className: styles.avatar,
          inputName: avatar.inputName,
        }),
        new Text({
          text: nickname,
          weight: FONT_WEIGHT.SemiBold,
          size: FONT_SIZES.L,
          className: styles.nickname,
        }),
      ],
      className: styles.avatarWrapper,
    });

    const formContent = new BlockWrapper({
      block: [
        avatarBlock,
        new BlockWrapper({ block: formInputs, className: styles.inputWrapper }),
        new BlockWrapper({
          block: formButtons,
          className: buttonsLeft ? styles.buttonsLeft : styles.buttonsWrapper,
        }),
      ],
      className: styles.formContent,
    });

    this.children.form = new Form({
      block: formContent,
    });

    this.children.sidebarNav = new SidebarNav();
  }

  render() {
    return this.compile(template, this.props);
  }
}
