import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import { useState } from "react";
function App() {
  const [slide, setSlide] = useState(0);
  function ShowIndex(index) {
    if (slide == index) {
      return "activeSlide";
    } else if (index == slide - 1 || (slide == 0 && index == 3)) {
      return "lastSlide";
    } else if (index == slide + 1 || (slide == 3 && index == 0)) {
      return "nextSlide";
    }
  }
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>slider
        </h2>
      </div>
      <div className="section-center">
        {data.map((e, index) => {
          return (
            <article className={ShowIndex(index)}>
              <img className="person-img" src={e.image} />
              <h4>{e.name}</h4>
              <p className="title">{e.title}</p>
              <p className="text">{e.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button
          className="prev"
          aria-label="prev"
          onClick={() => {
            if (slide == 0) {
              setSlide(3);
            } else {
              setSlide(slide - 1);
            }

            // ShowIndex();
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          aria-label="next"
          onClick={() => {
            if (slide == 3) {
              setSlide(0);
            } else {
              setSlide(slide + 1);
            }
            // ShowIndex();
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
