import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from './Context/ThemeContext'
import styles from './Navbar.module.css'

export function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext)
  const isDark = theme === 'dark'

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand}>
          Course<span>Hub</span>
        </NavLink>

        <nav className={styles.nav} aria-label="Main">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            User
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Posts
          </NavLink>
        </nav>

        <button
          type="button"
          className={styles.themeBtn}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className={styles.themeIcon}>{isDark ? '☀' : '☾'}</span>
          <span className={styles.themeLabel}>{isDark ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </header>
  )
}
