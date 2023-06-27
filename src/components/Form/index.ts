import styles from './styles.module.scss';

import template from './template.ts';
import { Block } from '../../utils';

export interface IFormProps {
  block: Block;
}

export default class Form extends Block<IFormProps> {
  constructor(props: IFormProps) {
    super('form', props);
  }

  init() {
    this.getContent()?.setAttribute('class', `${styles.form}`);
  }

  render() {
    return this.compile(template, this.props);
  }
}
