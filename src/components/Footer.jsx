import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenu}>
        <div className={styles.logo}>🍳 DanyCook</div>
        <p className={styles.texte}>Des recettes pour tous, avec amour ❤️</p>
        <div className={styles.liens}>
          <Link to="/">Accueil</Link>
          <Link to="/recettes">Recettes</Link>
          <Link to="/favoris">Favoris</Link>
          <Link to="/apropos">À propos</Link>
        </div>
        <p className={styles.copy}>© 2026 DanyCook — Tous droits réservés</p>
      </div>
    </footer>
  )
}

export default Footer