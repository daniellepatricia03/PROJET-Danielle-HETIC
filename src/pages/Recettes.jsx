import { useState } from 'react'
import recettes from '../data'
import RecetteCard from '../components/RecetteCard'
import SearchBar from '../components/SearchBar'
import styles from './Recettes.module.css'

function Recettes() {
  const [search, setSearch] = useState('')
  const [visible, setVisible] = useState(5)

  const recettesFiltrees = recettes.filter(r =>
    r.nom.toLowerCase().includes(search.toLowerCase())
  )

  const recettesVisibles = recettesFiltrees.slice(0, visible)

  return (
    <main className={styles.container}>
      <h1 className={styles.titre}>Toutes les recettes</h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className={styles.grille}>
        {recettesFiltrees.length === 0
          ? <p className={styles.vide}>Aucune recette trouvée 😕</p>
          : recettesVisibles.map(recette => (
            <RecetteCard key={recette.id} recette={recette} />
          ))
        }
      </div>

      {visible < recettesFiltrees.length && (
        <div className={styles.voirPlus}>
          <button onClick={() => setVisible(v => v + 5)} className={styles.btnVoirPlus}>
            Voir plus
          </button>
        </div>
      )}
    </main>
  )
}

export default Recettes