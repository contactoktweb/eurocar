import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featuresSection',
  title: 'Sección Características',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      description: 'Texto pequeño que aparece arriba del título principal (e.g. "Experiencia y calidad").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Título de la sección de características.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description1',
      title: 'Descripción (Párrafo 1)',
      type: 'text',
      description: 'Primer párrafo descriptivo.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description2',
      title: 'Descripción (Párrafo 2)',
      type: 'text',
      description: 'Segundo párrafo descriptivo.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Características (Grid)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            {
              name: 'label',
              title: 'Etiqueta',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icono (Lucide name)',
              type: 'string',
              description: 'Nombre del icono de Lucide (e.g. Cog, Search, Wrench, etc.)',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Sección Características',
        subtitle: 'Gestión de características de la página de inicio',
      }
    },
  },
})
