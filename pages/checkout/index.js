import { useContext } from 'react'
import { CartContext } from 'hooks/CartContext'
import CheckoutLayout from 'layouts/Checkout'
import Head from 'next/head'

export default function Checkout() {
  const [productsInCart, setProductsInCart] = useContext(CartContext)

  return (
    <>
      <Head>
        <title>Tequegi 😋 | Carrito de compras</title>
      </Head>

      <CheckoutLayout
        dispatchProductsInCart={setProductsInCart}
        productsInCart={productsInCart}
      />
    </>
  )
}
