// src/helpers/getCarCondition.js
import { carConditions } from "./carConditions";

export const getCarCondition = (score) => {
  const condition = carConditions.find(
    (condition) => condition.score === Math.round(score)
  );
  return condition ? condition.text : "Unknown car condition";
};
