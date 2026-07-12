import UserContext from '../Context/UserContext'
import { useContext } from 'react'
import styles from './User.module.css'

export default function User() {
  const { user, setUser, x } = useContext(UserContext)

  function changeUser(e) {
    setUser({
      ...user,
      name: e.target.value,
    })
  }

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Profile</p>
        <h1>User</h1>
        <p className={styles.lead}>
          Edit the name below — it updates live via React Context across the app.
        </p>
      </header>

      <div className={styles.layout}>
        <article className={styles.card}>
          <div className={styles.avatar} aria-hidden="true">
            {user.name?.charAt(0)?.toUpperCase() || '?'}
          </div>
          <dl className={styles.meta}>
            <div>
              <dt>Name</dt>
              <dd>{user.name}</dd>
            </div>
            <div>
              <dt>Age</dt>
              <dd>{user.age}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{user.email}</dd>
            </div>
            <div>
              <dt>Context x</dt>
              <dd>{x}</dd>
            </div>
          </dl>
        </article>

        <article className={styles.formCard}>
          <h2>Edit name</h2>
          <label className={styles.field} htmlFor="user-name">
            Display name
            <input
              id="user-name"
              type="text"
              placeholder="Enter a name"
              value={user.name}
              onChange={changeUser}
            />
          </label>
          <p className={styles.hint}>Changes sync instantly to Posts and the rest of the app.</p>
        </article>
      </div>
    </section>
  )
}
