import Image from 'next/image'
import Link from 'next/link'
import { CardCategoryStyled, CategoryStyled } from './style'

function CardCategory({ category }) {
  return (
    <Link href={category.url}>
      <a>
        <CategoryStyled>
          <CardCategoryStyled>
            <Image
              src={category.img}
              alt={category.title}
              width={250}
              height={250}
            />
          </CardCategoryStyled>

          <h3>{category.title}</h3>
        </CategoryStyled>
      </a>
    </Link>
  )
}

export default CardCategory
