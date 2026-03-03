import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Página de Contacto',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'info', title: 'Información Extra' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtítulo',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Título',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroTitleHighlight',
      title: 'Hero Título (Destacado)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Descripción',
      type: 'text',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Imagen',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),

    // Section Titles
    defineField({
      name: 'formSubtitle',
      title: 'Formulario Subtítulo',
      type: 'string',
      group: 'info',
    }),
    defineField({
      name: 'formTitle',
      title: 'Formulario Título',
      type: 'string',
      group: 'info',
    }),
    defineField({
      name: 'mapSubtitle',
      title: 'Mapa Subtítulo',
      type: 'string',
      group: 'info',
    }),
    defineField({
      name: 'mapTitle',
      title: 'Mapa Título',
      type: 'string',
      group: 'info',
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
        title: 'Configuración Página de Contacto',
      }
    },
  },
})
