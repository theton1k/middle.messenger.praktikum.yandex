export default `
<form class="authflow-form">
    {{> FormHeader text='Регистрация' inputID='login' }}
    {{> Input label='Почта' inputID='email' type='email' }}
    {{> Input label='Логин' inputID='login' }}
    {{> Input label='Имя' inputID='first_name' }}
    {{> Input label='Фамилия' inputID='second_name' }}
    {{> Input label='Телефон' inputID='phone' type='tel' }}
    {{> Input label='Пароль' inputID='password' type='password' }}
    <div class="button-block">
        {{> Button type='button' text='Зарегистрироваться' id='signUpBtn' }}
        {{> Button type='button' className='clear' text='Войти' id='navToLoginBtn' }}
    </div>
</form>
`
