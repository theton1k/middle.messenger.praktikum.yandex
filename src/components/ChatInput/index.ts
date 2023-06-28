import { Block } from '../../utils';

export interface IChatInputProps {
  className: string;
}

export default class ChatInput extends Block<IChatInputProps> {
  constructor(props: IChatInputProps) {
    super('input', props);
  }

  init() {
    this.getContent()!.setAttribute('class', this.props.className);
    this.getContent()!.setAttribute('name', 'message');
  }
}
