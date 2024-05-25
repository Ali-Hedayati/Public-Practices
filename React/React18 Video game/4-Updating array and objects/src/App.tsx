import Buttons from "./Components/button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Alert from "./Components/Alert";
import { useState } from "react";
import Heart from "./Components/Heart";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "jon",
    },
  });

  const [food, setFood] = useState({
    name: "pizza",
    ingredients: ["meat"],
  });
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(false);

  function toggle() {
    setLike(!like);
  }

  function changeName() {
    setGame({
      ...game,
      player: {
        name: "jack",
      },
    });
  }

  function addIngredients() {
    setFood({
      ...food,
      ingredients: [...food.ingredients, " and chicken"],
    });
  }

  return (
    <>
      {show && <Alert onClose={() => setShow(false)}>hi</Alert>}

      <Buttons color="danger" onClick={() => setShow(true)}>
        <span>click me</span>
      </Buttons>
      <Heart liked={like} onClick={() => toggle()} />
      <h1>{food.name}</h1>
      <h1>{food.ingredients}</h1>
      <button onClick={addIngredients}>add</button>
    </>
  );
}

export default App;
