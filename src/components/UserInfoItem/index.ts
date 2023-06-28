import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';
import { HTMLInputTypeAttribute } from '../../types';
import { Separator } from '../Separator';

export interface IUserInfoItemProps {
  label: string;
  value: string;
  type?: HTMLInputTypeAttribute;
  inputName: string;
  separator: boolean;
  disabled: boolean;
}

export class UserInfoItem extends Block<IUserInfoItemProps> {
  constructor(props: IUserInfoItemProps) {
    super('div', props);
  }

  init() {
    this.getContent()!.setAttribute('class', styles.userInfoItem);
    if (this.props.separator) {
      this.children.separator = new Separator({});
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}
