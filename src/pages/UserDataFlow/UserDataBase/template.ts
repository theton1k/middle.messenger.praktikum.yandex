import styles from './styles.module.scss';

export default `
  {{{sidebarNav}}}
  <form class="${styles.content}">
     {{> Avatar className="${styles.avatar}" inputName="avatar"}}
     {{#if nickname}}
      {{{nickname}}}
     {{/if}}
     {{{inputs}}}
     <div class="${styles.buttonWrapper}">
        {{{buttons}}}
     </div>
  </form>
`;
