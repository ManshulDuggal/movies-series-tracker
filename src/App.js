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
      <Nav />
      <Route path="/" exact>
        <Home />
        <TvSeries />
      </Route>
      <Route path={["/movie/:id", "/movie"]} exact>
        <Home />
      </Route>

      <Route path={["/movie/:id", "/series"]} exact>
        <TvSeries />
      </Route>
    </div>
  );
}

export default App;
