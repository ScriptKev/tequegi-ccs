import styled from '@emotion/styled'

export const NavStyled = styled.nav`
  width: 100%;
  height: 50px;
  padding-top: 50px;
  font-weight: 600;

  @media (min-width: 320px) and (max-width: 970px) {

  }

  @media (min-width: 320px) and (max-width: 440px) {
    padding-top: 25px;
  }
`

export const ContainerStyled = styled.div`
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 320px) and (max-width: 440px) {
    max-width: 90%;
  }
`