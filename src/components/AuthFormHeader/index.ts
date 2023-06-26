import { Block } from '../../utils';
import styles from './styles.module.scss';

export interface IAuthFormHeaderProps {
  headerText: string;
}

export default class AuthFormHeader extends Block<IAuthFormHeaderProps> {
  constructor(props: IAuthFormHeaderProps) {
    super('h2', props);
  }

  init() {
    this.getContent()?.setAttribute('class', styles.header);
  }

  render() {
    return this.compile(`{{ headerText }}`, this.props);
  }
}
