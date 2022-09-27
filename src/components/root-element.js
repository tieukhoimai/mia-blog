import React, { Fragment } from 'react'
import { Script, graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          measurementId
        }
      }
    }
  `)

  return data.site.siteMetadata
}

const RootElement = ({ children }) => {
  const { measurementId } = useSiteMetadata()

  return (
    <Fragment>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        forward={[`gtag`]}
      />
      <Script
        id='gtag-config'
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){ window.dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config', '${measurementId}', { send_page_view: false })`,
        }}
      />
      <div>{children}</div>
    </Fragment>
  )
}

export default RootElement
