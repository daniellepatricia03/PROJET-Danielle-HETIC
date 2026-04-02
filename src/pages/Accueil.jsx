import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import recettes from '../data'
import RecetteCard from '../components/RecetteCard'
import styles from './Accueil.module.css'

function Accueil() {
  const [recettesAleatoires, setRecettesAleatoires] = useState([])

  useEffect(() => {
    const melangees = [...recettes].sort(() => Math.random() - 0.5)
    setRecettesAleatoires(melangees.slice(0, 3))
  }, [])

  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.titre}>
          Bienvenue sur <span className={styles.accent}>DanyCook</span> 🍳
        </h1>
        <p className={styles.sousTitre}>
          Découvrez des recettes délicieuses et faciles à réaliser
        </p>
        <Link to="/recettes" className={styles.btn}>
          Voir toutes les recettes →
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

      <div className={styles.suggestion}>
        <h2 className={styles.suggestionTitre}>✨ Recettes du moment</h2>
        <div className={styles.suggestionGrille}>
          {recettesAleatoires.map(recette => (
            <RecetteCard key={recette.id} recette={recette} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Accueil