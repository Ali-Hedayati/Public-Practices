// change import at top
import { useEffect, useState } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const SearchParams = () => {
  // useState(n), n => meghdar avalie ast va faghat avalesh run mishe
  //location => moteghayeri ke meghdar toosh hast
  //setLocation => function baraye set kardane value
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];
  // const breeds = ["persian", "amaican", "germany", "itly"];
  const [breeds] = useBreedList(animal);
  // add to the other useStates inside component at top
  // useState([])=> avalesh yekbar run mishe age nazari harbar ke yek taghiri ijad koni hey request mizane
  const [pets, setPets] = useState([]);

  //in yek function ast ke chizhaye pardazeshi gheir az render ro hndle mikone mesle daryaft az server ya khandan etelaat az hafeze
  //Be ebarati chizaei ke tool mikashe ro mizarim vGARNA SITE HANG MIKONE TA ETELAAT BEGIRE.
  useEffect(() => {
    //requestPets()=> in function miyad va az server data migire. va []
    requestPets();
  }, []);

  //Function az noe async hast, in function movazi baghie chiza ejra mishe va barname sabr nenikone ke tamoom she
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    //Chon barname sabr nemikone ta ejra tamoom she va maloom nist ke kei tamoom she,
    //Ma nemitoonim meghdari ke inja daryaft mishe ro bedim be ghesmati ke element haye safhe ro render mikone
    //ta in etelaat ro toosh bezare
    //Pas chikar mikonim? miyam az tooye in function, element ha ro update mikonim.
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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

      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
