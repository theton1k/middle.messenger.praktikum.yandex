import { Block } from '../../../utils';
import AuthForm, { IAuthFormProps } from '../../../widgets/AuthForm';
import styles from './styles.module.scss';

export default class SignUp extends Block<IAuthFormProps> {
  constructor(props: IAuthFormProps) {
    super('div', props);
  }

  init() {
    this.getContent()?.setAttribute('class', styles.wrapper);

    this.children.content = new AuthForm({
      header: this.props.header,
      inputs: this.props.inputs,
      buttons: this.props.buttons,
    });
  }

  render() {
    return this.compile('{{{content}}}', this.props);
  }
}
