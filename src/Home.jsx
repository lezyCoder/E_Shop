import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import Card from "./components/Cards/Card";
import { FaArrowRightLong } from "react-icons/fa6";
import { fetchItems } from "./components/Slices/productSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items, isloading, error } = useSelector(
    (state) => state.product
  );

  // Fetch products only once if not already available
  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchItems());
    }
  }, [dispatch, items.length]);

  // Memoized random products (won't change on every render)
  const similarProducts = useMemo(() => {
    if (items.length <= 4) return items;

    const startIndex = Math.floor(
      Math.random() * (items.length - 4)
    );

    return items.slice(startIndex, startIndex + 4);
  }, [items]);

  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero min-h-screen bg-yellow-50 rounded">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold text-gray-900">
              High Quality{" "}
              <span className="text-purple-500">
                Products
              </span>
            </h1>

            <p className="mb-6 font-light text-gray-700">
              Discover premium products crafted for quality,
              style, and performance.
            </p>

            <button
              className="px-6 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <section className="mt-6 p-6 border border-gray-300 rounded">
        <div className="flex justify-between items-center mb-6 text-purple-500">
          <h2 className="text-2xl font-light">
            Our Products
          </h2>

          <button
            className="flex items-center gap-2 hover:underline"
            onClick={() => navigate("/products")}
          >
            View All <FaArrowRightLong />
          </button>
        </div>

        {/* STATES */}
        {isloading && (
          <p className="text-center font-medium">
            Loading products...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}

        {/* PRODUCTS GRID */}
        {!isloading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {similarProducts.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
