import React, { Fragment } from "react";
import { render } from "react-dom";
import Piece from "./Piece";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Piece />
      </Fragment>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
