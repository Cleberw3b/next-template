import { GetStaticProps } from 'next';

const Home = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <h1>
      This is a Next Application
    </h1>
    <p>{process.env.TEST}</p>
    <p>We are running in {process.env.NODE_ENV} mode</p>
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default Home
