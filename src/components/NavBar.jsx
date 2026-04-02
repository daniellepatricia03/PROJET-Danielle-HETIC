import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>🍳 DanyCook</span>
      <ul className={styles.links}>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>Accueil</NavLink></li>
        <li><NavLink to="/recettes" className={({ isActive }) => isActive ? styles.active : ''}>Recettes</NavLink></li>
        <li><NavLink to="/apropos" className={({ isActive }) => isActive ? styles.active : ''}>À propos</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar