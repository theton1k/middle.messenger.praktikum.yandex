import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';

export interface IChatMessageProps {
  isCurrentUserMessage: boolean;
  message: string;
}

export class ChatMessage extends Block<IChatMessageProps> {
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
