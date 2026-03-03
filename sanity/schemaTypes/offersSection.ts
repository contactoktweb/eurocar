import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'offersSection',
  title: 'Sección Ofertas',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      description: 'Texto pequeño arriba del título (e.g. "Ahorra hoy").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Título de la sección de ofertas.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción Introductoria',
      type: 'text',
      description: 'Texto descriptivo debajo del título.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'offerImage',
      title: 'Imagen de la Oferta',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'offerTitle',
      title: 'Título de la Oferta (Card)',
      type: 'string',
      description: 'Título que aparece sobre la imagen.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'offerDescription',
      title: 'Descripción de la Oferta (Card)',
      type: 'text',
      description: 'Descripción que aparece sobre la imagen.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'Texto del Botón',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLink',
      title: 'Enlace del Botón',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Sección Ofertas',
        subtitle: 'Gestión de promociones especiales',
      }
    },
  },
})
