import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Products from "./components/Pages/Products";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import ProductDetails from "./components/Pages/ProductDetails";
import Cart from "./components/Pages/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
};

export default App;
