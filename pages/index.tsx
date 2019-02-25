import * as React from 'react'
// import Link from "next/link";
import Layout from '../components/Layout'
import styled from 'styled-components'

const TricentisAnchor = styled.a`
  color: white;
  background: rgba(29, 99, 175, 0.9);
  text-decoration: none;
`
const FloodAnchor = styled.a`
  color: white;
  background: #4285f4;
  text-decoration: none;
`

const DOAnchor = styled.a`
  color: white;
  background: var(--digitalocean);
  text-decoration: none;
`
const A1 = styled.a`
  color: black;
  background: var(--band1background);
`
const A2 = styled.a`
  color: black;
  background: var(--band2background);
`
const A3 = styled.a`
  color: black;
  background: var(--band3background);
`
const A4 = styled.a`
  color: black;
  background: var(--band4background);
`
const A5 = styled.a`
  color: black;
  background: var(--band5background);
`

const Article = styled.article`
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem;
`

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Ivan Vanderbyl">
      <Article>
        <h1 className="mdc-typography--headline3">
          Hi 👋, I'm Ivan Vanderbyl,
        </h1>
        <p className="mdc-typography--headline5">
          Right now I’m working on a product called{' '}
          <FloodAnchor href="https://flood.io">Flood</FloodAnchor>. Our mission
          is to help you run fast and reliable applications.
        </p>

        <p className="mdc-typography--headline5">
          I work at{' '}
          <TricentisAnchor href="https://tricentis.com" target="_blank">
            Tricentis
          </TricentisAnchor>
          , the leading software testing company, as a Product Manager for Load
          Testing.
        </p>

        <p className="mdc-typography--body1">
          Previously, I co-founded Flood IO
          <i> (Acq. Tricentis, June 2017)</i> with Tim Koopmans and Mikel
          Lindsaar.
        </p>

        <p className="mdc-typography--body2">
          I was also an early part of{' '}
          <DOAnchor href="https://digitalocean.com">DigitalOcean</DOAnchor>,
          where I worked on DNS, APIs, and eventually the early stages of their
          cloud control panel.
        </p>

        <p className="mdc-typography--body2">
          Over the last 12+ years I've founded 4 companies, exited 2, crashed
          and burned 1, and fizzled out another.
        </p>
        <p className="mdc-typography--body2">
          I enjoy working in Product related roles including Engineering,
          Design, and Management. I enjoy the challenges of pushing products
          forward and challenging what is technically possible. But most
          importantly, I enjoy the challenge of understanding the customer's
          problems and solving them in unique and simple ways.
        </p>

        <p className="mdc-typography--body2">
          You can follow me on{' '}
          <A1 rel="nofollow" href="https://twitter/ivanderbyl">
            Twitter/@ivanderbyl
          </A1>
          ,{' '}
          <A2 rel="nofollow" href="https://dribbble.com/ivan">
            Dribble/ivan
          </A2>
          ,{' '}
          <A3 rel="nofollow" href="https://www.linkedin.com/in/ivanvanderbyl/">
            LinkedIn
          </A3>
          ,
        </p>
      </Article>
    </Layout>
  )
}

export default IndexPage
