import styled from '@emotion/styled'

export const ButtonPayStyled = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color: transparent;
  border: 5px solid #feb872;
  transition: all 200ms ease-in-out;
  font-weight: 600;
  cursor: pointer;
  color: #332927;

  &:hover {
    background-color: #feb872;
    color: white;
  }

  &:focus {
    outline: none;
    filter: opacity(0.8)
  }

  &:active {
    transform: scale(0.9)
  }
`

export const ButtonConfirmStyled = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color: #feb872;
  border: 5px solid #feb872;
  transition: all 200ms ease-in-out;
  font-weight: 600;
  cursor: pointer;
  color: #332927;

  &:hover {
    background-color: #feb872;
    color: white;
  }

  &:focus {
    outline: none;
    filter: opacity(0.8)
  }
`