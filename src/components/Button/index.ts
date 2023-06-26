import { Block } from '../../utils';
import template from './template.ts';
import styles from './style.module.scss';

export const enum ButtonThemes {
  DEFAULT = 'default',
  OUTLINE = 'outline',
}

export const enum ButtonTypes {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}

export interface IButtonProps {
  events: {
    click: () => void;
  };
  label: string;
  type: ButtonTypes;
  theme: ButtonThemes;
  className?: string;
  style?: string;
}

export default class Button extends Block<IButtonProps> {
  constructor(props: IButtonProps) {
    super('button', props);
  }

  render() {
    this.props.style = styles[this.props.theme];

    return this.compile(template, this.props);
  }
}
