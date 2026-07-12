import { useState } from 'react'
import styles from './Card.module.css'

export default function Card() {
  const [emphasized, setEmphasized] = useState(false)

  return (
    <div className={`${styles.card} ${emphasized ? styles.emphasized : ''}`}>
      <p className={styles.label}>Interactive card</p>
      <h2>My Card</h2>
      <p className={styles.body}>
        Click the button to morph padding, radius, and elevation — all driven by
        CSS classes.
      </p>
      <button type="button" className={styles.button} onClick={() => setEmphasized((v) => !v)}>
        {emphasized ? 'Reset style' : 'Change card style'}
      </button>
    </div>
  )
}
