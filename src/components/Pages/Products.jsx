import { useEffect } from "react"
import Card from "../Cards/Card"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { fetchItems } from "../Slices/productSlice"

const Products = () => {

  // retrving the items loading and error from the product state
  const { items, isloading, error } = useSelector((state) => state.product) // product -> coming from the store (i.e. reducer)

  // console.log("items", items)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  // const products = items.data.data; // storing all the products 

  return (
    <div className="w-full flex flex-col gap-8 ">
      <div>
        <h1 className="text-5xl text-center text-purple-400">Products </h1>
      </div>
      <div className="products-container p-8">
        {
          isloading && <p className="text-purple-300 text-center text-2xl">Loading products...</p>
        }
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            items.length > 0 && items.map((item) => <Card item={item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Products