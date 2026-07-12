import Card from './Card'
import StatusBadge from './StatusBadge'
import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Course Hub</p>
        <h1>Build. Style. Ship.</h1>
        <p className={styles.lead}>
          A small React playground with routing, context, and a theme switch —
          polished with clean CSS modules.
        </p>
        <StatusBadge isActive={true} />
      </header>
      <div className={styles.grid}>
        <Card />
        <article className={styles.tip}>
          <h2>Quick tip</h2>
          <p>
            Use the navbar to jump between pages, edit the user profile, and
            toggle light / dark mode. Theme colors flow through CSS variables.
          </p>
        </article>
      </div>
    </section>
  )
}
