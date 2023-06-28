import styles from './styles.module.scss';
import { Block } from '../../../utils';

import template from './template.ts';
import { Form, BlockWrapper } from '../../../widgets';
import {
  AuthFormHeader,
  Button,
  AuthFormInput,
  IAuthFormInputInputProps,
  IButtonProps,
} from '../../../components';

export interface IAuthBaseProps {
  inputs: IAuthFormInputInputProps[];
  buttons: IButtonProps[];
  header: string;
}

export class AuthBase extends Block<IAuthBaseProps> {
  constructor(props: IAuthBaseProps) {
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
