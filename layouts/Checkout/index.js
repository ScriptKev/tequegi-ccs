import { useRouter } from 'next/router'
import Link from 'next/link'
import { CheckoutLayoutStyled, ContainerStyled } from "./styled";
import ProductInCheckout from 'components/ProductInCheckout';

export default function CheckoutLayout({ productsInCart, dispatchProductsInCart }) {
  const router = useRouter()

  const PageProductsInCart = () => {
    dispatchProductsInCart([])
    console.log('Producto Comprado')

    setTimeout(() => {
      router.push('/')
    }, 2000)
  }

  const TotalProductsInCart = () => {
    return ''
  }

  if (productsInCart.length === 0) return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h2>Sin Productos en el carrito</h2>

      <button>
        <Link href='/'>
          <a>Volver al inicio</a>
        </Link>
      </button>
    </div>
  )


  return (
    <CheckoutLayoutStyled>
      <div>
        <Link href='/'>
          <a>Seguir comprando</a>
        </Link>
      </div>
      <ContainerStyled>
        <h3>Productos Seleccionados</h3>
        <ul>
          {
            productsInCart.map(({ id, title, price, img }) =>
              <li key={id}>
                <ProductInCheckout
                  id={id}
                  title={title}
                  price={price}
                  img={img}
                />
              </li>)
          }
        </ul>
        <button onClick={PageProductsInCart}>Pagar</button>
      </ContainerStyled>
      <span>Total: {TotalProductsInCart()}</span>
    </CheckoutLayoutStyled>
  )
}
