import { INCREASE_QUANTITY, DECREASE_QUANITIY } from "./types";
export const productQuantity = (action, name) => {
  return (dispatch) => {
    console.log("The action is: ", action, "The product name is: ", name);
  };
};
