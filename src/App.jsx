import React from "react";
import {Navbar} from "./Components/Navbar";
import {Provider} from "react-redux";
import {store} from "./Components/Redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/MenuList/Home";
import ProductMenu from "./Components/MenuList/ProductMenu";
import Product from "./Components/ProductComp/Product";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        
        <BrowserRouter>
        <Navbar />
        <Product/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="products" element={<ProductMenu/>}/>
        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
