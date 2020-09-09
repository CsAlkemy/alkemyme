import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import config from '../../../config/website'
import { SeoSiteMetadataQuery } from '../../../graphql-types'
import SchemaOrg from './schema-org'

export type SEOProps = {
  isBlogPost: boolean
  postData?: {
    plainTextDescription?: string
    description?: string
    slug?: string
    datePublished?: string
    title?: string
    [x: string]: any
  }
  metaImageURL?: string | null
  pageTitle?: string
  siteMetadata: SeoSiteMetadataQuery
}

const SEOComponent: FC<SEOProps> = ({
  siteMetadata,
  postData = {},
  metaImageURL,
  isBlogPost,
  pageTitle,
}) => {
  const seo = siteMetadata.site!.siteMetadata

  const socialShareImage =
    postData?.banner?.childImageSharp?.fluid?.src ??
    siteMetadata.fallBackImage?.childImageSharp?.fixed?.src

  const title =
    isBlogPost && postData.title
      ? postData.title
      : postData.title
      ? `${postData.title} | ${config.siteTitle}`
      : pageTitle
      ? `${pageTitle} | ${config.siteTitle}`
      : config.siteTitle

  const description =
    postData.plainTextDescription ?? postData.description ?? seo.description
  const image = metaImageURL ?? `${seo.canonicalUrl}${socialShareImage}`
  const url = postData.slug
    ? `${seo.canonicalUrl}${postData.slug}`
    : seo.canonicalUrl
  const datePublished = isBlogPost ? postData.datePublished ?? false : false

  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={image} name="image" />

        {/* OpenGraph tags */}
        <meta content={url} property="og:url" />
        {isBlogPost ? <meta content="article" property="og:type" /> : null}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={image} property="og:image" />
        <meta content={seo.social.fbAppID} property="fb:app_id" />

        {/* Twitter Card tags */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={seo.social.twitter} name="twitter:creator" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={image} name="twitter:image" />
      </Helmet>
      <SchemaOrg
        author={seo.author}
        canonicalUrl={seo.canonicalUrl}
        datePublished={datePublished}
        defaultTitle={seo.title}
        description={description}
        image={image}
        isBlogPost={isBlogPost}
        organization={seo.organization}
        title={title}
        url={url}
      />
    </>
  )
}

export const SEO: FC<Partial<SEOProps>> = ({
  isBlogPost = false,
  postData = {},
  metaImageURL,
  pageTitle,
}) => {
  const data = useStaticQuery<SeoSiteMetadataQuery>(graphql`
    query SEOSiteMetadata {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          image
          author {
            name
          }
          organization {
            name
            url
            logo
          }
          social {
            twitter
            fbAppID
          }
        }
      }
      fallBackImage: file(name: { eq: "marcus-profile-circle" }) {
        childImageSharp {
          fixed(width: 100) {
            src
          }
        }
      }
    }
  `)

  return (
    <SEOComponent
      isBlogPost={isBlogPost}
      metaImageURL={metaImageURL}
      pageTitle={pageTitle}
      postData={postData}
      siteMetadata={data}
    />
  )
}
