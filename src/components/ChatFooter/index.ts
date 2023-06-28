import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';
import Button, { ButtonTypes } from '../Button';
import BlockWrapper from '../BlockWrapper';
import ChatInput from '../ChatInput';
import Form from '../Form';

export default class ChatFooter extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.getContent()!.setAttribute('class', styles.footer);

    const formContent = new BlockWrapper({
      block: [
        new Button({
          className: styles.attachButton,
          events: {
            click: () => {},
          },
          wrapperClassName: styles.attachButtonWrapper,
        }),
        new ChatInput({ className: styles.input }),
        new Button({
          className: styles.sendButton,
          events: {
            click: () => {},
          },
          wrapperClassName: styles.sendButtonWrapper,
          label: '>',
          type: ButtonTypes.SUBMIT,
        }),
      ],
      className: styles.formContent,
    });

    this.children.form = new Form({ block: formContent });
  }

  render() {
    return this.compile(template, this.props);
  }
}
