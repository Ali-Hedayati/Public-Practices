import Buttons from "./Components/button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Alert from "./Components/Alert";
import { useState } from "react";
import Heart from "./Components/Heart";

function App() {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(false);

  function toggle() {
    setLike(!like);
  }

  return (
    <>
      {show && <Alert onClose={() => setShow(false)}>hi</Alert>}

      <Buttons color="danger" onClick={() => setShow(true)}>
        <span>click me</span>
      </Buttons>
      <Heart liked={like} onClick={() => toggle()} />
    </>
  );
}

export default App;

// another approach:
// function App() {
//   const [show, setShow] = useState(false);
//   const [like, setLike] = useState(false);

//   // function toggle() {
//   //   setLike(!like);
//   // }

//   return (
//     <>
//       {show && <Alert onClose={() => setShow(false)}>hi</Alert>}

//       <Buttons color="danger" onClick={() => setShow(true)}>
//         <span>click me</span>
//       </Buttons>
//       <Heart liked={like} onClick={() => console.log("like")} setLike={setLike} />
//     </>
//   );
// }