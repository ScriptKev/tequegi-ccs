import { ButtonPayStyled, ButtonConfirmStyled } from './styled'

export default function ButtonPay({ title, handleClick, submit }) {

  if (submit) {
    return <ButtonConfirmStyled type='submit' onClick={handleClick}>{title}</ButtonConfirmStyled>
  } else {
    return <ButtonPayStyled onClick={handleClick}>{title}</ButtonPayStyled>
  }
}
