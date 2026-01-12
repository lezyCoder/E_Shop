import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../Slices/cartSlice";
import { MdOutlineStarOutline } from "react-icons/md";
const ProductDetails = () => {
  // taking id from the  url (return string)
  const { id } = useParams();

  // dispatch for the action
  const dispatch = useDispatch();


  // taking product state from the store
  const { items, isloading, error } = useSelector((state) => state.product);

  // console.log("productDetails", items);
  const product = items.find((item) => Number(id) === item.id);

  // const product = items[id];
  // console.log("id from URL:", id, typeof id);
  // console.log("items:", items);
  // console.log("product:", product);

  return (
    <>
      {isloading && (
        <p className="text-purple-300 text-center text-2xl">
          Loading product...
        </p>
      )}

      {product && (
        <div className="border border-gray-700 rounded product-details-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 p-6 min-h-[80vh]">
          {/* Left - Product Image */}
          <div className="left flex items-center justify-center p-4 bg-yellow-50">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-w-full max-h-150 object-contain"
            />
          </div>

          {/* Right - Product Info */}
          <div className="right p-4 flex flex-col justify-between">
            <div className="product-info space-y-4">
              <h1 className="text-2xl font-semibold">{product.title}</h1>
              <p className="text-xl font-bold text-purple-600">
                ${product.price}
              </p>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-thin text-purple-600 flex items-center gap-2 bg-amber-300 w-16 text-center rounded px-1">
                {product.rating}<MdOutlineStarOutline />
              </p>
            </div>

            <button
              className="mt-6 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 cursor-pointer transition w-full"
              onClick={() => dispatch(addToCart(product))}>
              Add to cart
            </button>

            {/* Rating information here  */}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
