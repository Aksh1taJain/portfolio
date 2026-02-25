import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

import { LoadingProvider } from "./context/LoadingProvider";

// Lazy Imports
const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const Play = lazy(() => import("./pages/Play"));

const Loader = () => <div>Loading...</div>;

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <MainContainer>
                  <CharacterModel />
                </MainContainer>
              }
            />

            <Route
              path="/myworks"
              element={<MyWorks />}
            />

            <Route
              path="/play"
              element={<Play />}
            />
          </Routes>
        </Suspense>
      </LoadingProvider>

      <Analytics />
    </BrowserRouter>
  );
};

export default App;