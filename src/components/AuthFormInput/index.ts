import { Block } from '../../utils';
import template from './template.ts';
import styles from './styles.module.scss';
import { HTMLInputTypeAttribute } from '../../types';

export interface IAuthFormInputInputProps {
  inputName: string;
  label: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
}

export default class AuthFormInput extends Block<IAuthFormInputInputProps> {
  constructor(props: IAuthFormInputInputProps) {
    super('div', props);
  }

  init() {
    this.getContent()?.setAttribute('class', styles.inputWrapper);
  }

  render() {
    return this.compile(template, this.props);
  }
}
