import { useState } from 'react'
import styles from './StatusBadge.module.css'

function StatusBadge({ isActive }) {
  const [showBadge, setShowBadge] = useState(isActive)

  return (
    <div className={styles.wrap}>
      <span className={`${styles.badge} ${showBadge ? styles.active : styles.inactive}`}>
        <span className={styles.dot} />
        {showBadge ? 'Active' : 'Inactive'}
      </span>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setShowBadge((v) => !v)}
      >
        Change status
      </button>
    </div>
  )
}

export default StatusBadge
