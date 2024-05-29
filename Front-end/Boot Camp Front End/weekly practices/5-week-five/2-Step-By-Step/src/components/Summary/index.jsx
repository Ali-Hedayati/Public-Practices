const Summary = (porps) => {
  return (
    <div className="form" data-testid="summary">
      <p data-testid="firstName">First Name : {porps?.fitstName}</p>
      <p data-testid="lastName">Last Name : {porps?.lastName}</p>
      <p data-testid="phone">Phone : {porps?.phone}</p>
      <p data-testid="gender">Gender : {porps?.gender}</p>
    </div>
  );
};

export default Summary;
