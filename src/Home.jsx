import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "./components/Cards/Card";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const navigate = useNavigate();

  // taking product state from the store
  const { items, isloading, error } = useSelector((state) => state.product);

  // Random index for the similar Prodcuts
  const startIndex =
    items.length > 4 ? Math.floor(Math.random() * (items.length - 4)) : 0;

  const randomNumber = Math.floor(Math.random() * startIndex);
  // console.log("random", randomNumber)
  const similarProducts = items.slice(randomNumber, randomNumber + 4); // +4  because we are showing 4 cards

  if (!similarProducts) return null;

  return (
    <div className="">
      <div className="hero min-h-screen rounded bg-yellow-50">
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl ">
            <h1 className="mb-5 text-5xl font-bold text-gray-900">
              High Quality{""}
              <span className="text-rotate text-5xl">
                <span className="justify-items-center">
                  <span>Products</span>
                  <span>Branding</span>
                </span>
              </span>
            </h1>
            <p className="mb-5 font-thin text-gray-800">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              className="text-md p-2 bg-purple-500 hover:bg-purple-600 cursor-pointer "
              onClick={() => navigate("/products")}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <section className="similar-product border border-gray-700 rounded mt-2 p-6 ">
        <div className="header flex justify-between items-center text-purple-400">
          <h1 className="font-thin  leading-relaxed  text-2xl ">
            {" "}
            Our Products{" "}
          </h1>
          <FaArrowRightLong />
        </div>
        <div className="cards grid grid-cols-4 gap-2 mt-10 border p-2 border-gray-700 rounded ">
          {similarProducts.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
