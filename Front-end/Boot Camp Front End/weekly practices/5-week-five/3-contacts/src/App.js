import React, { useState } from "react";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [people, setPeople] = useState([
    {
      id: 1,
      first_name: "Kennie",
      last_name: "Garth",
      email: "kgarth0@ovh.net",
      city: "Megati Kelod",
    },
    {
      id: 2,
      first_name: "Free",
      last_name: "Eltringham",
      email: "feltringham1@weebly.com",
      city: "Haradzishcha",
    },
    {
      id: 3,
      first_name: "Isadore",
      last_name: "Valintine",
      email: "ivalintine2@issuu.com",
      city: "El Benque",
    },
    {
      id: 4,
      first_name: "Annora",
      last_name: "Neilus",
      email: "aneilus3@uol.com.br",
      city: "Uchaly",
    },
    {
      id: 5,
      first_name: "Tabbie",
      last_name: "Rizzini",
      email: "trizzini4@cpanel.net",
      city: "Pora",
    },
  ]);
  const [ID, setID] = useState([]);
  function handelSelected(event) {
    if (event.target.checked) {
      setID([...ID, event.target.getAttribute("personـid")]);
    } else {
      let remove = ID.filter(function (removedID) {
        return removedID !== event.target.getAttribute("personـid");
      });
      setID([remove]);
    }
  }

  function deletePeople() {
    setPeople((p) => {
      return p.filter((person) => {
        return !ID.includes(person.id.toString());
      });
    });

    // setPeople(people.filter((person) => !ID.includes(person.id.toString())));
    setID([]);
  }
  return (
    <div data-testid="app" className="app">
      {/* ----------------------------------left side------------------------------------- */}

      <section className="contacts-section">
        <div className="contacts-list">
          {people.map((person) => {
            return (
              <Contact
                key={person?.id}
                personFirstName={person?.first_name}
                personLastName={person?.last_name}
                personEmail={person?.email}
                personCity={person?.city}
                personListID={person?.id}
                personSelected={handelSelected}
              />
            );
          })}
        </div>
      </section>

      {/* ----------------------------------right side------------------------------------- */}

      <section className="cta-section">
        <p className="text-2xl">Selected:</p>
        <p data-testid="ID">{ID.join(",")}</p>
        <button
          data-testid="deleteBtn"
          className="cta"
          // should trigger an event when clicked
          onClick={deletePeople}
        >
          Delete Selected Items
        </button>
      </section>
    </div>
  );
};

export default App;
