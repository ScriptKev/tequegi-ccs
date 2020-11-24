import { LoadingPageStyled } from './styled'

export default function LoadingPage({ titlePage }) {
  return (
    <LoadingPageStyled>
      <h5>Cargando {titlePage}...</h5>
    </LoadingPageStyled>
  )
}
