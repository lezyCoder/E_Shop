import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../Slices/cartSlice";
import { MdOutlineStarOutline } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import RatingCard from "../Cards/RatingCard";
import Card from "../Cards/Card"


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

  // Random index for the similar Prodcuts 
  const startIndex =
    items.length > 4
      ? Math.floor(Math.random() * (items.length - 4))
      : 0;

  const randomNumber = Math.floor(Math.random() * startIndex);
  // console.log("random", randomNumber)
  const similarProducts = items
    .filter((product) => product.id !== Number(id)) // here id is we get from the params.
    .slice(randomNumber, randomNumber + 4);// +4  because we are showing 4 cards 


  if (!product) return null;

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

            <RatingCard rating={product.rating} reviews={product.reviews} />
          </div>
        </div>
      )}

      {/* Similar Product sections */}
      <section className="similar-product border border-gray-700 rounded mt-2 p-6 ">

        <div className="header flex justify-between items-center text-purple-400">
          <h1 className="font-thin  leading-relaxed  text-2xl "> Our Products </h1>
          <FaArrowRightLong />
        </div>
        <div className="cards grid grid-cols-4 gap-2 mt-10 border p-2 border-gray-700 rounded ">
          {similarProducts.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
