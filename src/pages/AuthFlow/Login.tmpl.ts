export default `
<form class="authflow-form">
    {{> FormHeader text='Вход' inputID='login' }}
    {{> Input label='Логин' inputID='login' }}
    {{> Input label='Пароль' inputID='password' type='password' }}
    <div class="button-block">
        {{> Button type='button' text='Войти' id='loginBtn' }}
        {{> Button type='button' className='clear' text='Нет аккаунта?' id='navToSignUpBtn' }}
    </div>
</form>
`
