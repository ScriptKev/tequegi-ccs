import Head from 'next/head'
import useSwr from 'swr'
import ShopLayout from 'layouts/ShopLayout'
import Nav from 'components/Nav'
import LoadingPage from 'layouts/LoadingPage'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Teques() {
  const { data, error } = useSwr(`/api/teques`, fetcher)

  if (error) return <div>Hubo un error al cargar los tequeños, por favor, vuelva al inicio.</div>
  if (!data) return <LoadingPage titlePage='Tequeños' />

  return (
    <>
      <Head>
        <title>Tequegi - Tequeños</title>
      </Head>

      <Nav />
      <ShopLayout products={data} />
    </>
  )
}

