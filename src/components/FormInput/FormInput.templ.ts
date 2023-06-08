import styles from './FromInput.module.scss'

export default `
<div class="${styles.formInput}">
    <label for={{ inputID }}>{{ label }}</label>
    <input class="{{ className }}" type="{{ type }}" placeholder={{ label }} id="{{ inputID }}"/>
</div>
`
