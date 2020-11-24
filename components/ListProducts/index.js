import Product from 'components/Product'
import { ListProductsSection, Container, ProductGrid } from "./style"

function ListProducts({ products, handleSelectProduct }) {
  return (
    <ListProductsSection>
      <Container>
        <ProductGrid>
          {
            products.map(product => <Product
              key={product.id}
              title={product.title}
              img={product.img}
              url={product.url}
              id={product.id}
              handleSelectProduct={handleSelectProduct}
            />)
          }
        </ProductGrid>
      </Container>
    </ListProductsSection>
  )
}

export default ListProducts
