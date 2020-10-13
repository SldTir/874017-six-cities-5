import React from "react";
import PropTypes from "prop-types";
import {returnsPercentage, formatDate} from "../../utils";

const ReviewsItemScreen = ({feedback}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src= {`img/` + feedback.avatar} width="54" height="54" alt="Reviews avatar"></img>
        </div>
        <span className="reviews__user-name">
          {feedback.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: returnsPercentage(feedback.rating) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {feedback.reviewText}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formatDate(feedback.date)}</time>
      </div>
    </li>
  )
};

export default ReviewsItemScreen;
