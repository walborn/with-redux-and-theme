import React from 'react'
import cn from 'classnames'

import { useSelector, useDispatch } from 'src/app/hooks'
import { set, selectTheme } from './slice'
import styles from './index.module.scss'

interface Props {
  className: string
}

export const Theme: React.FC<Props> = ({ className }) => {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [ theme ])

  const handleChange = () => dispatch(set(theme === 'dark' ? 'light' : 'dark'))

  return (
    <div
      role="none"
      className={cn(className, styles.toggle, theme === 'dark' ? styles.dark : styles.light)}
      onClick={handleChange}
    />
  )
}
