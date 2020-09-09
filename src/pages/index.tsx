/** @jsx jsx */

import { PageProps } from 'gatsby'
import { FC } from 'react'
import { jsx } from 'theme-ui'

import { FeaturedProducts, Hero, Layout, SEO, Section } from '../components'
import { EmailCTA } from '../components/EmailCTA'
import { LatestFromOurBlog } from '../components/LatestFromOurBlog'

const IndexPage: FC<PageProps> = () => (
  <Layout fluid>
    <SEO pageTitle="Home" />
    <Hero />
    <FeaturedProducts />
  </Layout>
)

export default IndexPage
