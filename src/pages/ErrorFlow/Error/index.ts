import styles from './styles.module.scss';
import { Block } from '../../../utils';
import template from './template.ts';
import { Navlink } from '../../../components';

export interface IErrorProps {
  errorCode: number;
  description: string;
}

export class Error extends Block<IErrorProps> {
  constructor(props: IErrorProps) {
    super('div', props);
  }

  init() {
    this.getContent()!.setAttribute('class', styles.wrapper);

    this.children.navlink = new Navlink({
      href: '/main',
      text: 'Назад к чатам',
      className: styles.action,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
