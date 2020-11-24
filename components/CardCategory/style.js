import styled from '@emotion/styled'

export const CardCategoryStyled = styled.article`
  background-color: #a8dadc;
  border-radius: 10px;
  box-shadow: 0px 5px 5px #cdcdcdb5;
  width: 200px;
  height: 200px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.1)
  }

  & img {
    object-fit: cover;
  }
`
export const CategoryStyled = styled.li`
  margin: 20px;
  text-align: center;

  & h3 {
    color: #332927;
    margin-top: 20px;
  }
`