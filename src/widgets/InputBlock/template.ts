import styles from './styles.module.scss';

export default `
  <div class="{{inputLabelWrapperClassName}}">
  {{#if label}}
  <label for={{ inputName }}>{{ label }}</label>
   {{/if}}
  {{{input}}}
  </div>
  {{#if error}}
   <p class="${styles.error}">{{error}}</p>
   {{/if}}
`;
