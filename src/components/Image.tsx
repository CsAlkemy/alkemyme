/** @jsx jsx */

import Img from 'gatsby-image'
import { FC } from 'react'
import { jsx } from 'theme-ui'

import { CommonComponentProps } from '../types'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const Image: FC<{ sharpImage: any } & CommonComponentProps> = ({
  sharpImage,
  ...rest
}) => (
  // @ts-ignore
  <Img fluid={sharpImage.childImageSharp.fluid} {...rest} />
)
