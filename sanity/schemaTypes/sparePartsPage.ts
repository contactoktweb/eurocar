import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sparePartsPage',
  title: 'Página Repuestos (Configuración)',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtítulo',
      type: 'string',
      initialValue: 'Catalogo de repuestos',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Título (Parte 1)',
      type: 'string',
      initialValue: 'Repuestos para tu',
    }),
    defineField({
      name: 'heroTitleHighlight',
      title: 'Hero Título (Destacado)',
      type: 'string',
      initialValue: 'automovil de lujo',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Descripción',
      type: 'text',
      initialValue: 'Importamos y comercializamos repuestos de BMW, Audi, Mercedes Benz, Volkswagen y Mini Cooper. Vendemos originales, nuevos, usados y garantizados a los mejores precios.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Imagen de Fondo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'inventorySubtitle',
      title: 'Inventario Subtítulo',
      type: 'string',
      initialValue: 'Nuestro inventario',
    }),
    defineField({
      name: 'inventoryTitle',
      title: 'Inventario Título',
      type: 'string',
      initialValue: 'Categorias de repuestos',
    }),
    defineField({
      name: 'inventoryDescription',
      title: 'Inventario Descripción',
      type: 'text',
      initialValue: 'Selecciona la categoria que necesitas y contactanos directamente por WhatsApp para asesorarte.',
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
        title: 'Configuración Página Repuestos',
      }
    },
  },
})
