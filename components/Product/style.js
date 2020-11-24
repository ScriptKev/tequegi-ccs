import styled from '@emotion/styled'

export const ProductStyled = styled.article`
width: 250px;
height: 300px;
border-radius: 10px;
transition: 400ms ease-in-out;
margin: 20px;
cursor: pointer;

&:hover {
    transform: translateY(-10px);
}

& img {
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

& h2 {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #332927;
  margin-top: 10px;
}
`