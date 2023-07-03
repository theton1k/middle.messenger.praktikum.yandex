import styles from './styles.module.scss';

export default `
  <p class=${styles.errorCode}>{{ errorCode }}</p>
  <p class=${styles.description}>{{ description }}</p>
  {{{navlink}}}
`;
