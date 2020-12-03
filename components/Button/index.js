import PropTypes from 'prop-types'
import { ButtonPayStyled, ButtonConfirmStyled } from './styled'

export default function ButtonPay({ title, handleClick, submit }) {

  if (submit) {
    return <ButtonConfirmStyled type='submit' onClick={handleClick}>{title}</ButtonConfirmStyled>
  } else {
    return <ButtonPayStyled onClick={handleClick}>{title}</ButtonPayStyled>
  }
}

ButtonPay.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  submit: PropTypes.bool
}

ButtonPay.defaultProps = {
  title: 'Boton default',
  handleClick: () => console.log('Click default'),
  submit: false
}