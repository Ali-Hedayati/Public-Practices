import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, { animal: "Dog", name: "Mat", breed: "MiXed" }),
//     React.createElement(Pet, { animal: "Cat", name: "Matio", breed: "Unique" }),
//     React.createElement(Pet, { animal: "Horse", name: "Mo", breed: "African" }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adop me</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
//root.render(React.createElement(App));
root.render(<App />);
