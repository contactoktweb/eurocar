import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'globalConfig',
  title: 'Configuración Global',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo Principal',
      type: 'image',
      description: 'El logo principal de la página.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteTitle',
      title: 'Título del Sitio',
      type: 'string',
      description: 'Título que aparecerá en la pestaña del navegador (e.g. A&M euro cars | Taller Especializado).',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Descripción del Sitio',
      type: 'text',
      description: 'Breve descripción para SEO que aparecerá en los resultados de búsqueda.',
    }),
    defineField({
      name: 'email',
      title: 'Correo Electrónico',
      type: 'string',
      description: 'Correo electrónico de contacto público.',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      description: 'Número de teléfono de contacto (e.g. +57 300 000 0000).',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      description: 'Número de WhatsApp sin símbolos ni espacios (e.g. 573000000000).',
    }),
    defineField({
      name: 'address',
      title: 'Dirección Física',
      type: 'text',
      description: 'Dirección de la tienda o sede principal.',
    }),
    defineField({
      name: 'socialNetworks',
      title: 'Redes Sociales',
      type: 'object',
      description: 'Enlaces directos a los perfiles de redes sociales.',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'tiktok',
          title: 'TikTok URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'mapIframe',
      title: 'Iframe del Mapa',
      type: 'text',
      description: 'Pegue aquí el código iframe de Google Maps (solo la URL src o el tag completo).',
    }),
    defineField({
      name: 'schedule',
      title: 'Horario de Atención',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Escriba cada línea del horario (e.g. Lunes a Viernes: 8:00 AM - 6:00 PM).',
    }),
    defineField({
      name: 'footerDescription',
      title: 'Descripción del Footer',
      type: 'text',
      description: 'Breve descripción de la empresa que aparecerá en el pie de página.',
    }),
  ],
  preview: {
    select: {
      title: 'email',
      media: 'logo',
    },
    prepare({ title, media }) {
      return {
        title: 'Configuración Global',
        subtitle: title ? `Contacto: ${title}` : 'Sin configurar',
        media,
      }
    },
  },
})
