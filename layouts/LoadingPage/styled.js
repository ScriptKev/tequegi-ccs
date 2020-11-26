import styled from '@emotion/styled'

export const LoadingPageStyled = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & h5 {
    font-size: 60px;
  }

  @media (min-width: 320px) and (max-width: 760px) {
    text-align: center;

    & h5 {
      font-size: 50px
    }
  }
`