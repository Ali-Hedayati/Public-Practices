import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, { animal: "Dog", name: "Mat", breed: "MiXed" }),
//     React.createElement(Pet, { animal: "Cat", name: "Matio", breed: "Unique" }),
//     React.createElement(Pet, { animal: "Horse", name: "Mo", breed: "African" }),
//   ]);
// };

const App = () => {
  return (<div>
    <h1>Adop me</h1>
    <Pet name="Mat" animal="Dog" breed="Mixed" />
    <Pet name="Matio" animal="Cat" breed="Unique" />
    <Pet name="Mo" animal="Horse" breed="African" />
  </div>)
};

const container = document.getElementById("root");
const root = createRoot(container);
//root.render(React.createElement(App));
root.render(<App />);
