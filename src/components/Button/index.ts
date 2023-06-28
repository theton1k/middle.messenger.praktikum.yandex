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
  label?: string;
  type?: ButtonTypes;
  theme?: ButtonThemes;
  className?: string;
  textStyle?: ButtonTextStyle;
  wrapperClassName?: string;
}

export default class Button extends Block<IButtonProps> {
  constructor(props: IButtonProps) {
    super('button', props);
  }

  init() {
    const { className, textStyle, type, theme, wrapperClassName } = this.props;

    this.getContent()!.setAttribute('class', wrapperClassName || '');

    this.props.type = type || ButtonTypes.BUTTON;
    const buttonTheme = theme || ButtonThemes.DEFAULT;
    const buttonTextStyle = textStyle || ButtonTextStyle.DEFAULT;

    this.props.className = `${className || ''} ${styles[buttonTheme]} ${
      styles[buttonTextStyle]
    }`;
  }

  render() {
    return this.compile(template, this.props);
  }
}
