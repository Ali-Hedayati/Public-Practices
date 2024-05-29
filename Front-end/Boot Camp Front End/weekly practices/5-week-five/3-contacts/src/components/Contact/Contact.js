import React from "react";

const Contact = (props) => {
  return (
    <div data-testid="contact" className="contacts-list__item">
      <div>
        <h2 data-testid="fName">First Name: {props?.personFirstName}</h2>
        <h2 data-testid="lName">Last Name: {props?.personLastName}</h2>
      </div>

      <div>
        <span data-testid="email" className="email">
          {props.personEmail}
        </span>
      </div>

      <div>
        <p data-testid="city">City: {props?.personCity}</p>
        <input
          data-testid="checkbox"
          type="checkbox"
          // add needed props
          onClick={props?.personSelected}
          personـid={props?.personListID}
        />
      </div>
    </div>
  );
};

export default Contact;
