import { Block } from '../../utils';
import styles from './styles.module.scss';

export interface ISeparatorProps {
  className?: string;
}

export class Separator extends Block<ISeparatorProps> {
  constructor(props: ISeparatorProps) {
    super('div', props);
  }

  init() {
    const { className } = this.props;

    this.getContent()!.setAttribute(
      'class',
      `${styles.separator} ${className}`
    );
  }
}
