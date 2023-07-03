import { Block } from '../../utils';
import template from './template.ts';

export interface IBlockWrapperProps {
  className: string;
  block: Block | Block[];
}

export class BlockWrapper extends Block<IBlockWrapperProps> {
  constructor(props: IBlockWrapperProps) {
    super('div', props);
  }

  init() {
    this.getContent()!.setAttribute('class', this.props.className);
  }

  render() {
    return this.compile(template, this.props);
  }
}
