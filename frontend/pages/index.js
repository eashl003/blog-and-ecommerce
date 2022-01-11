import Head from "next/head"
import ProductsList from "../components/ProductsList"
import { getProducts } from "../utils/api"
import { getCategories } from "../utils/api"
import CategoryButtons from "../components/CategoryButtons"
import { getArticles } from "../utils/api"
import { getBlogs } from "../utils/api"

const HomePage = ({ products , categories, articles, blogs}) => {
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
