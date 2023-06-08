import styles from './Button.module.scss'
export default `
    <button type="{{ type }}" class="${styles.defaultButton} {{ className }}]} {{ className }}" id="{{ id }}">{{ text }}</button>
`
