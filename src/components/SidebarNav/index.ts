import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';

export default class SidebarNav extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.getContent()?.setAttribute('class', styles.wrapper);
  }

  render() {
    return this.compile(template, this.props);
  }
}
