import { ProductInCheckoutStyled } from './styled'
import Image from 'next/image'

export default function ProductInCheckout({ id, title, price, img }) {
  return (
    <ProductInCheckoutStyled>
      <Image src={img} width={80} height={80} alt={title} />
      <h2>{title}</h2>
      <small>{price}</small>
    </ProductInCheckoutStyled>
  )
}
