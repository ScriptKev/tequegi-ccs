import { createContext, useState } from "react"

export const CartContext = createContext();

export default function CartProvider({ children, }) {
  const [productsInCart, setProductsInCart] = useState([])

  return (
    <CartContext.Provider value={[productsInCart, setProductsInCart]}>
      {children}
    </CartContext.Provider>
  )
}