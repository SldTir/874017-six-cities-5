import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import RoomScreen from "../room-screen/room-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";

const App = ({placesCount, offers, revocationList}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            placesCount={placesCount}
            offers={offers}
            revocationList={revocationList}
          />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            offers={offers.filter((element) => element.favorites === true)}
          />
        </Route>
        <Route exact path="/offer/:id" render = {(props) => (
          <RoomScreen
            offers={offers}
            revocationList={revocationList}
            id={props.match.params.id}
          />
        )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string.isRequired),
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    bedroomsCount: PropTypes.number.isRequired,
    maxNumberGuests: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired,
    welfareItem: PropTypes.arrayOf(PropTypes.string.isRequired),
    informationAboutHost: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
    }).isRequired,
    favorites: PropTypes.bool.isRequired,
  })).isRequired,
  revocationList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          date: PropTypes.instanceOf(Date).isRequired,
          reviewText: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
  })).isRequired
};

export default App;
