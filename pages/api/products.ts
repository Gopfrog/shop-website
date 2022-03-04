export interface Product {
  id: string
  name: string
  weight: number
  typ: 'lebensmittel' | 'kleidung'
}

export default function handler(req: any, res: any) {
  let products: Array<Product> = []
  for (let i = 0; i < 10; i++) {
    const product: Product = {
      id: (i + 1).toString(),
      name: 'Test',
      typ: 'kleidung',
      weight: Math.random()*100
    }
    products.push(product)
  }

  res.json({
    products: products
  })
}