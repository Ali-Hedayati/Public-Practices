const Information = (props) => {
  return (
    <div className="form" data-testid="informations">
      <label htmlFor="firstName">First Name</label>
      <input
        data-testid="firstName"
        type="text"
        name="firstName"
        id="firstName" /* TODO */
        onChange={props?.firstNameChange}
        value={props?.fitstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        data-testid="lastName"
        type="text"
        name="lastName"
        id="lastName" /* TODO */
        onChange={props?.LastNameChange}
        value={props?.lastName}
      />
    </div>
  );
};

export default Information;
