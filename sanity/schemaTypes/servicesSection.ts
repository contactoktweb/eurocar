import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicesSection',
  title: 'Sección Servicios',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      description: 'Texto pequeño que aparece arriba del título principal (e.g. "Lo que hacemos").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Título de la sección de servicios.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Servicios',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'service',
          fields: [
            {
              name: 'title',
              title: 'Título del Servicio',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Descripción',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icono (Lucide name)',
              type: 'string',
              description: 'Nombre del icono de Lucide (e.g. Wrench, MonitorSmartphone, etc.)',
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
        title: title || 'Sección Servicios',
        subtitle: 'Gestión de servicios de la página de inicio',
      }
    },
  },
})
