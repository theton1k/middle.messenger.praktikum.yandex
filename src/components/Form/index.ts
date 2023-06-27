import styles from './styles.module.scss';

import template from './template.ts';
import { Block } from '../../utils';

export interface IFormProps {
  nickname?: string;
  inputs: Block[];
  buttons: Block[];
  buttonPosition?: 'buttonCenter' | 'buttonLeft';
  buttonClass?: string;
}

export default class Form extends Block<IFormProps> {
  constructor(props: IFormProps) {
    super('form', props);
  }

  init() {
    this.props.buttonPosition = this.props.buttonPosition || 'buttonCenter';

    this.getContent()?.setAttribute(
      'class',
      `${styles.form} ${styles[this.props.buttonPosition] || 'buttonCenter'}`
    );
  }

  render() {
    return this.compile(template, this.props);
  }
}
