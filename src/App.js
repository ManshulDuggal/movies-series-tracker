import React from "react";

import Home from "./pages/Home";
import TvSeries from "./pages/TvSeries";
import Nav from "./components/navbar";
import GlobalStyle from "./components/GlobalStyles";
//router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path="/" exact>
        <Nav />
        <Home />
        <TvSeries />
      </Route>
      <Route path={["/movie/:id", "/movie"]} exact>
        <Nav />
        <Home />
      </Route>

      <Route path={["/movie/:id", "/series"]} exact>
        <Nav />
        <TvSeries />
      </Route>
    </div>
  );
}

export default App;
