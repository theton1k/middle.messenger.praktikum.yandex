import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';

export class SidebarNav extends Block {
  constructor() {
    super('sidebar', {});
  }

  init() {
    this.getContent()!.setAttribute('class', styles.wrapper);
  }

  render() {
    return this.compile(template, this.props);
  }
}
