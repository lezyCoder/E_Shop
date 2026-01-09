import { Routes, Route } from "react-router-dom"
import Home from "./Home"
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </>
  )
}

export default App