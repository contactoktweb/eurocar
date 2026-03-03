import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ctaSection',
  title: 'Sección CTA (Llamado a la acción)',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      description: 'Texto pequeño arriba del título (e.g. "Estamos para ayudarte").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Título de la sección.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      description: 'Texto descriptivo debajo del título.',
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
        title: title || 'Sección CTA',
        subtitle: 'Gestión del llamado a la acción final',
      }
    },
  },
})
