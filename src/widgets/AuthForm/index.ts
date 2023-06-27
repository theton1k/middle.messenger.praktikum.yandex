import { Block } from '../../utils';
import AuthFormHeader from '../../components/AuthFormHeader';
import AuthFormInput, {
  IAuthFormInputInputProps,
} from '../../components/AuthFormInput';
import Button, { IButtonProps } from '../../components/Button';
import styles from './styles.module.scss';
import template from './template.ts';

export interface IAuthFormProps {
  header: string;
  inputs: IAuthFormInputInputProps[];
  buttons: IButtonProps[];
}

export default class AuthForm extends Block<IAuthFormProps> {
  constructor(props: IAuthFormProps) {
    super('form', props);
  }

  init() {
    this.getContent()?.setAttribute('class', styles.formWrapper);
    this.children.header = new AuthFormHeader({
      headerText: this.props.header,
    });

    this.children.inputs = this.props.inputs.map(
      (input) => new AuthFormInput(input)
    );

    this.children.buttons = this.props.buttons.map(
      (props) => new Button(props)
    );
  }

  render() {
    return this.compile(template, this.props);
  }
}

// <H2>(FOR REVIEWER)</H2>
// <nav>
// <ul>
//   <li>
//     <a href="/login">login</a>
// </li>
// <li>
// <a href="/sign-up">signUp</a>
// </li>
// <li>
// <a href="/main">main</a>
// </li>
// <li>
// <a href="/profile.ts">profile.ts</a>
// </li>
// <li>
// <a href="/change-password">change password</a>
// </li>
// <li>
// <a href="/change-data">change data</a>
// </li>
// <li>
// <a href="/server-error">500</a>
// </li>
// <li>
// <a href="/asd">404</a>
//   </li>
//   </ul>
//   </nav>
//   </div>
