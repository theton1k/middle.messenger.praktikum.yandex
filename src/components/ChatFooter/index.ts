import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';
import Button from '../Button';

export default class ChatFooter extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.getContent()?.setAttribute('class', styles.footer);

    this.children.attachButton = new Button({
      className: styles.attachButton,
      events: { click: () => {} },
      wrapperClassName: styles.attachButtonWrapper,
    });
    this.children.sendButton = new Button({
      className: styles.sendButton,
      events: { click: () => {} },
      wrapperClassName: styles.sendButtonWrapper,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
