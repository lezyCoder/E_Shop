import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const CartCard = ({ cart }) => {

    console.log("card", typeof cart[0])
    const { thumbnail, title, rating, price, quantity } = cart;

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-5 h-40 mt-2 border border-gray-700 rounded-md shadow-sm hover:shadow-md transition">

                {/* Image */}
                <div className="col-span-1 flex items-center justify-center border-r border-gray-700">
                    <img
                        className="h-32 w-32 object-contain"
                        src={thumbnail}
                        alt={title}
                    />
                </div>

                {/* Product Info */}
                <div className="col-span-3 flex flex-col justify-between p-4">
                    <div className="space-y-1">
                        <p className="font-medium text-white">{title}</p>
                        <p className="text-sm text-gray-500">${price}</p>
                        <p className="text-sm text-yellow-500">{rating}</p>
                    </div>
                    <div className="actions-btns flex gap-2">
                        <button className="w-fit text-sm text-gray-600 hover:underline">Save for later </button>
                        <button className="w-fit text-sm text-gray-600 hover:underline">Move to wishlist</button>
                        <button className="w-fit text-sm text-red-300 hover:underline">
                            Remove
                        </button>
                    </div>
                </div>

                {/* Quantity */}
                <div className="col-span-1 flex items-center justify-center gap-3 text-2xl text-purple-600">
                    <button className="hover:scale-110 transition">
                        <CiCircleMinus />
                    </button>

                    <span className="text-xl font-medium text-white">{quantity}</span>

                    <button className="hover:scale-110 transition">
                        <CiCirclePlus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
