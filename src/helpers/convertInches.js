// src/helpers/convertInches.js
export const convertInchesToLargestUnit = (inches) => {
  const miles = Math.floor(inches / 63360);
  const remainingInchesAfterMiles = inches % 63360;

  const feet = Math.floor(remainingInchesAfterMiles / 12);
  const remainingInches = remainingInchesAfterMiles % 12;

  return { miles, feet, remainingInches };
};
