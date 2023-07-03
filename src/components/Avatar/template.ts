import styles from './styles.module.scss';
import emptyImg from '../../assets/images/pickAvatar.png';

export default `
<div class="${styles.avatar} {{className}}" >
  {{#if src}}
      <input 
         type="image" 
         id="image" 
         alt="avatar"
         src="{{src}}"
         class="${styles.avatarPicker}" 
         name={{ inputName }} 
         {{#if disabled}}
            disabled
         {{/if}}
      >
      {{else}}
        {{#if disabled}}
        
          {{else}}
            <input 
             type="image" 
             id="image" 
             alt="avatar"
             src="${emptyImg}"
             class="${styles.emptyAvatarPicker}" 
             name={{ inputName }} 
             {{#if disabled}}
                disabled
           {{/if}}
        >
        {{/if}}
  {{/if}}
</div>
{{#if nickname}}
  <p class="${styles.nickname}">{{nickname}}</p>
{{/if}}
`;
