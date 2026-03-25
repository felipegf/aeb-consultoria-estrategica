import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { nome, email, telefone, mensagem } = data;
    if (!nome || !email || !telefone || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios não preenchidos." },
        { status: 400 }
      );
    }

    // TODO: Integrar com Resend para envio de e-mail
    // Exemplo:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'site@aebconsultoria.com.br',
    //   to: 'abconsultoriaestrategica@gmail.com',
    //   subject: `Novo contato: ${nome}`,
    //   html: `<p><strong>Nome:</strong> ${nome}</p>
    //          <p><strong>E-mail:</strong> ${email}</p>
    //          <p><strong>Telefone:</strong> ${telefone}</p>
    //          <p><strong>Instituição:</strong> ${data.instituicao || '-'}</p>
    //          <p><strong>Segmento:</strong> ${data.segmento || '-'}</p>
    //          <p><strong>Mensagem:</strong> ${mensagem}</p>`,
    // });

    console.log("Contato recebido:", data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
