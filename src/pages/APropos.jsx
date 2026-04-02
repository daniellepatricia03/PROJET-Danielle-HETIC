import styles from './APropos.module.css'

function APropos() {
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.titre}>À propos de <span className={styles.accent}>DanyCook</span> 🍳</h1>
        <p className={styles.sousTitre}>Une application créée avec passion pour les amoureux de la cuisine</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitre}>Notre histoire</h2>
        <p className={styles.texte}>
          DanyCook est née d'une passion pour la cuisine maison, simple et savoureuse.
          Notre objectif est de rendre la cuisine accessible à tous, débutants comme confirmés,
          avec des recettes claires et détaillées.
        </p>
      </div>

      <div className={styles.valeurs}>
        <div className={styles.valeur}>
          <span className={styles.icon}>🥗</span>
          <h3>Recettes saines</h3>
          <p>Des recettes équilibrées et variées pour prendre soin de vous</p>
        </div>
        <div className={styles.valeur}>
          <span className={styles.icon}>👩‍🍳</span>
          <h3>Pour tous niveaux</h3>
          <p>Des recettes faciles aux plus élaborées, il y en a pour tout le monde</p>
        </div>
        <div className={styles.valeur}>
          <span className={styles.icon}>❤️</span>
          <h3>Fait avec amour</h3>
          <p>Chaque recette est sélectionnée avec soin pour vous régaler</p>
        </div>
      </div>
    </main>
  )
}

export default APropos