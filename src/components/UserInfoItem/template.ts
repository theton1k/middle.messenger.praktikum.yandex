import styles from './styles.module.scss';

export default `
  <div class="${styles.textWrapper}">
    <label for="{{ inputName }}" class="${styles.fieldName}">{{ label }}</label>
    <input value="{{ value }}" class="${styles.fieldValue}" 
      {{#if disabled}}
       disabled
      {{/if}}
      type="{{ type }}" name={{ inputName }} />
  </div>
    {{{separator}}}
`;
