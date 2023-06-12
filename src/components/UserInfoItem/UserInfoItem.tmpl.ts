import styles from './UserInfoItem.module.scss';

export default `
<div class="${styles.userInfoItem} {{ className }}">
  <div class="${styles.textWrapper}">
    <p class="${styles.fieldName}">{{ fieldName }}</p>
    <input value="{{ fieldValue }}" class="${styles.fieldValue}" disabled type="{{ type }}" name={{ name }} />
  </div>
    {{#if separator}}
      {{> Separator }}
    {{/if}}
</div>
`;
