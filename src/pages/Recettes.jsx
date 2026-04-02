import { useState } from 'react'
import recettes from '../data'
import RecetteCard from '../components/RecetteCard'
import SearchBar from '../components/SearchBar'
import styles from './Recettes.module.css'

function Recettes() {
  const [search, setSearch] = useState('')

  const recettesFiltrees = recettes.filter(r =>
    r.nom.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className={styles.container}>
      <h1 className={styles.titre}>Toutes les recettes</h1>
      <SearchBar value={search} onChange={setSearch} className={styles.search} />
      <div className={styles.grille}>
        {recettesFiltrees.length === 0
          ? <p className={styles.vide}>Aucune recette trouvée 😕</p>
          : recettesFiltrees.map(recette => (
            <RecetteCard key={recette.id} recette={recette} />
          ))
        }
      </div>
    </main>
  )
}

export default Recettes