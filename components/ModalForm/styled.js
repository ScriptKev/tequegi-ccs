import styled from '@emotion/styled'

export const ModalFormStyled = styled.div`
  height: 100vh;
  width: 100vw;
  opacity: 1;
  z-index: 1;
  display: ${props => props.showModal ? 'block' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  transition: all 300ms ease-in-out;


`
export const FormStyled = styled.form`
  height: 250px;
  width: 280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: absolute;
`

export const CloseModal = styled.div`
cursor: pointer;
    position: relative;
    font-size: 21px;
    z-index: 1;
    right: -250px;
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content;
    height: -webkit-min-content;
    height: -moz-min-content;
    height: min-content;
    bottom: 0;
    top: 40px;
`

export const PositioningModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FieldSetStyled = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
`

export const InputStyled = styled.input`
  border: none;
  width: 250px;
  height: 20px;
  margin: 5px;
  border-radius: 3px;
  padding: 15px 10px;
  background-color: #eee;
  font-family: 'Poppins';
  caret-color: #ff9021;

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: #706967;
  }

  &:hover {
    border: none
  }

  &:focus {
    border: none
  }
`

export const FormBackground = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  place-content: initial;
`