import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';

export interface IChatProps {
  selectedChat?: string;
}

export default class Chat extends Block<IChatProps> {
  constructor(props: IChatProps) {
    super('div', props);
  }

  init() {
    this.getContent()?.setAttribute('class', styles.chatWindow);
  }

  render() {
    return this.compile(template, this.props);
  }
}
