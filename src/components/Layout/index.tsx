import React from 'react'
import PropTypes from 'prop-types'

import Header from '~components/Header'
import Footer from '~components/Footer'

import * as style from './style.module.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
