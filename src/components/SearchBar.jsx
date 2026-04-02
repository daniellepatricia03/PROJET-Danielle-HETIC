import styles from './SearchBar.module.css'

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Rechercher une recette..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.search}
    />
  )
}

export default SearchBar