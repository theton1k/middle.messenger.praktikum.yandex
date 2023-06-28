import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';
import { Separator } from '../Separator';
import { IInputBlockProps, InputBlock } from '../../widgets';

export interface IUserInfoItemProps extends IInputBlockProps {
  separator: boolean;
}

export class UserInfoItem extends Block<IUserInfoItemProps> {
  constructor(props: IUserInfoItemProps) {
    super('div', props);
  }

  init() {
    const { separator, ...inputProps } = this.props;

    this.getContent()!.setAttribute('class', styles.userInfoItem);

    if (separator) {
      this.children.separator = new Separator({});
    }

    this.children.input = new InputBlock({
      ...inputProps,
      className: styles.input,
      inputLabelWrapperClassName: styles.inputLabelWrapperClassName,
      wrapperClassName: styles.inputWrapper,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
