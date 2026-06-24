import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface MaterialLead {
  email: string;
  nome?: string;
  /** rótulo legível do material/perfil, ex.: "Gestor Público" */
  material: string;
  /** slug do segmento, ex.: "gestor-publico" */
  segmento?: string;
}

export async function POST(request: Request) {
  try {
    const data: MaterialLead = await request.json();

    const { email, material } = data;
    if (!email || !material) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos." },
        { status: 400 }
      );
    }

    const nome = data.nome?.trim() || "Não informado";
    const dataHora = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.CONTACT_EMAIL ?? "abconsultoriaestrategica@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD ?? "",
      },
    });

    const emailHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Novo download de material</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f7fa; margin: 0; padding: 24px; }
    .container { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(12,35,64,0.08); }
    .header { background-color: #0C2340; padding: 28px 32px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.2px; }
    .header p { color: #a3bdd8; margin: 6px 0 0; font-size: 14px; }
    .body { padding: 32px; }
    .field { margin-bottom: 20px; }
    .field:last-child { margin-bottom: 0; }
    .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.6px; color: #7a8ba8; font-weight: 600; margin: 0 0 6px; }
    .value { font-size: 15px; color: #0C2340; margin: 0; line-height: 1.5; }
    .footer { background: #f5f7fa; padding: 20px 32px; text-align: center; }
    .footer p { color: #7a8ba8; margin: 0; font-size: 13px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>A&amp;B Consultoria Estratégica</h1>
      <p>Novo download de material pelo site</p>
    </div>
    <div class="body">
      <div class="field">
        <p class="label">Material baixado</p>
        <p class="value">${material}</p>
      </div>
      <div class="field">
        <p class="label">E-mail</p>
        <p class="value">${email}</p>
      </div>
      <div class="field">
        <p class="label">Nome</p>
        <p class="value">${nome}</p>
      </div>
      <div class="field">
        <p class="label">Perfil / Segmento</p>
        <p class="value">${data.segmento || "Não informado"}</p>
      </div>
      <div class="field">
        <p class="label">Data / hora</p>
        <p class="value">${dataHora}</p>
      </div>
    </div>
    <div class="footer">
      <p>Lead gerado automaticamente pelo download de material do site.</p>
    </div>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: `"A&B Consultoria" <${process.env.CONTACT_EMAIL ?? "abconsultoriaestrategica@gmail.com"}>`,
      to: process.env.CONTACT_EMAIL ?? "abconsultoriaestrategica@gmail.com",
      replyTo: email,
      subject: `📥 Novo download (${material}): ${email}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/material] erro ao enviar lead:", err);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
