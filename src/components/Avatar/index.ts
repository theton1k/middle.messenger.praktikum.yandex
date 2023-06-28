import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';

export interface IAvatarProps {
  className?: string;
  wrapperClassName?: string;
  inputName?: string;
  nickname?: string;
  disabled?: boolean;
  src?: string;
}

export default class Avatar extends Block<IAvatarProps> {
  constructor(props: IAvatarProps) {
    super('div', props);
  }

  init() {
    this.getContent()!.setAttribute(
      'class',
      `${styles.wrapper} ${this.props.wrapperClassName || ''}`
    );
  }

  render() {
    return this.compile(template, this.props);
  }
}
