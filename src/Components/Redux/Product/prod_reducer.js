import {INCR, DECR} from "./prod_action";

let intialState = {
  img: "https://www.apple.com/v/iphone-14-pro/b/images/meta/iphone-14-pro_overview__e2a7u9jy63ma_og.png",
  product_name: "I Phone x12",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  price: 150000,
  qty: 1,
};

let prodReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'INCR':
      return {...state, qty: state.qty + 1};
    case 'DECR':
      return {...state, qty: state.qty - 1};
    default:
      return state;
  }
};

export {prodReducer};
