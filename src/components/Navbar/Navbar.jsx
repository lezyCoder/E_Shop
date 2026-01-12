import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchProducts } from "../Axios/axios";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";

// For Active class
const navClass = ({ isActive }) =>
  isActive ? "text-purple-600 font-semibold bg-base-100" : "";

const Navbar = () => {
  const [searchProduct, setSearchProduct] = useState("");

  // Handlling the search input
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(searchProduct)
    // Searching   the products from the api

    try {
      const data = await fetchProducts(searchProduct);
      console.log(data); // API response
    } catch (error) {
      console.error(error);
    }
    // Resetting it after search
    setSearchProduct("");
  };

  const cartItems = useSelector((state) => state.cart);
//   console.log("cartState", cartItems);

  const Navigate = useNavigate();

  return (
    <div className="navbar bg-neutral px-10 shadow-sm">
      <div className="navbar-start">
        <NavLink className="btn btn-ghost text-xl text-purple-600" to="/">
          E Shop
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className={navClass}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </form>

        <div className="dropdown dropdown-end flex items-center gap-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          <div className="cart-icon relative flex items-center ">
            <HiOutlineShoppingCart
              className="text-purple-400 text-2xl"
              onClick={() => Navigate("/cart")}
            />

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li>
              <a>
                Profile <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
