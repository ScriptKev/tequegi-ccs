import { ContainerStyled, ListCategoriesStyled, TitleCategoriesStyled } from './style'
import CardCategory from 'components/CardCategory'

function ListCategories() {
  return (
    <ContainerStyled>
      <TitleCategoriesStyled>
        <h4>¿Que podemos ofrecerte?</h4>
        <h5>Delivery 100% garantizado</h5>
      </TitleCategoriesStyled>

      <ListCategoriesStyled>
        <CardCategory category={{ title: 'Tequeños', url: 'teques', img: '/img/hamburguesa-3d.jpg' }} />
        <CardCategory category={{ title: 'Panes', url: 'panes', img: '/img/hamburguesa-3d.jpg' }} />
        <CardCategory category={{ title: 'Dulces', url: 'dulces', img: '/img/hamburguesa-3d.jpg' }} />
        <CardCategory category={{ title: 'Tortas', url: 'tortas', img: '/img/hamburguesa-3d.jpg' }} />
      </ListCategoriesStyled>
    </ContainerStyled>
  )
}

export default ListCategories
