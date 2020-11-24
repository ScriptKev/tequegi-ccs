import useSwr from 'swr'
import Nav from 'components/Nav'
import Head from 'next/head'
import ShopLayout from 'layouts/ShopLayout'
import LoadingPage from 'layouts/LoadingPage'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Dulces() {
  const { data, error } = useSwr(`/api/dulces`, fetcher)

  if (error) return <div>Hubo un error al cargar los tequeños, por favor, vuelva al inicio.</div>
  if (!data) return <LoadingPage titlePage='Dulces' />

  return (
    <>
      <Head>
        <title>Tequegi - Dulces</title>
      </Head>

      <Nav />
      <ShopLayout products={data} />
    </>
  )
}

