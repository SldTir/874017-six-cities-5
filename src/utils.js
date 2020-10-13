export const returnsPercentage = (number) => Math.round(number) * 20;

export const returnActiveButton = (value) => value ? `place-card__bookmark-button--active` : ``;

export const formatDate = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${Month[month]} ${year}`;
};

const Month = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];
