import React from "react";

import Home from "./pages/Home";

import GlobalStyle from "./components/GlobalStyles";
//router
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path={["/movie/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
