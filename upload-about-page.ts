import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./sanity/env";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function uploadAboutPage() {
  try {
    const heroImgPath = path.resolve(__dirname, 'public/images/about-hero.jpg');
    let heroAssetId = "";
    if (fs.existsSync(heroImgPath)) {
      console.log("Uploading Hero image...");
      const asset = await client.assets.upload('image', fs.createReadStream(heroImgPath));
      heroAssetId = asset._id;
    }

    const aboutData = {
      _id: "aboutPage",
      _type: "aboutPage",
      heroSubtitle: "Quienes somos",
      heroTitle: "Conoce a",
      heroTitleHighlight: "euro cars",
      heroDescription: "En euro cars brindamos servicio a todas las marcas y modelos, ofreciendo plena garantia en cada reparacion.",
      heroImage: heroAssetId ? { _type: 'image', asset: { _type: "reference", _ref: heroAssetId } } : undefined,
      
      missionSubtitle: "Nuestra Mision",
      missionTitle: "Excelencia en cada reparacion",
      missionDescription: "Cuando se trata de reparar o revisar su automovil, todo nuestro equipo combinado tiene casi un siglo de experiencia practica. Nuestro objetivo es hacer que nuestro servicio sea lo mas efectivo posible.",
      
      visionSubtitle: "Nuestra Vision",
      visionTitle: "Lideres en el sector automotriz",
      visionDescription: "Aspiramos a ser el taller de referencia en Colombia para vehiculos de lujo alemanes, reconocidos por nuestra integridad, conocimiento tecnico y compromiso con la satisfaccion total del cliente.",
      
      whySubtitle: "Nuestras fortalezas",
      whyTitle: "Por que elegirnos",
      strengths: [
        { icon: "Cog", label: "Repuestos Originales" },
        { icon: "Search", label: "Diagnostico Especializado" },
        { icon: "Wrench", label: "Reparacion de colisiones" },
        { icon: "Wind", label: "Aire acondicionado" },
        { icon: "Hammer", label: "Reparacion de abolladuras" },
        { icon: "MonitorSmartphone", label: "Diagnostico de vehiculos" },
        { icon: "Paintbrush", label: "Reparacion de rayones" },
        { icon: "Layers", label: "Reemplazo de vidrio" },
        { icon: "CircleDot", label: "Instalacion de neumaticos" },
        { icon: "Crosshair", label: "Alineacion de ruedas" },
        { icon: "Settings", label: "Reparacion de motor" },
        { icon: "Disc", label: "Reparacion de frenos" },
      ],
      
      stats: [
        { value: "800+", label: "Clientes Felices" },
        { value: "2000+", label: "Reparaciones Exitosas" },
        { value: "10+", label: "Mecanicos Expertos" },
        { value: "4+", label: "Anos de Experiencia" },
      ],
      
      servicesSubtitle: "Lo que hacemos",
      servicesTitle: "Nuestros servicios",
      servicesList: [
        { icon: "Wrench", title: "Reparacion de colisiones", description: "Empleamos procesos computarizados en todas las reparaciones de carroceria para proporcionar el control de calidad que usted espera." },
        { icon: "MonitorSmartphone", title: "Diagnostico del vehiculo", description: "Cumplimos con todos los estandares y controles de calidad de los fabricantes para brindarle un diagnostico confiable del automovil." },
        { icon: "CircleDot", title: "Instalacion de neumaticos", description: "Cambiamos las llantas y los neumaticos usados o averiados de su auto en forma inmediata." },
        { icon: "Wind", title: "Aire acondicionado", description: "Cambiamos el filtro de tu sistema de aire acondicionado, cuidando el desecho ecologico del filtro usado." },
        { icon: "Paintbrush", title: "Reparacion de pintura", description: "Nuestros equipos de pintura de carrocerias estan completamente calificados para manejar cualquier trabajo de pintura de automoviles, grande o pequeño." },
        { icon: "Sparkles", title: "Servicio de polichado", description: "Aplicar un acondicionador a la pintura del carro con el fin de cubrir rayones y restaurar el brillo." },
        { icon: "Hammer", title: "Reparacion de abolladuras", description: "Nos especializamos en trabajos de carroceria, estamos equipados con la maquinaria mas avanzada y empleamos solo a tecnicos capacitados." },
        { icon: "Layers", title: "Reemplazo de vidrio", description: "Tenemos experiencia para instalar todas las piezas de vidrio con resultados certificados con todo nuestro trabajo." },
        { icon: "Crosshair", title: "Alineacion de las ruedas", description: "La alineacion correcta de las ruedas garantiza una maniobrabilidad optima y un mejor control en la carretera." },
      ],
    };

    console.log("Uploading Nosotros page content to Sanity...");
    const result = await client.createOrReplace(aboutData);
    console.log("Upload successful:", result);
  } catch (error) {
    console.error("Error uploading about page:", error);
  }
}

uploadAboutPage();
