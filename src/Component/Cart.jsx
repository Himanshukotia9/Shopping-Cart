// cart.jsx
import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { incrementQty, decrementQty, removeProduct } from '../App/counter/slice';
import { Link } from 'react-router-dom';

export default function Cart({}) {
    const [isOpen, setIsOpen] = useState(false);

    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
        <i
        onClick={toggleModal} 
        className="fa-solid fa-cart-shopping cursor-pointer block"
      ></i>
      {isOpen && (
        <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-2xl max-h-full overflow-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white"><i className="fa-solid fa-circle-check text-green-600 mx-2"></i>
                            Added to Bag
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleModal}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className='p-4 md:p-5 space-y-4 max-h-96 overflow-y-auto'>
                        {cart.length > 0 ? (
                            cart.map((product) => (
                                <div key={product.id} className="flex gap-8">
                                    <div id='image'>
                                        <img src={product.img} alt="Product image" className='size-44'/>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{product.title}</h2>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{product.author}</p>
                                        <p className="text-sm text-black font-bold mb-2">MRP : &#8377; {product.price}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">incl. of taxes</p>
                                        <div className='flex gap-2'>
                                            <button onClick={() => dispatch(decrementQty(product.id))} className='text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 '>-</button>
                                            <button disabled={true} className='py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700'>{product.quantity}</button>
                                            <button onClick={() => dispatch(incrementQty(product.id))} className='text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 '>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                            ) : (
                                <div className="text-center p-8">
                                    <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>No items in the cart.</h2>
                                </div>
                            )
                        }
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex justify-around items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <Link to='/bag'><button data-modal-hide="static-modal" type="button" onClick={toggleModal} className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5">View Bag ( {cart.length} )</button></Link>
                        <button data-modal-hide="static-modal" type="button" className="text-white bg-gray-900 hover:bg-gray-500 font-medium rounded-full text-sm px-5 py-2.5">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  )
}
