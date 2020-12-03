import styled from '@emotion/styled'

export const CheckoutLayoutStyled = styled.main`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 70% 225px;
  grid-template-rows: 1fr;

  justify-items: center;
  align-items: flex-start;

  @media (min-width: 320px) and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    grid-template-areas:  'PriceWidget'
                        'ListProducts';
  }
`

export const ContainerStyled = styled.div`
  height: 100%;
  padding-left: 5%;
  padding-top: 50px;

  @media (min-width: 320px) and (max-width: 750px) {
    grid-area: ListProducts;
    padding: 0 15px;
  }
`

export const CheckoutWidgetSection = styled.section`
  height: 100%;
  width: 100%;
  position: relative;

  @media (min-width: 320px) and (max-width: 750px) {
    display: flex;
    grid-area: PriceWidget;
    justify-content: center;
    align-items: center;
  }
`

export const KeepBuyingStyled = styled.div`
  margin-top: 10px;

  & a:hover {
    color: white;
  }
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
  text-align: center
`

export const CheckoutWidget = styled.div`
  width: 215px;
  height: 200px;
  position: fixed;
  margin-top: 20vh;
  background-color: #d0d0d0;
  padding: 20px 30px;
  border-radius: 10px;
  
  @media (min-width: 320px) and (max-width: 750px) {
    margin-top: 6vh;
    margin-bottom: 6vh;
    position: relative;
  }
`