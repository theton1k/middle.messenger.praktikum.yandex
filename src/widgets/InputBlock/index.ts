import styles from './styles.module.scss';
import template from './template.ts';
import { Block, validateInput } from '../../utils';
import { IInputProps, Input } from '../../components';

export interface IInputBlockProps extends IInputProps {
  label?: string;
  error?: string;
  wrapperClassName?: string;
  inputLabelWrapperClassName?: string;
}

export class InputBlock extends Block<IInputBlockProps> {
  constructor(props: IInputBlockProps) {
    super('div', props);
  }

  init() {
    const { label, error, wrapperClassName = '', ...inputProps } = this.props;

    this.getContent()!.setAttribute(
      'class',
      `${styles.wrapper} ${wrapperClassName}`
    );

    this.children.input = new Input({
      ...inputProps,
      events: {
        blur: (e) => {
          const { isValid, error } = validateInput(
            this.props.inputName,
            (e.target as HTMLInputElement).value
          );

          this.props.error = isValid ? '' : error;
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
