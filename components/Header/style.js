import styled from '@emotion/styled'

export const HeaderStyled = styled.header`
  max-width: 1000px;
  margin: auto;
  padding-top: 50px;
  height: 500px;

  & img {
    border-radius: 10px;
    width: 100%;
    object-fit: cover;
    object-position: 50%;
  }

  @media (min-width: 320px) and (max-width: 1000px) {
    & img {
      object-position: 35%;
    }
  }

`

export const ImageHeaderContainer = styled.div`
  width: 100%;
 height: 100%;
 display: flex;
`