import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import './styles.scss'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Work+Sans"
        rel="stylesheet"
      />
    </Head>
    <header>
      <nav />
    </header>
    {children}
    <footer />
  </div>
)

export default Layout
