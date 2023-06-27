import { IAuthFormProps } from '../../../widgets/AuthForm';
import styles from './styles.module.scss';
import { Block } from '../../../utils';
import AuthFormInput from '../../../components/AuthFormInput';
import Button from '../../../components/Button';
import template from './template.ts';
import Form from '../../../components/Form';
import AuthFormHeader from '../../../components/AuthFormHeader';

export default class AuthBase extends Block<IAuthFormProps> {
  constructor(props: IAuthFormProps) {
    super('div', props);
  }

  init() {
    this.getContent()?.setAttribute('class', styles.wrapper);

    const inputs = this.props.inputs.map((props) => new AuthFormInput(props));

    const buttons = this.props.buttons.map((props) => new Button(props));

    this.children.form = new Form({
      inputs,
      buttons,
      buttonClass: styles.buttonBlock,
    });

    this.children.header = new AuthFormHeader({
      headerText: this.props.header,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
