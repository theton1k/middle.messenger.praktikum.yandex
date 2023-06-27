import styles from './styles.module.scss';

export default `
<div class="${styles.avatarWrapper}">
  {{{avatar}}}
  <p class="${styles.nickname}">{{{nickname}}}</p>
</div>
<button class="${styles.dots}">
  <div class="${styles.dot}"></div>
  
  <div class="${styles.dot}"></div>
  
  <div class="${styles.dot}"></div>
</button>
`;
