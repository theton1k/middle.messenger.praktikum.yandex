import { Block } from '../../utils';
import template from './template.ts';
import styles from './styles.module.scss';

export type HTMLInputTypeAttribute =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

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
