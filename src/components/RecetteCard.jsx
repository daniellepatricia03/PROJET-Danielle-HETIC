import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './RecetteCard.module.css'

function RecetteCard({ recette }) {
  const ids = JSON.parse(localStorage.getItem('favoris') || '[]')
  const [isFavori, setIsFavori] = useState(ids.includes(recette.id))

  const toggleFavori = (e) => {
    e.preventDefault()
    const ids = JSON.parse(localStorage.getItem('favoris') || '[]')
    let nouveaux
    if (isFavori) {
      nouveaux = ids.filter(id => id !== recette.id)
    } else {
      nouveaux = [...ids, recette.id]
    }
    localStorage.setItem('favoris', JSON.stringify(nouveaux))
    setIsFavori(!isFavori)
  }

  return (
    <div className={styles.card}>
      <img src={recette.image} alt={recette.nom} className={styles.image} />
      <button
        className={`${styles.favori} ${isFavori ? styles.favoriActif : ''}`}
        onClick={toggleFavori}
      >
        {isFavori ? '❤️' : '🤍'}
      </button>
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