interface Props {
  search: string;
  onSearchChange(value: string): void;
  onCategoryChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

function Filter({ search, onSearchChange, onCategoryChange }: Props) {
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    // we could pass up the whole event object via onSearchChange
    // but passing *only* the value makes the data easier to work with in the parent
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
