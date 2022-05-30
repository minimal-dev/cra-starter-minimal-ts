import React from 'react'
import PropTypes from 'prop-types'

import Header from '~components/Header'
import Footer from '~components/Footer'

import SVGDefs from './SVGDefs'
import * as style from './Layout.module.scss'

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
      <SVGDefs />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
