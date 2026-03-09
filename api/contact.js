import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { nom, email, telephone, service, message } = req.body;

    if (!nom || !email || !message) {
        return res.status(400).json({ error: 'Champs requis manquants' });
    }

    try {
        await resend.emails.send({
            from: 'RE7SET Contact <contact@re7set.com>',
            to: 'contact@re7set.com',
            replyTo: email,
            subject: `Nouvelle demande — ${service || 'Non précisé'} — ${nom}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #09090B;">
                    <h2 style="margin-bottom: 24px; font-size: 20px; border-bottom: 1px solid #E4E4E7; padding-bottom: 12px;">
                        Nouvelle demande de contact RE7SET
                    </h2>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr style="border-bottom: 1px solid #F4F4F5;">
                            <td style="padding: 10px 0; font-size: 13px; color: #71717A; width: 140px;">Nom</td>
                            <td style="padding: 10px 0; font-size: 14px; font-weight: 600;">${nom}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #F4F4F5;">
                            <td style="padding: 10px 0; font-size: 13px; color: #71717A;">Email</td>
                            <td style="padding: 10px 0; font-size: 14px;">
                                <a href="mailto:${email}" style="color: #2563EB;">${email}</a>
                            </td>
                        </tr>
                        ${telephone ? `
                        <tr style="border-bottom: 1px solid #F4F4F5;">
                            <td style="padding: 10px 0; font-size: 13px; color: #71717A;">Téléphone</td>
                            <td style="padding: 10px 0; font-size: 14px;">${telephone}</td>
                        </tr>
                        ` : ''}
                        ${service ? `
                        <tr style="border-bottom: 1px solid #F4F4F5;">
                            <td style="padding: 10px 0; font-size: 13px; color: #71717A;">Service</td>
                            <td style="padding: 10px 0; font-size: 14px;">${service}</td>
                        </tr>
                        ` : ''}
                    </table>

                    <div style="margin-top: 24px;">
                        <p style="font-size: 13px; color: #71717A; margin-bottom: 8px;">Message</p>
                        <div style="background: #F9F9F8; border: 1px solid #E4E4E7; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                    </div>

                    <p style="margin-top: 32px; font-size: 12px; color: #A1A1AA;">
                        Envoyé depuis re7set.com
                    </p>
                </div>
            `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ error: 'Erreur lors de l\'envoi' });
    }
}
