import { useRouter } from 'next/router'
import Link from 'next/link'
import { CheckoutLayoutStyled, ContainerStyled, CheckoutWidget, ItemProductInCart, CartEmptyStyled } from "./styled";
import ProductInCheckout from 'components/ProductInCheckout';
import Button from 'components/Button';

export default function CheckoutLayout({ productsInCart, dispatchProductsInCart, setModalView }) {
  const router = useRouter()

  const PayProductsInCart = () => {
    setModalView(true)
    // router.push('/compra-exitosa')
    //   .then(() => dispatchProductsInCart([]))
  }

  const TotalProductsInCart = (products) => {
    let productPriceAcum = 0

    products.forEach(item => productPriceAcum += item.price)
    return parseFloat(productPriceAcum).toFixed(2)
  }

  const removeProductInCart = (productindex) => {
    dispatchProductsInCart(prevProducts => {
      console.log(prevProducts)
      prevProducts.splice(productindex, 1)
      console.log(prevProducts)

      return [...prevProducts]
    })
  }

  if (productsInCart.length === 0) return (
    <CartEmptyStyled>
      <h2>Sin Productos en el carrito</h2>

      <Button title='Regresar' handleClick={() => router.push('/')} />
    </CartEmptyStyled>
  )

  return (
    <CheckoutLayoutStyled>
      <div></div>
      <ContainerStyled>
        <h3 style={{ color: '#332927' }}>Productos Seleccionados</h3>
        <ul>
          {
            productsInCart.map(({ id, title, price, img, url }, index) =>
              <ItemProductInCart key={id}>
                <ProductInCheckout
                  id={id + 1}
                  title={title}
                  price={price}
                  img={img}
                />
                <i style={{ cursor: 'pointer' }} onClick={() => removeProductInCart(index)}>X</i>
              </ItemProductInCart>)
          }
        </ul>
      </ContainerStyled>

      <CheckoutWidget>
        <div style={{
          width: '215px',
          height: '200px',
          position: 'fixed',
          marginTop: '20vh',
          backgroundColor: '#d0d0d0',
          padding: '20px 30px',
          borderRadius: '10px'
        }}>
          <header style={{ height: '50px' }}>
            <h4 style={{ fontSize: '25px', margin: 'auto' }}>Precio Total</h4>
          </header>

          <div style={{ fontSize: '18px', display: 'flex' }}>
            <span>Total: {TotalProductsInCart(productsInCart)}$</span>
          </div>

          <div style={{ marginTop: '10px' }}>
            <Button title='Confirmar Orden' handleClick={PayProductsInCart} />
          </div>

          <div style={{ marginTop: '10px' }}>
            <Link href='/'>
              <a>Seguir comprando</a>
            </Link>
          </div>
        </div>
      </CheckoutWidget>
    </CheckoutLayoutStyled>
  )
}
