import { ButtonPayStyled } from './styled'

export default function ButtonPay({ title, handleClick }) {

  return (
    <ButtonPayStyled onClick={handleClick}>
      { title}
    </ButtonPayStyled>
  )
}
