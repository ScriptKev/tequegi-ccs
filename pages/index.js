import React from 'react'
import Head from 'next/head'
import Header from 'components/Header'
import ListCategories from 'components/ListCategories'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tequegi 😋</title>
      </Head>

      <Header />
      <ListCategories />
    </>
  )
}
