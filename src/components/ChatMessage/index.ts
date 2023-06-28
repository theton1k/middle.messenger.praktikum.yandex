import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';

interface IChatMessageProps {
  isCurrentUserMessage: boolean;
  message: string;
}

export default class ChatMessage extends Block<IChatMessageProps> {
  constructor(props: IChatMessageProps) {
    super('div', props);
  }

  init() {
    this.getContent()!.setAttribute(
      'class',
      this.props.isCurrentUserMessage
        ? styles.userMessage
        : styles.interlocutorMessage
    );
  }

  render() {
    return this.compile(template, this.props);
  }
}
