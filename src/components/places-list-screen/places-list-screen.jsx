import React from "react";
import PropTypes from "prop-types";
import OfferCardScreen from "../offer-card-screen/offer-card-screen";

const PlacesListScreen = ({offers}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <OfferCardScreen
          key={offer.id}
          offer={offer}
        />
      )}
    </div>
  );
};

PlacesListScreen.propTypes = {
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
  })).isRequired
};

export default PlacesListScreen;
