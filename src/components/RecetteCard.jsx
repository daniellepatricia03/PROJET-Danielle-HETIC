import { Link } from 'react-router-dom'
import styles from './RecetteCard.module.css'

function RecetteCard({ recette }) {
  return (
    <div className={styles.card}>
      <img src={recette.image} alt={recette.nom} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.nom}>{recette.nom}</h2>
        <div className={styles.infos}>
          <span>⏱️ {recette.temps} min</span>
          <span>🍴 {recette.categorie}</span>
          <span>⭐ {recette.difficulte}</span>
        </div>
        <Link to={`/recettes/${recette.id}`} className={styles.btn}>
          Voir la recette
        </Link>
      </div>
    </div>
  )
}

export default RecetteCard