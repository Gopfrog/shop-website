import { InferGetServerSidePropsType } from "next"
import { Product } from "./api/products"

export async function getServerSideProps() {

  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  const products: Array<Product> = data.products

  return {
    props: {
      products
    }
  }
}

const Home = ({products}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
  <>
  <h1>
    Homepage
  </h1>
  <h3>Produkte</h3>
  {
    products.map((product) => (
      <>
        <h3>{ product.id + product.name }</h3>
        <small>{product.weight}</small>
      </>
    ))
  }
  
  </>)
}
export default Home