import { useState } from "react";

const SearchParams = () => {
  // useState(n), n => meghdar avalie ast va faghat avalesh run mishe
  //location => moteghayeri ke meghdar toosh hast
  //setLocation => function baraye set kardane value
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];
  const breeds = ["persian", "amaican", "germany", "itly"];
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            //e.target khode input hast
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />

            {Animals.map((animal) => (
              // value => be server mide
              // key => nemidonam ?
              <option key={animal} value={animal}>
                {/* {animal => neshon mide} */}
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            disabled={breeds.length === 0}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />

            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
