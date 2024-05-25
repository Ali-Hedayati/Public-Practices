import Buttons from "./Components/button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <Alert onClose={() => setShow(false)}>hi</Alert>}

      <Buttons color="danger" onClick={() => setShow(true)}>
        <span>click me</span>
      </Buttons>
    </>
  );
}

export default App;

// another approach:
//  <Alert onClose={() => setShow(false)} show={show}>
//  hi
// </Alert>
