const pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(pet, { animal: "Dog", name: "Mat", breed: "MiXed" }),
    React.createElement(pet, { animal: "Cat", name: "Matio", breed: "Unique" }),
    React.createElement(pet, { animal: "Horse", name: "Mo", breed: "African" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
