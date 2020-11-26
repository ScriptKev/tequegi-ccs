import { ProductInCheckoutStyled } from './styled'
import Image from 'next/image'

export default function ProductInCheckout({ id, title, price, img }) {
  return (
    <ProductInCheckoutStyled>
      <Image src={img} width={80} height={80} alt={title} />
      <h2 style={{ margin: '0 10px', fontSize: '20px', color: '#706967' }}>{title}</h2>
      <small style={{ fontSize: '17px' }}>{price}$</small>
    </ProductInCheckoutStyled>
  )
}
