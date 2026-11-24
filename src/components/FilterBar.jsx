const FILTERS = ['all', 'active', 'done']

function FilterBar({ filter, onChange }) {
  return (
    <div className="filter-bar">
      {FILTERS.map((name) => (
        <button
          key={name}
          className={name === filter ? 'selected' : ''}
          onClick={() => onChange(name)}
        >
          {name}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
