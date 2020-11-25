import styled from '@emotion/styled'

export const CheckoutLayoutStyled = styled.main`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: flex-start;
`

export const ContainerStyled = styled.div`
  max-width: 1000px;
  min-width: 500px;
  height: 100%;
  min-height: 70vh;
  padding-top: 50px;
`

export const CheckoutWidget = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
`

export const ItemProductInCart = styled.li`
  width: 100%;
  display:flex;
  opacity: 1;
  transition: all 300ms ease-in-out;
`

export const CartEmptyStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`