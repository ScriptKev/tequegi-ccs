import styled from '@emotion/styled'

export const ContainerStyled = styled.section`
  width: 100%;
  height: 100%;
  margin: 50px 0 0 auto;


  @media (min-width: 320px) and (max-width: 760px) {
    margin: 25px 0 0 auto;
  }
`
export const TitleCategoriesStyled = styled.div`
  max-width: 1000px;
  width: 80%;
  margin: auto;

  & h4, h5{
    color: #332927;
    font-size: 35px;
  }

  & h5 {
    margin-left: 20px;
    font-size: 15px;
    color: #706967;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
`

export const ListCategoriesStyled = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px 0;
`
