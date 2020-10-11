import React from "react";
import PropTypes from "prop-types";
import {TypeHousing} from "../../const.js";

const returnsPercentage = (number) => Math.round(number) * 20;

const OfferCardScreen = ({offer}) => {
  return (
    <article className="cities__place-card place-card">
      {offer.premium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`img/` + offer.photos[1]} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: returnsPercentage(offer.rating) + `%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.header}</a>
        </h2>
        <p className="place-card__type">{TypeHousing[offer.type]}</p>
      </div>
    </article>
  );
};

OfferCardScreen.propTypes = {
  offer: PropTypes.shape({
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
    }).isRequired
  }).isRequired
};

export default OfferCardScreen;
