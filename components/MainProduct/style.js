import styled from '@emotion/styled'

export const MainProductStyled = styled.section`
  width: 100%;
  padding: 0 0 50px 0;
  height: auto;

  @media (min-width: 320px) and (max-width: 1000px) {
    padding: 0
  }

  @media (min-width: 320px) and (max-width: 440px) {
    padding: 0;
  }
`

export const ContainerStyled = styled.div`
  max-width: 1000px;
  margin: auto;
`
export const FlexStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: minmax(250px, 50%) 50%;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;

  & h1 {
    text-align: flex-start;
  }

  @media (min-width: 320px) and (max-width: 1000px) {
    grid-template-rows: 1fr min-content;
    grid-template-columns: 1fr;
  }
`
export const SelectedProductStyled = styled.article`
  width: 400px;
  height: 400px;
  cursor: pointer;
  clip-path: circle(50% at 50% 50%);
  transition: all 100ms ease-in-out;
  justify-self: flex-end;

  & img {
    &:hover {
      box-shadow: 0 0 11px rgba(33,33,33,.2);
    }
  }

  &:active {
    transform: scale(1.1)
  }

  @media (min-width: 320px) and (max-width: 1000px) {
    width: 300px;
    height: 300px;
    justify-self: center;
  }

  @media (min-width: 320px) and (max-width: 440px) {
    width: 250px;
    height: 250px;
    justify-self: center;
  }
`

export const TitleMainProductStyled = styled.div`
    width: 100%;
    text-align: start;
    font-size: 55px;
    font-weight: 900;
    padding-left: 15px;
    letter-spacing: -2px;
    color: #7069678f;

  @media (min-width: 320px) and (max-width: 1000px) {
    font-size: 40px;

    & h1 {
      text-align: center;
    }
  }

  @media (min-width: 320px) and (max-width: 440px) {
    font-size: 30px;
    padding: 0 15px;
  }
`

export const MainProductImageStyled = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`