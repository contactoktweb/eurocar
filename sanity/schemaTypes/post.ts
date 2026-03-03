import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Entradas de Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen (Excerpt)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `por ${author}` }
    },
  },
})
