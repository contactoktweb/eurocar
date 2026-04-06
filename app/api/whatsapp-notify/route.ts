import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { client } from '@/sanity/lib/client';
import { globalConfigQuery } from '@/sanity/lib/queries';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    // Obtener configuración global desde Sanity para saber a quién notificar
    const globalConfig = await client.fetch(globalConfigQuery, {}, { cache: 'no-store' });
    
    // Correo de destino desde Sanity o un fallback
    const targetEmail = globalConfig?.email || 'ventas@germany-motors.com';

    // Construir la plantilla HTML
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-w-2xl; margin: 0 auto; padding: 20px; border: 1px solid #128C7E; border-radius: 8px;">
        <div style="background-color: #25D366; padding: 15px; border-radius: 5px; text-align: center;">
          <h2 style="color: white; margin: 0;">¡Nueva interacción en WhatsApp! 💬</h2>
        </div>
        
        <p style="color: #333; font-size: 16px; margin-top: 20px;">
          Un visitante acaba de hacer clic en el botón flotante de WhatsApp en la página web Germany Motors.
        </p>
        
        <p style="color: #555; background-color: #f9f9f9; padding: 10px; border-left: 4px solid #128C7E;">
          Es muy probable que recibas un mensaje de WhatsApp en los próximos minutos. ¡Asegúrate de estar atento a tu aplicación de WhatsApp!
        </p>
        
        <p style="margin-top: 40px; font-size: 11px; color: #aaa; text-align: center;">
          Notificación automática del sistema web Germany Motors.
        </p>
      </div>
    `;

    // Enviar correo con Resend
    const data = await resend.emails.send({
      from: 'Germany Motors Web <onboarding@resend.dev>', 
      to: targetEmail,
      subject: `📱 Alerta: Un usuario está intentando contactarte por WhatsApp`,
      html: htmlTemplate,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error) {
    console.error('Error al enviar notificacion de whatsapp:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
