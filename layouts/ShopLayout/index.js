import { useState } from 'react'
import MainProduct from 'components/MainProduct'
import ListProducts from 'components/ListProducts'

export default function ShopLayout({ products }) {
  const [mainProduct, setMainProduct] = useState(products[0])

  const handleSelectProduct = (id) => {
    const productFound = products.find(product => product.id === id)
    setMainProduct(productFound)
  }

  return (
    <>
      <MainProduct product={mainProduct} />
      <ListProducts handleSelectProduct={handleSelectProduct} products={products} />
    </>
  )
}
