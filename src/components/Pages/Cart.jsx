import { useSelector } from "react-redux";
import CartCard from "../Cards/CartCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const hasItems = cartItems.length > 0;

  const shippingPrice = hasItems ? 5 : 0;
  const platformFee = hasItems ? 2 : 0;

  const itemsTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const finalPrice = Math.ceil(itemsTotal + shippingPrice + platformFee);

  return (
    <div className="max-w-6xl mx-auto p-6 border border-gray-700">
      <h1 className="font-thin text-3xl text-purple-400">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="mt-4 text-gray-400 text-xl text-center ">Cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Cart Items */}
          <div className="col-span-2 rounded p-6 shadow-sm">
            {cartItems.map((cart) => (
              <CartCard key={cart.id} cart={cart} />
            ))}
          </div>

          {/* Summary */}
          <div className="col-span-1 border max-h-80 border-gray-700 rounded flex flex-col justify-between gap-4 p-6 shadow-sm md:sticky md:top-6">
            {/* Coupon */}
            <div className="coupon flex flex-col gap-2">
              <label className="text-gray-600">Enter Promo Code</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-1 p-2 border border-gray-600 outline-none"
                />
                <button
                  className="p-2 bg-purple-500 w-24 text-white cursor-not-allowed opacity-60"
                  disabled>
                  Apply
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

              <div className="space-y-2 text-gray-300 font-thin">
                <div className="flex justify-between">
                  <p>Shipping cost</p>
                  <p>${shippingPrice}</p>
                </div>

                <div className="flex justify-between">
                  <p>Platform Fee</p>
                  <p>${platformFee}</p>
                </div>

                <div className="flex justify-between font-bold">
                  <p>Total</p>
                  <p>${finalPrice}</p>
                </div>
              </div>

              <button
                className="w-full mt-4 text-sm p-2 bg-purple-500 hover:bg-purple-600 disabled:opacity-50"
                disabled={!hasItems}
                onClick={() => navigate("/checkout")}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
