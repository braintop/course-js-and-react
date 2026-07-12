import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import styles from './Post.module.css'

export default function Post() {
  const { user } = useContext(UserContext)
  const { theme } = useContext(ThemeContext)

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Feed</p>
        <h1>Posts</h1>
        <p className={styles.lead}>
          Author details come from shared UserContext. The current theme is{' '}
          <strong className={styles.themeTag}>{theme}</strong>.
        </p>
      </header>

      <article className={styles.post}>
        <div className={styles.postTop}>
          <div className={styles.avatar} aria-hidden="true">
            {user.name?.charAt(0)?.toUpperCase() || '?'}
          </div>
          <div>
            <h2>{user.name}</h2>
            <p className={styles.meta}>
              Age {user.age} · {user.email}
            </p>
          </div>
        </div>
        <p className={styles.body}>
          Hello from the posts page. This content updates whenever you change the
          profile name on the User page — no prop drilling needed.
        </p>
        <footer className={styles.footer}>
          <span className={styles.chip}>Context</span>
          <span className={styles.chip}>Theme: {theme}</span>
        </footer>
      </article>
    </section>
  )
}
