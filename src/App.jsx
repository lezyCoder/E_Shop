import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Home"
import Footer from "./components/Footer/Footer"
import Layout from "./components/Layout/Layout"
import Products from "./components/Pages/Products"
import Contact from "./components/Pages/Contact"
import About from "./components/Pages/About"


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
        </Routes>
      </Layout>
      <Footer />
    </>
  )
}

export default App