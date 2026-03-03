import { type SchemaTypeDefinition } from 'sanity'
import globalConfig from './globalConfig'
import heroSection from './heroSection'
import servicesSection from './servicesSection'
import featuresSection from './featuresSection'
import offersSection from './offersSection'
import ctaSection from './ctaSection'
import sparePart from './sparePart'
import sparePartsPage from './sparePartsPage'
import aboutPage from './aboutPage'
import post from './post'
import blogPage from './blogPage'
import contactPage from './contactPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [globalConfig, heroSection, servicesSection, featuresSection, offersSection, ctaSection, sparePart, sparePartsPage, aboutPage, post, blogPage, contactPage],
}
