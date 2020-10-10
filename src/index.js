import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import revocationList from "./mocks/reviews";

const Settings = {
  PLACES_COUNT: 163,
};

ReactDOM.render(
    <App
      placesCount={Settings.PLACES_COUNT}
      offers={offers}
      revocationList={revocationList}
    />,
    document.querySelector(`#root`)
);
