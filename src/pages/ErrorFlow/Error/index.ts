import styles from './styles.module.scss';
import { Block } from '../../../utils';
import template from './template.ts';

export interface IErrorProps {
  errorCode: number;
  description: string;
}

export default class Error extends Block<IErrorProps> {
  constructor(props: IErrorProps) {
    super('div', props);
  }

  init() {
    this.getContent()?.setAttribute('class', styles.wrapper);
  }

  render() {
    return this.compile(template, this.props);
  }
}
