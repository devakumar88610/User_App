import React from "react";
import {Navbar} from "./Components/Navbar";
import Product from "./Components/ProductComp/Product";
import {Provider} from "react-redux";
import {store} from "./Components/Redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Product />
      </Provider>
    </div>
  );
};

export default App;
