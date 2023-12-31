import React from "react";
import { useState, lazy, Suspense } from "react";

import { Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <QueryClientProvider client={queryClient}>
      {/* Suspense=> this will work with lazy and when we need those things this will call them */}
      <Suspense
        fallback={
          <div className="loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        }
      >
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
