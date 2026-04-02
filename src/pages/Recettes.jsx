import { useState } from 'react'
import recettes from '../data'
import RecetteCard from '../components/RecetteCard'
import SearchBar from '../components/SearchBar'
import styles from './Recettes.module.css'

const categories = ['Toutes', 'Plat', 'Dessert', 'Salade', 'Soupe', 'Végétarien', 'Poisson', 'Italien']

function Recettes() {
  const [search, setSearch] = useState('')
  const [visible, setVisible] = useState(5)
  const [categorie, setCategorie] = useState('Toutes')

  const recettesFiltrees = recettes.filter(r => {
    const matchSearch = r.nom.toLowerCase().includes(search.toLowerCase())
    const matchCategorie = categorie === 'Toutes' || r.categorie === categorie
    return matchSearch && matchCategorie
  })

  const recettesVisibles = recettesFiltrees.slice(0, visible)

  return (
    <main className={styles.container}>
      <h1 className={styles.titre}>Toutes les recettes</h1>
      <SearchBar value={search} onChange={(val) => { setSearch(val); setVisible(5) }} />

      <div className={styles.filtres}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.filtre} ${categorie === cat ? styles.filtreActif : ''}`}
            onClick={() => { setCategorie(cat); setVisible(5) }}
          >
            {cat}
          </button>
        ))}
      </div>

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