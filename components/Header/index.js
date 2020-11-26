// import Img from 'next/image'
import { HeaderStyled, ImageHeaderContainer } from './style'

function Header() {
  return (
    <HeaderStyled>
      <ImageHeaderContainer>
        {/* <Img
          className='headerImg'
          alt="imagen1"
          width={1000}
          height={350}
          src='/img/teque.jpg'
          layout="fill"
        // objectFit="cover"
        /> */}
        <img
          alt="Tequegi"
          src='/img/teque.jpg'
        />
      </ImageHeaderContainer>
    </HeaderStyled>
  )
}

export default Header
