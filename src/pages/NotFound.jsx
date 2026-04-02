import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.code}>404</div>
      <h1 className={styles.titre}>Page introuvable</h1>
      <p className={styles.texte}>Cette page n'existe pas ou a été déplacée.</p>
      <Link to="/" className={styles.btn}>Retour à l'accueil</Link>
    </main>
  )
}

export default NotFound