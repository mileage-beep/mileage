// src/helpers/getDynamicAnalogy.js
export const getDynamicAnalogy = (feet, miles, inches) => {
  if (miles > 0) {
    if (miles <= 1) return "that's the length of 1 Airbus A380";
    if (miles <= 2) return "that's the length of 2 Airbus A380s";
    if (miles <= 3) return "that's the length of 3 Airbus A380s";
    if (miles <= 4) return "that's the length of 4 Airbus A380s";
    if (miles <= 5) return "that's the length of 5 Airbus A380s";
    if (miles <= 10) return `that's the length of ${miles} Airbus A380s`;
    if (miles <= 100)
      return `that's the length of ${miles.toFixed(1)} Airbus A380s`;
  }

  if (feet > 0) {
    if (feet <= 10)
      return `that's ${Math.ceil(feet / 2)} 2L bottle${feet > 2 ? "s" : ""}`;
    if (feet <= 50)
      return `that's ${Math.ceil(feet / 10)} large patio umbrella${
        feet > 10 ? "s" : ""
      }`;
    if (feet <= 1000)
      return `that's ${Math.ceil(feet / 53)} semi trailer${
        feet > 53 ? "s" : ""
      }`;
    if (feet <= 5280)
      return `that's ${Math.ceil(feet / 1083)} Eiffel Tower${
        feet > 1083 ? "s" : ""
      }`;
  }

  if (inches > 0) {
    const ratio = inches / 6;
    if (ratio < 1) {
      return `that's ${ratio.toFixed(1)} of a dollar bill${
        ratio === 1 || ratio < 1 ? "" : "s"
      }`;
    } else {
      return `that's ${Math.floor(ratio)} and 1/2 dollar bill${
        ratio === 1 ? "" : "s"
      }`;
    }
  }

  return "";
};
