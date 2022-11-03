import React from "react";
import {incrementAction, decrementAction} from "../Redux/Product/prod_action";
import {useDispatch, useSelector} from "react-redux";

const Product = () => {
  let dispatch = useDispatch();
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
      <div className='container w-50'>
        <div className='card'>
          <img src={product.img} alt='' />
          <div className='card-body align-item-center text-center'>
            <h3 className='card-title'>{product.product_name}</h3>
            <p className='card-text'>{product.description}</p>
            <h5 className='card-text mt-5 mb-5'>$ {product.price}</h5>
            <h5>
              <i
                className='fa fa-minus-circle mr-2'
                onClick={decrementHandler}
              ></i>
              {product.qty}
              <i
                className='fa fa-plus-circle ml-2'
                onClick={incrementHandler}
              ></i>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
