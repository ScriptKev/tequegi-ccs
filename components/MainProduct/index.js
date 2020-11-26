import { useState, useContext } from 'react'
// import Image from 'next/image'
import { CartContext } from 'hooks/CartContext'
import {
  MainProductStyled,
  ContainerStyled,
  FlexStyled,
  SelectedProductStyled,
  TitleMainProductStyled,
  MainProductImageStyled
} from './style'

export default function MainProduct({ product }) {
  const [productsSelected, setProductsSelected] = useState([product])
  const [productsInCart, setProductsInCart] = useContext(CartContext)

  const ProductTitleComputed = (productTitle) => {
    let newTitle;
    newTitle = productTitle.split(" ");

    if (newTitle.length === 3) {
      newTitle.splice(1, 1);
      return (newTitle = `${newTitle[0]} ${newTitle[1]}`);
    } else {
      return (newTitle = `${newTitle[0]} ${newTitle[1]}`);
    }
  };

  const ProductSelected = (props) => {
    console.info('Añadido al carrito')
    console.table(product)

    setProductsInCart(prevProductsInCart => [...prevProductsInCart, props])
    productsSelected.push(props)
  }

  return (
    <MainProductStyled style={{ textAlign: 'center' }}>
      <ContainerStyled>
        <FlexStyled>
          <SelectedProductStyled onClick={() => ProductSelected(product)}>
            {/* <Image
              src={product.img}
              alt="Picture of the author"
              width={500}
              height={500}
            /> */}
            <MainProductImageStyled src={product.img} alt={product.title} />
          </SelectedProductStyled>

          <TitleMainProductStyled>
            <h1>{ProductTitleComputed(product.title)}</h1>
          </TitleMainProductStyled>

        </FlexStyled>
      </ContainerStyled>
    </MainProductStyled>
  )
}

