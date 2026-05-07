import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContatoData {
  nome: string;
  email: string;
  telefone: string;
  instituicao?: string;
  segmento?: string;
  mensagem: string;
}

function segmentLabel(value?: string): string {
  const map: Record<string, string> = {
    governos: "Inteligência para Governos",
    negocios: "Inteligência para Negócios",
    outro: "Outro",
  };
  return map[value ?? ""] ?? (value || "Não informado");
}

export async function POST(request: Request) {
  try {
    const data: ContatoData = await request.json();

    const { nome, email, telefone, mensagem } = data;
    if (!nome || !email || !telefone || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos." },
        { status: 400 }
      );
    }

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
  <title>Novo contato via site</title>
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
    .value.message { white-space: pre-wrap; background: #f5f7fa; padding: 14px; border-radius: 8px; }
    .footer { background: #f5f7fa; padding: 20px 32px; text-align: center; }
    .footer p { color: #7a8ba8; margin: 0; font-size: 13px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>A&amp;B Consultoria Estratégica</h1>
      <p>Novo contato recebido pelo site</p>
    </div>
    <div class="body">
      <div class="field">
        <p class="label">Nome</p>
        <p class="value">${nome}</p>
      </div>
      <div class="field">
        <p class="label">E-mail</p>
        <p class="value">${email}</p>
      </div>
      <div class="field">
        <p class="label">Telefone / WhatsApp</p>
        <p class="value">${telefone}</p>
      </div>
      <div class="field">
        <p class="label">Município / Instituição / Empresa</p>
        <p class="value">${data.instituicao || "Não informado"}</p>
      </div>
      <div class="field">
        <p class="label">Segmento de interesse</p>
        <p class="value">${segmentLabel(data.segmento)}</p>
      </div>
      <div class="field">
        <p class="label">Mensagem</p>
        <p class="value message">${mensagem}</p>
      </div>
    </div>
    <div class="footer">
      <p>Este email foi gerado automaticamente pelo formulário de contato do site.</p>
    </div>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: `\"A&B Consultoria\" <${process.env.CONTACT_EMAIL ?? "abconsultoriaestrategica@gmail.com"}>`,
      to: process.env.CONTACT_EMAIL ?? "abconsultoriaestrategica@gmail.com",
      replyTo: email,
      subject: `Novo contato via site: ${nome}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
