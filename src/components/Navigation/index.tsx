import React from 'react'
import cn from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { Theme } from 'src/features/theme'

import styles from './index.module.scss'

const values = [
  {
    key: '',
    name: 'Home',
  }, {
    key: 'test',
    name: 'Test',
  },
]


const Navigation: React.FC = () => {
  const { pathname } = useLocation()

  const active = ((x) => (Array.isArray(x) ? x[0] : ''))(pathname.match(/[a-z]+/))

  return (
    <header className={styles.root}>
      <nav>
        <ul className={styles.list}>
          {values.map(({ key, name }) => (
            <li
              key={key}
              className={cn(styles.item, { [styles.active]: active === key })}
            >
              <Link to={`/${key}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Theme className={styles.theme} />
    </header>
  )
}

export default Navigation
