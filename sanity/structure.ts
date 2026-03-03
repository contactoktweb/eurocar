import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Configuración Global')
        .id('globalConfig')
        .child(
          S.document()
            .schemaType('globalConfig')
            .documentId('globalConfig')
        ),
      S.divider(),
      S.listItem()
        .title('Sección Hero')
        .id('heroSection')
        .child(
          S.document()
            .schemaType('heroSection')
            .documentId('heroSection')
        ),
      S.divider(),
      S.listItem()
        .title('Sección Servicios')
        .id('servicesSection')
        .child(
          S.document()
            .schemaType('servicesSection')
            .documentId('servicesSection')
        ),
      S.divider(),
      S.listItem()
        .title('Sección Características')
        .id('featuresSection')
        .child(
          S.document()
            .schemaType('featuresSection')
            .documentId('featuresSection')
        ),
      S.divider(),
      S.listItem()
        .title('Sección Ofertas')
        .id('offersSection')
        .child(
          S.document()
            .schemaType('offersSection')
            .documentId('offersSection')
        ),
      S.divider(),
      S.listItem()
        .title('Sección CTA')
        .id('ctaSection')
        .child(
          S.document()
            .schemaType('ctaSection')
            .documentId('ctaSection')
        ),
      S.divider(),
      S.listItem()
        .title('Configuración Página Repuestos')
        .id('sparePartsPage')
        .child(
          S.document()
            .schemaType('sparePartsPage')
            .documentId('sparePartsPage')
        ),
      S.divider(),
      S.listItem()
        .title('Configuración Página Nosotros')
        .id('aboutPage')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
      S.divider(),
      S.listItem()
        .title('Configuración Página Blog')
        .id('blogPage')
        .child(
          S.document()
            .schemaType('blogPage')
            .documentId('blogPage')
        ),
      S.divider(),
      S.listItem()
        .title('Configuración Página Contacto')
        .id('contactPage')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['globalConfig', 'heroSection', 'servicesSection', 'featuresSection', 'offersSection', 'ctaSection', 'sparePartsPage', 'aboutPage', 'blogPage', 'contactPage'].includes(listItem.getId() as string)
      ),
    ])
