import styles from './AuthForm.module.scss'

export default `
<form class=${styles.authFlowForm}>
    <h2 class=${styles.header}>{{ headerText }}</h2>
    {{#authFormInputs inputs}}
        {{> FormInput  label=label inputID=inputID }}
    {{/authFormInputs}}
    <div class="${styles.buttonBlock}">
    {{#authFormButtons buttons}}
      {{> Button type='button' className=buttonStyle text=text id=id }}
    {{/authFormButtons}}
    </div>
</form>
`
