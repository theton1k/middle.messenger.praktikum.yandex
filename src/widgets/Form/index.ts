import styles from './styles.module.scss';
import template from './template.ts';
import { Block } from '../../utils';

export interface IFormProps {
  block: Block;
  events?: {
    submit?: (e: SubmitEvent) => void;
    blur?: (e: SubmitEvent) => void;
  };
}

export class Form extends Block<IFormProps> {
  constructor(props: IFormProps) {
    super('form', props);
  }

  init() {
    this.getContent()!.setAttribute('class', `${styles.form}`);

    const inputs = this.getContent()!.getElementsByTagName('input');

    const onSubmit = (e: SubmitEvent) => {
      e.preventDefault();

      const consoleData: Record<string, string> = {};

      for (let i = 0; i < inputs.length; i++) {
        consoleData[inputs[i].name] = inputs[i].value;
        inputs[i].focus();
        inputs[i].blur();
      }
      console.log(consoleData);
    };

    if (!this.props.events?.submit) {
      this.props.events = {
        submit: onSubmit,
      };
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}
