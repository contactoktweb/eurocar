import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPage',
  title: 'Página de Blog',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtítulo',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Título',
      type: 'string',
    }),
    defineField({
      name: 'heroTitleHighlight',
      title: 'Hero Título (Destacado)',
      type: 'string',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Descripción',
      type: 'text',
    }),
    // SEO
    defineField({
      name: 'seoTitle',
      title: 'SEO Título',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Descripción',
      type: 'text',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Configuración Página de Blog',
      }
    },
  },
})
