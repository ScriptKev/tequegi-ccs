import styled from '@emotion/styled'

const MainProductStyled = styled.section`
  width: 100%;
  padding: 0 0 50px 0;
  height: auto;
  margin-top: -20px ;
`

const ContainerStyled = styled.div`
  max-width: 1000px;
  margin: auto;
`
const FlexStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SelectedProductStyled = styled.article`
  width: 400px;
  height: 400px;
  cursor: pointer;

  & img {
      object-fit: cover;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      transition: all 500ms ease-in-out;
    }
`

export {
  MainProductStyled,
  ContainerStyled,
  FlexStyled,
  SelectedProductStyled
}