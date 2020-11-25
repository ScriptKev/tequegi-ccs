import CompraExitosaLayout from "layouts/CompraExitosaLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CompraExitosa() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="robots" content="nofollow" />
      </Head>

      <CompraExitosaLayout />
    </>
  )
}
