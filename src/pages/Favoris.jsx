import styles from './Favoris.module.css'
import RecetteCard from '../components/RecetteCard'
import { Link } from 'react-router-dom'
import recettes from '../data'

function Favoris() {
  const ids = JSON.parse(localStorage.getItem('favoris') || '[]')
  const favoris = recettes.filter(r => ids.includes(r.id))

  return (
    <main className={styles.container}>
      <h1 className={styles.titre}>Mes favoris ❤️</h1>

      {favoris.length === 0 ? (
        <div className={styles.vide}>
          <p>Vous n'avez pas encore de recettes favorites.</p>
          <Link to="/recettes" className={styles.btn}>Découvrir les recettes</Link>
        </div>
      ) : (
        <div className={styles.grille}>
          {favoris.map(recette => (
            <RecetteCard key={recette.id} recette={recette} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Favoris