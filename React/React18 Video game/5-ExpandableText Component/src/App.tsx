import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ExpandableText from "./Components/Expandable Text";

function App() {
  return (
    <>
      <ExpandableText maxChars={40}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iusto
        ad, beatae libero veritatis esse repellat ullam doloribus necessitatibus
        debitis eos magni eligendi tempora voluptates in fugiat reprehenderit,
        cumque nulla error quisquam? Aliquid dolore sequi provident incidunt
        deserunt unde fugit consequatur, ad numquam perspiciatis nesciunt,
        voluptatem explicabo id mollitia asperiores ex! Accusantium animi ipsum
        illo harum incidunt id dolorem ex optio, blanditiis repellat beatae,
        deleniti ratione dolor ipsa quasi voluptatem accusamus aspernatur vel
        earum reiciendis adipisci magnam numquam repudiandae suscipit. Assumenda
        enim tempore, quis sapiente ut id aliquam quae odit eveniet ipsa eius,
        adipisci ullam perspiciatis ex. Mollitia, delectus expedita!
      </ExpandableText>
    </>
  );
}

export default App;
