import './searchbar.css'

function SearchBar({ value, onChange }) {
  return (
    <div className="header__form">
      <input
        className="header__input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Sök event..."
        aria-label="Sök"
      />
    </div>
  )
}

export default SearchBar
