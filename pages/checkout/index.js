import { useContext, useState } from 'react'
import { CartContext } from 'hooks/CartContext'
import CheckoutLayout from 'layouts/Checkout'
import Head from 'next/head'
import ModalForm from 'components/ModalForm'

export default function Checkout() {
  const [modalView, setModalView] = useState(false)
  const [productsInCart, setProductsInCart] = useContext(CartContext)

  return (
    <>
      <Head>
        <title>Tequegi 😋 | Carrito de compras</title>
      </Head>

      {/* {
        modalView &&
        <div
          onClick={() => { setModalView(false); console.log('presionado') }}
          style={{
            width: '100vw',
            height: '100vh',
            zIndex: '0',
            content: '" "',
            position: 'fixed'
          }}>
        </div>
      } */}
      <ModalForm
        productsInCart={productsInCart}
        setModalView={setModalView}
        dispatchProductsInCart={setProductsInCart}
        modalView={modalView}
      />

      <CheckoutLayout
        setModalView={setModalView}
        dispatchProductsInCart={setProductsInCart}
        productsInCart={productsInCart}
      />
    </>
  )
}
