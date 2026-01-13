import {  useSelector } from "react-redux";
import CartCard from "../Cards/CartCard";
import { useMemo } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  
  // console.log("Cart", cartItems)

  const shippingPrice =  cartItems.length > 0 ? 5 : 0 ;
  const platformFee = cartItems.length > 0 ? 2 : 0;

  const Itemstotal = useMemo(
    () => cartItems.map((cart) => cart.price * cart.quantity),
    [cartItems]
  );
  // console.log("total", Itemstotal);

  const finalPrice = useMemo(
    () =>
      Math.ceil(
        Itemstotal.reduce((acc, current) => acc + current, 0) +
          shippingPrice +
          platformFee
      ),
    [cartItems]
  );
  console.log("finalPrice", finalPrice);

  return (
    <div className="max-w-6xl mx-auto p-6 border border-gray-700">
      <h1 className="font-thin text-3xl text-purple-400 ">Your Cart </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items (Wider) */}
        <div className="col-span-2  rounded p-6 shadow-sm  ">
          {cartItems &&
            cartItems.map((cart) => {
              return <CartCard cart={cart} />;
            })}
        </div>

        {/* Summary (Narrower) */}

        <div className="col-span-1 border max-h-80 border-gray-700 rounded  flex flex-col justify-between gap-4 p-6 shadow-sm md:sticky md:top-6">
          <div className="coupon w-full flex flex-col gap-2">
            <label className="text-gray-600">Enter Promo Code</label>

            <div className="coupon-form flex w-full gap-3">
              <input
                type="text"
                placeholder="Promo code"
                className="flex-1 p-2 border border-gray-600 outline-none "
              />

              <button
                className="p-2 bg-purple-500 cursor-pointer w-24 hover:bg-purple-600 text-white"
                disabled>
                Apply
              </button>
            </div>
          </div>

          <div className="order-summary ">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="cost ">
              <div className="shipping flex justify-between text-gray-300 font-thin space-y-2">
                <p>Shipping cost</p>
                <p>${shippingPrice}</p>
              </div>
              <div className="sales-tax flex justify-between text-gray-300 font-thin space-y-2">
                <p>Platform Fee</p>
                <p>${platformFee}</p>
              </div>
              <div className="total-price flex justify-between text-gray-300 font-thin space-y-2">
                <p>Total </p>
                <p className="font-bold">${finalPrice}</p>
              </div>
            </div>
            <button className="w-full text-sm p-2 bg-purple-500 hover:bg-purple-600 cursor-pointer ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
