
import ProductsList from "../components/ProductsList"
import { getProducts } from "../utils/api"


const ShopPage = ({ products }) => {
  return (
    <div>
      <title>Test</title> 
      <ProductsList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return { props: { products } }
}

export default ShopPage
