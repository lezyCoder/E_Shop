import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Card = ({ item, key }) => {
  const { title, price, images, thumbnail, id } = item;

  const navigate = useNavigate();

  const handleForward = (id) => {
    console.log("id", id);
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="group border w-full flex items-center flex-col relative cursor-pointer overflow-hidden bg-yellow-50"
      key={key}>
      <div className="w-full flex justify-center h-70  p-1 transition-opacity duration-300 group-hover:opacity-30">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="product-details text-center text-black transition-opacity duration-300 group-hover:opacity-30">
        <h2 className="text-lg font-light">{title}</h2>
        <p className="text-sm font-extralight">${price}</p>
      </div>

      <div
        className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        onClick={() => handleForward(item.id)}>
        <button className="bg-transparent text-white border-b transition flex items-center justify-center gap-2">
          View Product <IoMdArrowForward className="mt-1" />
        </button>
      </div>
    </div>
  );
};

export default Card;
