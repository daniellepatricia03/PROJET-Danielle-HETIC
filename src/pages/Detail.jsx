import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import recettes from '../data'
import styles from './Detail.module.css'

function Detail() {
  const { id } = useParams()
  const [recette, setRecette] = useState(null)

  useEffect(() => {
    const trouvee = recettes.find(r => r.id === parseInt(id))
    setRecette(trouvee)
  }, [id])

  if (!recette) {
    return (
      <main className={styles.container}>
        <h1>Recette introuvable 😕</h1>
        <Link to="/recettes" className={styles.retour}>Retour aux recettes</Link>
      </main>
    )
  }

  return (
    <main className={styles.container}>
      <Link to="/recettes" className={styles.retour}>← Retour aux recettes</Link>
      <h1 className={styles.titre}>{recette.nom}</h1>
      <img src={recette.image} alt={recette.nom} className={styles.image} />

      <div className={styles.infos}>
        <span className={styles.badge}>⏱️ Préparation : {recette.tempsPrep} min</span>
        <span className={styles.badge}>🔥 Cuisson : {recette.tempsCuisson} min</span>
        <span className={styles.badge}>⭐ Difficulté : {recette.difficulte}</span>
        <span className={styles.badge}>🍽️ Portions : {recette.portions}</span>
      </div>

      <h2 className={styles.sectionTitre}>Ingrédients</h2>
      <ul className={styles.ingredients}>
        {recette.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className={styles.sectionTitre}>Instructions</h2>
      <ol className={styles.instructions}>
        {recette.instructions.map((etape, index) => (
          <li key={index}>{etape}</li>
        ))}
      </ol>
    </main>
  )
}

export default Detail