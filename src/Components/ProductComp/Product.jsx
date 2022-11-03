import React from "react";
import {incrementAction, decrementAction} from "../Redux/Product/prod_action";
import {useDispatch, useSelector} from "react-redux";

const Product = () => {
  let dispatch = useDispatch;
  let product = useSelector((state) => {
    return state;
  });

  let incrementHandler = () => {
    dispatch(incrementAction());
  };
  let decrementHandler = () => {
    dispatch(decrementAction());
  };
  return (
    <>
      <div className='container'>
        <div className='card'>
          <img src={product.img} alt='' />
          <div className='card-body align-item-center text-center'>
            <h3 className='card-title'>{product.product_name}</h3>
            <p className='card-text'>{product.description}</p>
            <h6 className='card-text mt-2 mb-2'>{product.price}</h6>
            <p>
              <i
                className='fa fa-minus-circle mr-2'
                onClick={decrementHandler}
              ></i>
              {product.qty}
              <i
                className='fa fa-plus-cirle ml-2'
                onClick={incrementHandler}
              ></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
