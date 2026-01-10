import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Card = () => {

    const navigate = useNavigate();

    const handleForward = () => {
        navigate('/product/id')
    }
    return (
        <div className="group border w-full flex items-center flex-col relative cursor-pointer overflow-hidden">
            <div className="w-full flex justify-center h-70 bg-purple-50 p-1 transition-opacity duration-300 group-hover:opacity-30" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjoVfzNU8usrHdm-TDpXcT5dnBjOTrvFsQ&s" alt="image title " />
            </div>
            <div className="product-details text-center text-purple-300 transition-opacity duration-300 group-hover:opacity-30" >
                <h2 className="text-lg font-light">Product name </h2>
                <p className="text-sm font-extralight">price</p>
            </div>

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button className="bg-transparent text-white border-b transition flex items-center justify-center gap-2" onClick={handleForward}>
                    View Product <IoMdArrowForward className="mt-1"/>
                </button>
            </div>
        </div>
    )
}

export default Card