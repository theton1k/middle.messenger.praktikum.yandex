import styles from './FormInput.module.scss';

export default `
<div class="${styles.formInput}">
  <label for={{ inputName }}>{{ label }}</label>
  <input class="{{ className }}" type="{{ type }}" placeholder={{ label }} name={{ inputName }} />
</div>
`;
