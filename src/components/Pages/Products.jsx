import Card from "../ProductCard/Card"

const Products = () => {
  
  


  return (
    <div className="w-full flex flex-col gap-8 ">
      <div>
        <h1 className="text-5xl text-center text-purple-400">Products </h1>
      </div>
      <div className="products-container p-4  ">
        <div className="cards  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Products