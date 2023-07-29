import { FC, ReactNode } from 'react'

import styles from './Button.module.css'

type Props = {
  buttonType?: 'button' | 'submit' | 'reset' | undefined,
  children: ReactNode
}

const Button: FC<Props> = ({ buttonType = 'button', children }) => {
  return (
    <button type={buttonType} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
