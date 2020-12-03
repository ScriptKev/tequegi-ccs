import Head from 'next/head'
import { useContext, useState } from 'react'
import { CartContext } from 'hooks/CartContext'
import CheckoutLayout from 'layouts/Checkout'
import ModalForm from 'components/ModalForm'

export default function Checkout() {
  const [modalView, setModalView] = useState(false)
  const [productsInCart, setProductsInCart] = useContext(CartContext)

  return (
    <>
      <Head>
        <title>Tequegi 😋 | Carrito de compras</title>
      </Head>

      <ModalForm
        productsInCart={productsInCart}
        setModalView={setModalView}
        dispatchProductsInCart={setProductsInCart}
        modalView={modalView}
      />

      <CheckoutLayout
        // productsToPay={productsToPay(productsInCart)}
        setModalView={setModalView}
        dispatchProductsInCart={setProductsInCart}
        productsInCart={productsInCart}
      />
    </>
  )
}
