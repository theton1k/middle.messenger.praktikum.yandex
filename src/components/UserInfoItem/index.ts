import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';
import { HTMLInputTypeAttribute } from '../../types';

export interface IUserInfoItemProps {
  label: string;
  value: string;
  type?: HTMLInputTypeAttribute;
  inputName: string;
  separator: boolean;
  disabled: boolean;
}

export default class UserInfoItem extends Block<IUserInfoItemProps> {
  constructor(props: IUserInfoItemProps) {
    super('div', props);
  }

  init() {
    this.getContent()?.setAttribute('class', styles.userInfoItem);
    console.log(this.getContent());
  }

  render() {
    return this.compile(template, this.props);
  }
}
