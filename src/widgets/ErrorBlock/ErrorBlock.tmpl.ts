import styles from './ErrorBlock.module.scss';

export default `
<div class=${styles.wrapper}>
  <p class=${styles.errorCode}>{{ errorCode }}</p>
  <p class=${styles.description}>{{ description }}</p>
  {{> Navlink className="${styles.action}" href='/main' text='Назад к чатам' }}
</div>
`;
