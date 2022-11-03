import {createStore} from "redux";
import {prodReducer} from "./Product/prod_reducer";
import {composeWithDevTools} from "@redux-devtools/extension";

let store = createStore(prodReducer, composeWithDevTools());

export {store};
