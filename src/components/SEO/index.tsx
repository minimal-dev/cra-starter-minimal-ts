import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

interface SEOProps {
  description?: string
  lang?: string
  meta?: any
  title?: string
}

const SEO: React.FC<SEOProps> = ({ description, lang, meta, title }) => {
  const metaDescription = description || ''
  const defaultTitle = 'Minimal CRA website'
  const titleTemplate = title ? `${title} – ${defaultTitle}` : defaultTitle

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: titleTemplate,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `twitter:title`,
          content: titleTemplate,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
