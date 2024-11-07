import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeProduct,
} from "../App/counter/slice";
import { Link } from "react-router-dom";

export default function Bag() {
    const [total, SetTotal] = useState(0);
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const handleTotalPrice = () =>{
        let total = 0;
        cart.map((product) => {
            total += product.price * product.quantity;
        })
        SetTotal(total);
    }

    useEffect(() => {
        handleTotalPrice();
    })

  return (
    <div className="">
      <div className="p-4 md:p-5 space-y-4 mx-auto justify-center items-center ">
        {cart.length > 0 ? (
          <div className="max-w-4xl mx-auto space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row gap-2 sm:gap-8 justify-evenly items-center p-4 border border-gray-300 rounded-2xl"
              >
                <div id="image">
                  <img
                    src={product.img}
                    alt="Product image"
                    className="size-24 sm:size-44"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {product.author}
                  </p>
                  <p className="text-sm text-black font-bold mb-2">
                    MRP : &#8377; {product.price}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    incl. of taxes
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => dispatch(decrementQty(product.id))}
                      className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 "
                    >
                      -
                    </button>
                    <button
                      disabled={true}
                      className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                    >
                      {product.quantity}
                    </button>
                    <button
                      onClick={() => dispatch(incrementQty(product.id))}
                      className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 "
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:gap-4 items-center justify-center">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    SubTotal: &#8377; {product.price * product.quantity}
                    </h2>
                    <button data-modal-hide="static-modal" type="button" onClick={() => dispatch(removeProduct(product.id))} className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-full text-sm px-5 py-2.5">Remove</button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Total Price:
              </h2>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                &#8377; {total}
              </h2>
            </div>
          </div>
        ) : (
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              No items in the cart.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
