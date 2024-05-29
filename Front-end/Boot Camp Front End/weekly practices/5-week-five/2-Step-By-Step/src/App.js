import "./App.css";
import Information from "./components/Informations";
import Details from "./components/Details";
import Summary from "./components/Summary";
import { useState } from "react";

function App() {
  // TODO declate step state using useState
  const [steps, setsteps] = useState(0);
  const [prevDisabled, setprevDisabled] = useState(true);
  const [nextDisabled, setnextDisabled] = useState(false);
  const [InformationsClass, setInformationsClass] = useState("current-step");
  const [detailsClass, setdetailsClass] = useState("");
  const [SummaryClass, setSummaryClass] = useState("");

  // TODO declare formValues state using useState
  // {
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   gender: "",
  // }
  const [fitstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setgender] = useState("Male");

  // TODO handleChangeValues function
  function componentsConditionalRendering() {
    if (steps === 0)
      return (
        <Information
          firstNameChange={firstNameChange}
          LastNameChange={LastNameChange}
        />
      );
    else if (steps === 1)
      return <Details PhoneChange={PhoneChange} GenderChange={GenderChange} />;
    else
      return (
        <Summary
          fitstName={fitstName}
          lastName={lastName}
          phone={phone}
          gender={gender}
        />
      );
  }

  function firstNameChange(event) {
    setfirstName(event.target?.value);
  }
  function LastNameChange(event) {
    setlastName(event.target?.value);
  }
  function PhoneChange(event) {
    setphone(event.target?.value);
  }
  function GenderChange(event) {
    setgender(event.target?.value);
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <div
            className={`card__header-item ${InformationsClass}`} /*add current-step class*/
          >
            Informations
          </div>
          <div
            className={`card__header-item ${detailsClass} `} /*add current-step class*/
          >
            Details
          </div>
          <div
            className={`card__header-item ${SummaryClass}`} /*add current-step class*/
          >
            Summary
          </div>
        </div>
        <div className="card__body">{componentsConditionalRendering()}</div>
        <div className="card__footer">
          <button
            className="btn-prev"
            /* button disabled on specefic status & onClick event */
            disabled={prevDisabled}
            onClick={() => {
              if (steps === 2) {
                setsteps(steps - 1);
                setnextDisabled(false);
                setSummaryClass("");
                setdetailsClass("current-step");
              } else if (steps === 1) {
                setsteps(steps - 1);
                setprevDisabled(true);
                setdetailsClass("");
                setInformationsClass("current-step");
              }
            }}
          >
            prev
          </button>
          <button
            className="btn-next"
            /* button disabled on specefic status & onClick event */
            disabled={nextDisabled}
            onClick={() => {
              if (steps === 0) {
                setsteps(steps + 1);
                setprevDisabled(false);
                setdetailsClass("current-step");
              } else if (steps === 1) {
                setsteps(steps + 1);
                setnextDisabled(true);
                setSummaryClass("current-step");
              }
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
