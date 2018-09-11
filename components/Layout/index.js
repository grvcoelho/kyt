import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import 'marx-css/css/marx.css'
import style from './style.css'

const Layout = ({ children, title }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>

    <main className={style.main}>{children}</main>
  </React.Fragment>
)

Layout.defaultProps = {
  title: 'Know Your Team',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
