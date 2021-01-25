import { ADD_PRODUCT_BASKET, GET_NUMBER_BASKET } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    KanyeTshirt: {
      name: "Kanye T-Shirt",
      tagName: "kanye",
      price: 15.0,
      numbers: 0,
      inCart: false,
    },
    GeorgeNotFoundHoddie: {
      name: "GeorgeNotFound Hoddie",
      tagName: "gnf",
      price: 50.0,
      numbers: 0,
      inCart: false,
    },
    FlamingoHoodie: {
      name: "Flamingo Hoodie",
      tagName: "d",
      price: 45.0,
      numbers: 0,
      inCart: false,
    },
    GrayHoddie: {
      name: "Gray Hoddie",
      tagName: "a",
      price: 35.0,
      numbers: 0,
      inCart: false,
    },
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NUMBER_BASKET:
      return {
        ...state,
      };
    case ADD_PRODUCT_BASKET:
      let addQuantity = { ...state.products[action.payload] };
      addQuantity.numbers += 1;
      addQuantity.inCart = true;
      console.log(addQuantity);
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: addQuantity,
        },
      };
    default:
      return state;
  }
};
