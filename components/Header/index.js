import Img from 'next/image'
import { HeaderStyled } from './style'

function Header() {
  return (
    <HeaderStyled>
      <div>
        <Img
          alt="imagen1"
          width={1000}
          height={350}
          src='/img/teque.jpg'
          layout="fill"
        // objectFit="cover"
        />
      </div>
    </HeaderStyled>
  )
}

export default Header
