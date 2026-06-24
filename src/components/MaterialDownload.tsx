"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import type { Segment } from "@/app/para-quem-atendemos/segments";

interface FormData {
  nome: string;
  email: string;
}

export default function MaterialDownload({ segment }: { segment: Segment }) {
  const { accent } = segment;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { nome: "", email: "" },
  });
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);

  const triggerDownload = () => {
    const a = document.createElement("a");
    a.href = segment.pdf;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const onSubmit = async (data: FormData) => {
    setFailed(false);
    try {
      const res = await fetch("/api/material", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          nome: data.nome,
          material: segment.label,
          segmento: segment.value,
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setDone(true);
      triggerDownload();
    } catch {
      setFailed(true);
    }
  };

  if (done) {
    return (
      <div className={`rounded-2xl p-8 ${accent.softBg}`}>
        <p className={`text-lg font-semibold ${accent.text} mb-2`}>
          Pronto! O download começou.
        </p>
        <p className="text-sm text-sub">
          Se o arquivo não baixar automaticamente,{" "}
          <a
            href={segment.pdf}
            download
            className="font-semibold text-blue hover:underline"
          >
            clique aqui para baixar o PDF
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto text-left space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Nome
        </label>
        <input
          {...register("nome")}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          E-mail *
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Campo obrigatório",
            pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" },
          })}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky"
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full ${accent.bg} text-white py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50`}
      >
        {isSubmitting ? "Enviando..." : "Baixar PDF"}
      </button>

      {failed && (
        <p className="text-sm text-red-500 text-center">
          Não foi possível enviar agora. Tente novamente ou{" "}
          <Link href="/contato" className="font-semibold underline">
            fale com a gente
          </Link>
          .
        </p>
      )}

      <p className="text-xs text-sub leading-relaxed">
        Ao baixar, você concorda com o tratamento dos seus dados pela A&amp;B
        Consultoria Estratégica conforme a Lei Geral de Proteção de Dados (Lei nº
        13.709/2018). Usamos seu e-mail apenas para contato sobre este material e
        não o compartilhamos com terceiros.
      </p>
    </form>
  );
}
