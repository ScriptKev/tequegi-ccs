import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  CheckoutLayoutStyled,
  ContainerStyled,
  ItemProductInCart,
  CartEmptyStyled,
  CheckoutWidgetSection,
  CheckoutWidget,
  KeepBuyingStyled
} from "./styled";
import ProductInCheckout from 'components/ProductInCheckout';
import ButtonPay from 'components/Button';

export default function CheckoutLayout({ productsInCart, dispatchProductsInCart, setModalView }) {
  const router = useRouter()

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

  const PayProductsInCart = () => {
    setModalView(true)
  }

  const TotalProductsInCart = (products) => {
    let productPriceAcum = 0

    products.forEach(item => productPriceAcum += item.price)
    return parseFloat(productPriceAcum).toFixed(2)
  }

  const removeProductInCart = (productId) => {
    const productIdx = productsInCart.findIndex(itemComp => itemComp.id === productId)

    dispatchProductsInCart(prevProducts => {
      prevProducts.splice(productIdx, 1)
      return [...prevProducts]
    })
  }

  if (productsInCart.length === 0) return (
    <CartEmptyStyled>
      <h2>Sin Productos en el carrito</h2>

      <ButtonPay title='Regresar' handleClick={() => router.push('/')} />
    </CartEmptyStyled>
  )

  return (
    <CheckoutLayoutStyled>
      <ContainerStyled>
        <h3 style={{ color: '#332927' }}>Productos Seleccionados</h3>
        <ul>
          {
            productInCartComp().map(({ id, title, price, img, url, stock }) =>
              <ItemProductInCart key={id}>
                <ProductInCheckout
                  id={id}
                  title={title}
                  price={price}
                  img={img}
                  url={url}
                  stock={stock}
                />
                <img
                  onClick={() => removeProductInCart(id)}
                  src='/icons/close.svg'
                  width='20px'
                  height='20px'
                  alt='close-icon'
                  style={{ marginTop: '15px', cursor: 'pointer' }}
                />
                {/* <i style={{ cursor: 'pointer', width: 'min-content', height: 'min-content' }} onClick={() => removeProductInCart(index)}>X</i> */}
              </ItemProductInCart>)
          }
        </ul>
      </ContainerStyled>

      <CheckoutWidgetSection>
        <CheckoutWidget>
          <header style={{ height: '50px' }}>
            <h4 style={{ fontSize: '25px', margin: 'auto' }}>Precio Total</h4>
          </header>

          <div style={{ fontSize: '18px', display: 'flex' }}>
            <span>Total: {TotalProductsInCart(productsInCart)}$</span>
          </div>

          <div style={{ marginTop: '10px' }}>
            <ButtonPay title='Confirmar Orden' handleClick={PayProductsInCart} />
          </div>

          <KeepBuyingStyled>
            <Link href='/'>
              <a>Seguir comprando</a>
            </Link>
          </KeepBuyingStyled>
        </CheckoutWidget>
      </CheckoutWidgetSection>
    </CheckoutLayoutStyled>
  )
}
