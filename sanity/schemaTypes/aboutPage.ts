import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'Página Nosotros',
  type: 'document',
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
      title: 'Hero Título (Parte 1)',
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
      title: 'Hero Imagen de Fondo',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),

    // Misión Section
    defineField({
      name: 'missionSubtitle',
      title: 'Misión Subtítulo',
      type: 'string',
      group: 'missionVision',
    }),
    defineField({
      name: 'missionTitle',
      title: 'Misión Título',
      type: 'string',
      group: 'missionVision',
    }),
    defineField({
      name: 'missionDescription',
      title: 'Misión Descripción',
      type: 'text',
      group: 'missionVision',
    }),

    // Visión Section
    defineField({
      name: 'visionSubtitle',
      title: 'Visión Subtítulo',
      type: 'string',
      group: 'missionVision',
    }),
    defineField({
      name: 'visionTitle',
      title: 'Visión Título',
      type: 'string',
      group: 'missionVision',
    }),
    defineField({
      name: 'visionDescription',
      title: 'Visión Descripción',
      type: 'text',
      group: 'missionVision',
    }),

    // Why Choose Us
    defineField({
      name: 'whySubtitle',
      title: 'Por Qué Elegirnos - Subtítulo',
      type: 'string',
      group: 'whyChooseUs',
    }),
    defineField({
      name: 'whyTitle',
      title: 'Por Qué Elegirnos - Título',
      type: 'string',
      group: 'whyChooseUs',
    }),
    defineField({
      name: 'strengths',
      title: 'Nuestras Fortalezas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Etiqueta', type: 'string' },
            { name: 'icon', title: 'Nombre del Icono (Lucide)', type: 'string' },
          ],
        },
      ],
      group: 'whyChooseUs',
    }),

    // Stats Section
    defineField({
      name: 'stats',
      title: 'Estadísticas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Valor (e.g. 800+)', type: 'string' },
            { name: 'label', title: 'Etiqueta', type: 'string' },
          ],
        },
      ],
      group: 'stats',
    }),

    // Detailed Services Section
    defineField({
      name: 'servicesSubtitle',
      title: 'Servicios - Subtítulo',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Servicios - Título',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'servicesList',
      title: 'Lista de Servicios Detallada',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Título', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'text' },
            { name: 'icon', title: 'Nombre del Icono (Lucide)', type: 'string' },
          ],
        },
      ],
      group: 'services',
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
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'missionVision', title: 'Misión y Visión' },
    { name: 'whyChooseUs', title: 'Por Qué Elegirnos' },
    { name: 'stats', title: 'Estadísticas' },
    { name: 'services', title: 'Servicios' },
    { name: 'seo', title: 'SEO' },
  ],
  preview: {
    prepare() {
      return {
        title: 'Configuración Página Nosotros',
      }
    },
  },
})
