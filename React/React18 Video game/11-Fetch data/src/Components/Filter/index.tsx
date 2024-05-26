import categories from "../../categories";

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
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default Filter;
