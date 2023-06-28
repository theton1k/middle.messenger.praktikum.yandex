import { Block } from '../../utils';
import styles from './styles.module.scss';

export interface INavlinkProps {
  href: string;
  text: string;
  className?: string;
}

export class Navlink extends Block<INavlinkProps> {
  constructor(props: INavlinkProps) {
    super('a', props);
  }

  init() {
    const { href, className } = this.props;
    this.getContent()!.setAttribute('class', `${styles.navlink} ${className}`);
    this.getContent()!.setAttribute('href', href);
  }

  render() {
    return this.compile(`{{{text}}}`, this.props);
  }
}
