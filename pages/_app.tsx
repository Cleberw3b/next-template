import { NextPageContext } from 'next'
import { AppProps, AppContext } from 'next/app'
import Layout from "components/layout/layout"
import "public/styles/theme.scss"

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async (props: AppContext) => {

  const { Component, ctx }: AppContext = props
  const { req, res }: NextPageContext = ctx

  let pageProps: any = {}
  if (Component.getInitialProps)
    pageProps = await Component.getInitialProps(ctx)

  return { pageProps }
}

export default MyApp