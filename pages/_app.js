import Head from 'next/head'
import AppLayout from 'layouts/app'
import CartProvider from 'hooks/CartContext'

function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Head>
        <meta charset="utf-8" />
        <meta name="description" content="Tequegi el sabor que nos une" />
        <meta name="keywords" content="Tequegi, tequeños, delivery caracas" />
        <meta name="author" content="Tequegi" />
        <meta name="copyright" content="Tequegi" />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap" rel="stylesheet" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap" rel="stylesheet" />
      </Head>

      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AppLayout>
  )
}

export default App
