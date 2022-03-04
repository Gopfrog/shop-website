import { InferGetServerSidePropsType } from "next"
import { Product } from "./api/products"

export async function getServerSideProps() {

  const res = await fetch('http://localhost:3000/api/products')
  const json = await res.text()
  const products: Array<Product> = JSON.parse(json)

  console.log(products[0].id)

  return {
    props: {
      products
    }
  }
}

const Home = async ({products}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(products)
  return (
  <>
  <h1>
    Homepage
  </h1>
  <h3>Produkte</h3>

  
  </>)
}
export default Home