import { GlobalStyled, AppLayoutStyled } from "./style";

export default function AppLayout({ children }) {
  return (
    <AppLayoutStyled>
      <GlobalStyled />
      {children}
    </AppLayoutStyled>
  )
}
