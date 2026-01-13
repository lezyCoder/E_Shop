import { useSelector } from "react-redux"
import CartCard from "../Cards/CartCard"

const Cart = () => {
    const cartItems = useSelector(state => state.cart)
    // console.log("Cart", cartItems)
    return (
        <div className="max-w-6xl mx-auto p-6 border border-gray-700">
            <h1 className="font-thin text-3xl text-purple-400 ">Your Cart </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Cart Items (Wider) */}
                <div className="col-span-2  rounded p-6 shadow-sm  ">
                    {
                        cartItems && cartItems.map((cart) => {
                            return (
                                <CartCard cart={cart} />
                            )
                        })
                    }
                </div>

                {/* Summary (Narrower) */}

                <div className="col-span-1 border  border-gray-700 rounded  flex flex-col justify-between p-6 shadow-sm md:sticky md:top-6">
                    <div className="coupon">

                        <label htmlFor="" className="text-gray-600 ">Enter Promo Code</label>
                        <form action="">
                            <input type="text" placeholder="Promo code" className="p-2 border outline-none" />
                            <button className="p-2 bg-purple-500 cursor-pointer  w-16 hover:bg-purple-600 ">Apply</button>
                        </form>
                    </div>
                    <div className="order-summary">
                        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                        <p>Shipping cost -  $5</p>
                        <p>Sales Tax - 0 </p>
                        <p>Total - </p>
                        <button className="w-fit text-sm p-2 bg-purple-500 hover:bg-purple-600 cursor-pointer rounded">
                            Checkout
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart
