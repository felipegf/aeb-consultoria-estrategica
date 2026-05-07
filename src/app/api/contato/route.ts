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

    const mailOptions = {
      from: `"A&B Consultoria" <${process.env.CONTACT_EMAIL ?? "abconsultoriaestrategica@gmail.com"}>`,
      to: process.env.CONTACT_EMAIL ?? "abconsultoriaestrategica@gmail.com",
      replyTo: email,
      subject: `Novo contato via site: ${nome}`,
      html: `<p><strong>Nome:</strong> ${nome}</p>
             <p><strong>E-mail:</strong> ${email}</p>
             <p><strong>Telefone:</strong> ${telefone}</p>
             <p><strong>Instituição:</strong> ${data.instituicao || "-"}</p>
             <p><strong>Segmento:</strong> ${data.segmento || "-"}</p>
             <p><strong>Mensagem:</strong> ${mensagem}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
