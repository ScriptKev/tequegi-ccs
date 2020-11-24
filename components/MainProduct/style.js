import styled from '@emotion/styled'

export const MainProductStyled = styled.section`
  width: 100%;
  padding: 0 0 50px 0;
  height: auto;
`

export const ContainerStyled = styled.div`
  max-width: 1000px;
  margin: auto;
`
export const FlexStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export const SelectedProductStyled = styled.article`
  width: 400px;
  height: 400px;
  cursor: pointer;
  clip-path: circle(50% at 50% 50%);
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.1)
  }
`

export const TitleMainProductStyled = styled.h1`
    width: min-content;
    text-align: start;
    font-size: 100px;
    font-weight: 900;
    letter-spacing: -2px;
    color: #7069678f;
    margin-left: 20px;
`

export const MainProductImageStyled = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`