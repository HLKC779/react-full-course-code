import styles from './Button.module.css'

function Button({ variant = 'primary', children, onClick }) {
  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
