import { Block } from '../../utils';
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

export interface IInputProps {
  inputName: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  value?: string;
  type?: HTMLInputTypeAttribute;
  events?: {
    blur: (e: Event) => void;
  };
}

export class Input extends Block<IInputProps> {
  constructor(props: IInputProps) {
    super('input', props);
  }

  init() {
    const {
      className = '',
      inputName,
      placeholder = '',
      value = '',
      type = 'text',
      disabled,
    } = this.props;

    this.getContent()!.setAttribute(
      'class',
      `${styles.inputWrapper} ${className}`
    );

    this.getContent()!.setAttribute('name', inputName);
    this.getContent()!.setAttribute('placeholder', placeholder);
    this.getContent()!.setAttribute('type', type);
    (this.getContent()! as HTMLInputElement).value = value;

    if (disabled) {
      this.getContent()!.setAttribute('disabled', '1');
    }
  }
}
