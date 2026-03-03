import { groq } from 'next-sanity'

export const globalConfigQuery = groq`
  *[_type == "globalConfig"][0] {
    ...,
    "logoUrl": logo.asset->url
  }
`

export const heroSectionQuery = groq`
  *[_type == "heroSection"][0] {
    ...,
    "backgroundUrl": backgroundImage.asset->url
  }
`

export const servicesSectionQuery = groq`
  *[_type == "servicesSection"][0] {
    ...
  }
`

export const featuresSectionQuery = groq`
  *[_type == "featuresSection"][0] {
    ...
  }
`

export const offersSectionQuery = groq`
  *[_type == "offersSection"][0] {
    ...,
    "offerImageUrl": offerImage.asset->url
  }
`

export const ctaSectionQuery = groq`
  *[_type == "ctaSection"][0] {
    ...
  }
`

export const sparePartsPageQuery = groq`
  *[_type == "sparePartsPage"][0] {
    ...,
    "heroImageUrl": heroImage.asset->url
  }
`

export const sparePartsQuery = groq`
  *[_type == "sparePart"] | order(_createdAt asc) {
    ...,
    "imageUrl": image.asset->url
  }
`

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    ...,
    "heroImageUrl": heroImage.asset->url
  }
`

export const blogPageQuery = groq`
  *[_type == "blogPage"][0] {
    ...
  }
`

export const blogPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    ...,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset->url
  }
`

export const blogPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    "mainImageUrl": mainImage.asset->url
  }
`

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    ...,
    "heroImageUrl": heroImage.asset->url
  }
`
