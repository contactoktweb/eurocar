import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Sección Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'backgroundImage',
      title: 'Imagen de Fondo',
      type: 'image',
      description: 'Imagen que aparece de fondo en el hero.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      description: 'Texto pequeño que aparece arriba del título principal.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título Principal (Parte 1)',
      type: 'string',
      description: 'La primera parte del título principal (antes del resaltado).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleHighlight',
      title: 'Título Principal (Resaltado)',
      type: 'string',
      description: 'La parte del título que aparecerá en color primario.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      description: 'El párrafo descriptivo que aparece debajo del título.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'Texto del Botón Principal',
      type: 'string',
      description: 'Texto que aparecerá en el botón de acción principal.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLink',
      title: 'Enlace del Botón Principal',
      type: 'string',
      description: 'Ruta o URL a la que redirigirá el botón principal.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Sección Hero',
        subtitle: 'Contenido de la página de inicio',
        media,
      }
    },
  },
})
