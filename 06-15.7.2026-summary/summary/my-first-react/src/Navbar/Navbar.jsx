import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <span>🌸</span>
                Flower Shop
                <span>🌺</span>
            </div>
            <div className={styles.links}>
                <Link className={styles.link} to="/">🏠 Home</Link>
                <Link className={styles.link} to="/products">🌷 Products</Link>
                <Link className={styles.link} to="/about">🌼 About</Link>
                <Link className={styles.link} to="/add-product">🌹 Add Product</Link>
            </div>
        </nav>
    )
}
