import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sparePart',
  title: 'Repuestos (Items)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Repuesto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
