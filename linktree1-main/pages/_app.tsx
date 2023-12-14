import { AppProps } from "next/app"
import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layout"

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  )
}
