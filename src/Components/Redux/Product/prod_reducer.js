import {INCR, DECR} from "./prod_action";

let intialState = {
  img: "https://images.macrumors.com/article-new/2022/05/Beyond-iPhone-13-Feature-2.jpg",
  product_name: "I Phone x12",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  price: 150000,
  qty: 1,
};

let prodReducer = (state = intialState, action) => {
  switch (action.type) {
    case INCR:
      return {...state, qty: state.qty + 1};
    case DECR:
      return {...state, qty: state.qty - 1};
    default:
      return state;
  }
};

export {prodReducer};
