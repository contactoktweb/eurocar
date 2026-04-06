import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { client } from '@/sanity/lib/client';
import { globalConfigQuery } from '@/sanity/lib/queries';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, email, asunto, mensaje } = await request.json();

    // Validar datos básicos
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    // Obtener configuración global desde Sanity
    const globalConfig = await client.fetch(globalConfigQuery, {}, { cache: 'no-store' });
    
    // Correo de destino desde Sanity o un fallback
    const targetEmail = globalConfig?.email || 'ventas@germany-motors.com';

    // Construir la plantilla HTML
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-w-2xl; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #d11212; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nuevo mensaje de contacto web</h2>
        
        <p style="color: #555; font-size: 16px;">Has recibido un nuevo mensaje desde el formulario de la página web de Germany Motors.</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Nombre:</strong> ${nombre}</p>
          <p style="margin: 5px 0;"><strong>Email del Remitente:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 5px 0;"><strong>Asunto:</strong> ${asunto || 'Sin asunto'}</p>
        </div>
        
        <h3 style="color: #333;">Mensaje:</h3>
        <div style="background-color: #f1f5f9; padding: 15px; border-radius: 5px; font-style: italic; white-space: pre-wrap;">
          ${mensaje}
        </div>
        
        <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
          Este correo fue generado automáticamente por la página web. Si deseas responder al usuario, hazlo directamente a su email: ${email}
        </p>
      </div>
    `;

    // Enviar correo con Resend
    const data = await resend.emails.send({
      from: 'Germany Motors Web <onboarding@resend.dev>', // Importante: usar onboarding en cuentas gratuitas o tu dominio verificado
      to: targetEmail,
      subject: `Nuevo Contacto Web: ${asunto || 'Pregunta general'}`,
      html: htmlTemplate,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error) {
    console.error('Error al procesar el contacto:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
