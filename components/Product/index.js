import Image from 'next/image'
import { ProductStyled } from './style'

function Product({ title, img, url, id, handleSelectProduct }) {
  return (
    <ProductStyled onClick={() => handleSelectProduct(id)}>
      <figure>
        <Image
          src={img}
          alt={title}
          width={250}
          height={250}
        />
      </figure>

      <section>
        <h2> {title} </h2>
      </section>
    </ProductStyled>
  )
}

export default Product
