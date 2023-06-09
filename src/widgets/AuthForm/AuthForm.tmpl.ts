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
<div >
 <H2>pages</H2>
    <ul>
       <li>
        <a href="/login">login</a>
      </li>
      <li>
        <a href="/sign-up">signUp</a>
      </li> 
      <li>
        <a href="/main">main</a>
      </li>
       <li>
        <a href="/profile">profile</a>
      </li>
       <li>
        <a href="/change-password">change password</a>
      </li>
       <li>
        <a href="/change-data">change data</a>
      </li> 
      <li>
        <a href="/server-error">500</a>
      </li>
        <li>
        <a href="/asd">404</a>
      </li>
    </ul>
</div>
`
