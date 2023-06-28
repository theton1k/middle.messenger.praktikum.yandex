import { IAuthFormProps } from '../../../widgets/AuthForm';
import styles from './styles.module.scss';
import { Block } from '../../../utils';
import AuthFormInput from '../../../components/AuthFormInput';
import Button from '../../../components/Button';
import template from './template.ts';
import Form from '../../../components/Form';
import AuthFormHeader from '../../../components/AuthFormHeader';
import BlockWrapper from '../../../components/BlockWrapper';

export default class AuthBase extends Block<IAuthFormProps> {
  constructor(props: IAuthFormProps) {
    super('div', props);
  }

  init() {
    this.getContent()!.setAttribute('class', styles.wrapper);

    const inputs = this.props.inputs.map((props) => new AuthFormInput(props));

    const buttons = this.props.buttons.map((props) => new Button(props));

    const header = new AuthFormHeader({
      headerText: this.props.header,
    });

    const formContent = new BlockWrapper({
      block: [
        header,
        new BlockWrapper({ block: inputs, className: styles.inputWrapper }),
        new BlockWrapper({ block: buttons, className: styles.buttonsWrapper }),
      ],
      className: styles.formContent,
    });

    this.children.form = new Form({
      block: formContent,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
