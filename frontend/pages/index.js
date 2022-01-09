import Head from "next/head"
import ProductsList from "../components/ProductsList"
import { getProducts } from "../utils/api"
import { getCategories } from "../utils/api"
import CategoryButtons from "../components/CategoryButtons"


const HomePage = ({ products , categories}) => {
  return (
    <div> 
      <CategoryButtons categories={categories} />
      <ProductsList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } }
}

export default HomePage
