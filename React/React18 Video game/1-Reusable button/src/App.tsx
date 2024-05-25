import Buttons from "./Components/button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
    
      <Buttons color="danger" onClick={() => console.log("hi")}>
        <span>click me</span>
      </Buttons>
    </>
  );
}

export default App;
