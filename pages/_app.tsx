import { NextPageContext } from 'next';
import { AppProps, AppContext } from 'next/app';
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
      <style global jsx > {`
                    body {
                        margin: 0;
                    }
                `}
      </style>
    </Layout>
  )
}

MyApp.getInitialProps = async (props: AppContext) => {

  const { Component, ctx }: AppContext = props;
  const { req, res }: NextPageContext = ctx;

  let pageProps: any = {};
  if (Component.getInitialProps)
    pageProps = await Component.getInitialProps(ctx);

  return { pageProps };
}

export default MyApp