import { useContext } from 'react'
import { CartContext } from 'hooks/CartContext'
import Link from 'next/link'
import { NavStyled, ContainerStyled } from './style'
import ShoppingCartIcon from 'components/ShoppingCartIcon'

export default function Nav() {
  const [productsInCart, setProductsInCart] = useContext(CartContext)

  return (
    <NavStyled>
      <ContainerStyled>
        <Link href='/'>
          <a style={{ fontSize: '50px' }}> {'<'} </a>
        </Link>

        <ShoppingCartIcon productsInCart={productsInCart.length} />
      </ContainerStyled>
    </NavStyled>
  )
}
