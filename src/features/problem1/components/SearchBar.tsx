type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="p1-search-bar">
      <label htmlFor="p1-search" className="p1-search-label">
        Search by name
      </label>
      <input
        id="p1-search"
        type="text"
        placeholder="Type a user name..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
