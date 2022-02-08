import React, { lazy, Suspense } from "react";
import PreLoader from "./components/partials/PreLoader";
import PageBorders from "./components/partials/PageBorders";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import BgVideo from "./components/partials/BgVideo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./components/pages/Home/Home"));
const FilterType = lazy(() => import("./components/pages/Filter/FilterType"));
const List = lazy(() => import("./components/pages/games/List"));
const GameDetail = lazy(()=>import("./components/pages/games/GameDetail"))

const App = () => {
  return (
    <>
      <Router>
        <BgVideo />
        <PageBorders />
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="games/:type" element={<FilterType />} />
            <Route path="games/:type/:slug/:id" element={<List />} />
            <Route path="game/detail/:id" element={<GameDetail />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
};

export default App;
