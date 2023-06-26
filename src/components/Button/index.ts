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

export const enum ButtonTextStyle {
  DEFAULT = 'defaultText',
  DESTRUCTED = 'destructedText',
}

export interface IButtonProps {
  events: {
    click: () => void;
  };
  label: string;
  type?: ButtonTypes;
  theme?: ButtonThemes;
  className?: string;
  textStyle?: ButtonTextStyle;
}

export default class Button extends Block<IButtonProps> {
  constructor(props: IButtonProps) {
    super('button', props);
  }

  init() {
    this.props.type = this.props.type || ButtonTypes.BUTTON;
    const theme = this.props.theme || ButtonThemes.DEFAULT;
    const textStyle = this.props.textStyle || ButtonTextStyle.DEFAULT;

    this.props.className = `${this.props.className || ''} ${styles[theme]} ${
      styles[textStyle]
    }`;
  }

  render() {
    return this.compile(template, this.props);
  }
}
