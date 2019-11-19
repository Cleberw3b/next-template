import React from 'react'

const alignCenter = { textAlign: "center" };

const Home = () => (
  <div>
    <h1 style={alignCenter}>
      This is a Next Application
    </h1>
    <p> this {process.env.TEST}</p>
    <p>We are running in {process.env.NODE_ENV} mode</p>
  </div>
)

export default Home
