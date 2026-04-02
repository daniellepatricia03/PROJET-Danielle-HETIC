import { Link } from 'react-router-dom'
import styles from './Accueil.module.css'

function Accueil() {
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.titre}>
  Bienvenue sur <span className={styles.accent}>DanyCook</span> 🍳</h1>
        <p className={styles.sousTitre}>
          Découvrez des recettes délicieuses et faciles à réaliser
        </p>
        <Link to="/recettes" className={styles.btn}>
          Voir les recettes →
        </Link>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>🔍</div>
          <h3 className={styles.featureTitre}>Recherche facile</h3>
          <p className={styles.featureTexte}>Trouvez rapidement la recette qu'il vous faut</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>⏱️</div>
          <h3 className={styles.featureTitre}>Temps indiqué</h3>
          <p className={styles.featureTexte}>Chaque recette précise le temps de préparation et cuisson</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>⭐</div>
          <h3 className={styles.featureTitre}>Niveau indiqué</h3>
          <p className={styles.featureTexte}>Des recettes pour tous les niveaux de cuisine</p>
        </div>
      </div>
    </main>
  )
}

export default Accueil