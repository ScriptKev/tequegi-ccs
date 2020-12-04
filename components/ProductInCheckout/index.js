import { ProductInCheckoutStyled } from './styled'
import Image from 'next/image'

export default function ProductInCheckout({ id, title, price, img, stock }) {
  return (
    <ProductInCheckoutStyled>
      <figure style={{ width: 'min-content', height: 'min-content', position: 'relative' }}>
        <Image src={img} width={80} height={80} alt={title} />
        <div style={{
          width: '22px',
          height: '22px',
          marginBottom: '25px',
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'blueviolet',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <small style={{ paddingTop: '2px', color: 'white' }}>
            {stock}
          </small>
        </div>      </figure>
      <h2 style={{ margin: '0 10px', fontSize: '20px', color: '#706967' }}>{title}</h2>
      <small style={{ fontSize: '17px' }}>{price}$</small>
    </ProductInCheckoutStyled>
  )
}
