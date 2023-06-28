import { Block } from '../../utils';
import styles from './styles.module.scss';
import template from './template.ts';
import ChatHeader from '../../components/ChatHeader';
import ChatMessage from '../../components/ChatMessage';
import ChatFooter from '../../components/ChatFooter';

export interface IChatProps {
  selectedChat?: string;
}

export default class Chat extends Block<IChatProps> {
  constructor(props: IChatProps) {
    super('div', props);
  }

  init() {
    this.getContent()!.setAttribute('class', styles.wrapper);

    this.children.chatHeader = new ChatHeader({
      avatar: '',
      nickname: 'Вадим',
    });
    this.children.chatMessages = [
      new ChatMessage({
        isCurrentUserMessage: false,
        message:
          'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
      }),
      new ChatMessage({ message: 'Круто!', isCurrentUserMessage: true }),
    ];
    this.children.chatFooter = new ChatFooter();
  }

  render() {
    return this.compile(template, this.props);
  }
}
