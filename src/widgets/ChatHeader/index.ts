import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';
import { Avatar } from '../../components';

export interface IChatHeaderProps {
  avatar: string;
  nickname: string;
}

export class ChatHeader extends Block<IChatHeaderProps> {
  constructor(props: IChatHeaderProps) {
    super('div', props);
  }

  init() {
    this.getContent()!.setAttribute('class', styles.header);

    this.children.avatar = new Avatar({
      src: this.props.avatar,
      disabled: true,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
