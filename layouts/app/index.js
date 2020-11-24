import React from 'react'
import { GlobalStyled, AppLayoutStyled } from "./style";

function AppLayout({ children }) {
  return (
    <AppLayoutStyled>
      <GlobalStyled />
      {children}
    </AppLayoutStyled>
  )
}

export default AppLayout
