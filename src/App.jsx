import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Home"
import Footer from "./components/Footer/Footer"
import Layout from "./components/Layout/Layout"

const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  )
}

export default App