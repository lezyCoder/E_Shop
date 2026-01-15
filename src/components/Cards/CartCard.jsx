import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Slices/cartSlice";
import { useDispatch } from "react-redux";

const CartCard = ({ cart }) => {
  const dispatch = useDispatch();
  const { thumbnail, title, rating, price, quantity, id } = cart;

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:grid md:grid-cols-5 border border-gray-700 rounded-md shadow-sm hover:shadow-md transition p-3 md:p-0">
        {/* Image */}
        <div className="md:col-span-1 flex items-center justify-center md:border-r border-gray-700">
          <img
            className="h-28 w-28 md:h-32 md:w-32 object-contain"
            src={thumbnail}
            alt={title}
          />
        </div>

        {/* Product Info */}
        <div className="md:col-span-3 flex flex-col justify-between p-2 md:p-4">
          <div className="space-y-1">
            <p className="font-medium text-white text-sm md:text-base">
              {title}
            </p>
            <p className="text-sm text-gray-400">${price}</p>
            <p className="text-sm text-yellow-500">⭐ {rating}</p>
          </div>

          <div className="flex flex-wrap gap-3 mt-3 text-sm">
            <button className="text-gray-500 hover:underline">
              Save for later
            </button>
            <button className="text-gray-500 hover:underline">
              Move to wishlist
            </button>
            <button
              className="text-red-400 hover:underline"
              onClick={() => dispatch(removeFromCart(id))}>
              Remove
            </button>
          </div>
        </div>

        {/* Quantity */}
        <div className="md:col-span-1 flex  items-center justify-center gap-3 text-2xl text-purple-600 mt-3 md:mt-0">
          <button
            className="hover:scale-110 transition"
            onClick={() => dispatch(decreaseQuantity({ id }))}>
            <CiCircleMinus />
          </button>

          <span className="text-lg font-medium text-white">{quantity}</span>

          <button
            className="hover:scale-110 transition"
            onClick={() => dispatch(increaseQuantity({ id }))}>
            <CiCirclePlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
