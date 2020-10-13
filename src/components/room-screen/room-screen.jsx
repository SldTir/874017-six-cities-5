import React from "react";
import PropTypes from "prop-types";
import ReviewsItemScreen from "../reviews-item-screen/reviews-item-screen";
import OfferCardScreen from "../offer-card-screen/offer-card-screen";
import {returnsPercentage} from "../../utils";
import {TypeHousing} from "../../const";

const getAvatarStar = (value) => value ? `property__avatar-wrapper--pro` : ``;

const RoomScreen = ({offers, revocationList, id}) => {
  const idNumber = Number(id.split(`:`)[1]) - 1;
  const targetOffer = offers[idNumber];
  const targetReviews = revocationList[idNumber].reviews;
  debugger;
  const otherOffers = offers.filter((offer) => offer.id !== (idNumber + 1));

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {targetOffer.photos.map((element) =>
                <React.Fragment key={element.id}>
                  <div className="property__image-wrapper">
                    <img className="property__image" src={`img/` + element} alt="Photo studio"></img>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {targetOffer.premium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {targetOffer.header}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: returnsPercentage(targetOffer.rating) + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{targetOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {TypeHousing[targetOffer.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {targetOffer.bedroomsCount}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {targetOffer.maxNumberGuests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{targetOffer.cost}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {targetOffer.welfareItem.map((element) =>
                    <li key={element.id} className="property__inside-item">
                      {element}
                    </li>
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ` + getAvatarStar(targetOffer.informationAboutHost.super) + ` user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={`img/` + targetOffer.informationAboutHost.avatar} width="74" height="74" alt="Host avatar"></img>
                  </div>
                  <span className="property__user-name">
                    {targetOffer.informationAboutHost.name}
                  </span>
                </div>
                <div className="property__description">
                  {targetOffer.description.map((element) =>
                    <p key={targetOffer.id} className="property__text">
                      {element}
                    </p>
                  )}
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{targetReviews.length}</span></h2>
                <ul className="reviews__list">
                  {targetReviews.map((element) => <ReviewsItemScreen key={idNumber} feedback={element}/>)}
                </ul>
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"></input>
                    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"></input>
                    <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"></input>
                    <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"></input>
                    <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"></input>
                    <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
                  </div>
                  <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {otherOffers.map((element) => <OfferCardScreen key={element.id} offer={element}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

RoomScreen.propTypes = {
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
    }).isRequired
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

export default RoomScreen;
