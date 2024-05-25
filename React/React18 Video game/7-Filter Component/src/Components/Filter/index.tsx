interface FilterType {
  search: (selected: string) => void;
}

const Filter = ({ search }: FilterType) => {
  return (
    <>
      <label>Choose from categories:</label>
      <select
        className="form-select"
        id="category"
        onChange={(event) => search(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Clothes">Clothes</option>
        <option value="Pens">Pens</option>
        <option value="Phones">Phones</option>
        <option value="Watches">Watches</option>
      </select>
    </>
  );
};

export default Filter;
