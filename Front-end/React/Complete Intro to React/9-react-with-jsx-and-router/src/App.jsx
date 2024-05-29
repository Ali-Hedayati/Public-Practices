import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
/// in import pain baraye adressdehye safahate.
import {Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
//root.render(React.createElement(App));
root.render(<App />);
