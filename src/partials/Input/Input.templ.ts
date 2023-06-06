import './index.scss'

export default `
<div class="input-block">
    <label for={{ inputID }}>{{ label }}</label>
    <input class="{{ className }}" type="{{ type }}" placeholder={{ label }} id="{{ inputID }}"/>
</div>
`
