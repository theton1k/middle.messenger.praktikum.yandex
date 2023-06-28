import { Block } from '../../utils';
import template from './template.ts';
import { COLORS, FONT_SIZES, FONT_WEIGHT } from '../../theme/config.ts';
import styles from './styles.module.scss';

interface ITextProps {
  text?: string;
  size?: FONT_SIZES;
  color?: COLORS;
  weight?: FONT_WEIGHT;
  className?: string;
}
export default class Text extends Block<ITextProps> {
  constructor(props: ITextProps) {
    super('p', props);
  }

  init() {
    const {
      size = FONT_SIZES.S,
      color = COLORS.Black,
      className = styles.text,
      weight = FONT_WEIGHT.Medium,
    } = this.props;

    this.getContent()!.setAttribute('class', className);

    this.getContent()!.style.fontSize = size;
    this.getContent()!.style.color = color;
    this.getContent()!.style.fontWeight = weight;
  }

  render() {
    return this.compile(template, this.props);
  }
}
