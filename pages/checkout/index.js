import Head from 'next/head'
import { useContext, useState } from 'react'
import { CartContext } from 'hooks/CartContext'
import CheckoutLayout from 'layouts/Checkout'
import ModalForm from 'components/ModalForm'

export default function Checkout() {
  const [modalView, setModalView] = useState(false)
  const [productsInCart, setProductsInCart] = useContext(CartContext)

  const productInCartComp = () => {
    const productComputed = [];

    productsInCart.forEach((product) => {
      if (productComputed.some((item) => item.id === product.id)) {
        const productToModifeIndex = productComputed.findIndex(
          (itemComp) => itemComp.id === product.id
        );
        productComputed[productToModifeIndex].stock += 1;
      } else {
        const { ...data } = product;
        const prodcutToPush = {
          ...data,
          stock: 1
        };
        productComputed.push(prodcutToPush);
      }
    });

    return productComputed;
  };

  return (
    <>
      <Head>
        <title>Tequegi 😋 | Carrito de compras</title>
      </Head>

      <ModalForm
        productsInCart={productInCartComp()}
        setModalView={setModalView}
        dispatchProductsInCart={setProductsInCart}
        modalView={modalView}
      />

      <CheckoutLayout
        // productsToPay={productsToPay(productsInCart)}
        setModalView={setModalView}
        dispatchProductsInCart={setProductsInCart}
        productsInCart={productInCartComp()}
      />
    </>
  )
}
