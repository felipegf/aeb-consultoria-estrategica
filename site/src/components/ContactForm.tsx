"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  instituicao: string;
  segmento: string;
  mensagem: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  if (submitted) {
    return (
      <div className="bg-teal/10 border border-teal/30 rounded-2xl p-8 text-center">
        <p className="text-lg font-semibold text-teal mb-2">
          Recebemos sua mensagem!
        </p>
        <p className="text-sm text-sub">
          Retornaremos em até 24 horas úteis.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Nome */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Nome completo *
        </label>
        <input
          {...register("nome", { required: "Campo obrigatório" })}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky"
        />
        {errors.nome && (
          <p className="text-xs text-red-500 mt-1">{errors.nome.message}</p>
        )}
      </div>

      {/* Email */}
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

      {/* Telefone */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Telefone / WhatsApp *
        </label>
        <input
          type="tel"
          {...register("telefone", { required: "Campo obrigatório" })}
          placeholder="(00) 00000-0000"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky"
        />
        {errors.telefone && (
          <p className="text-xs text-red-500 mt-1">{errors.telefone.message}</p>
        )}
      </div>

      {/* Instituição */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Município / Instituição / Empresa
        </label>
        <input
          {...register("instituicao")}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky"
        />
      </div>

      {/* Segmento */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Segmento de interesse
        </label>
        <select
          {...register("segmento")}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky bg-white"
        >
          <option value="">Selecione...</option>
          <option value="governos">Inteligência para Governos</option>
          <option value="negocios">Inteligência para Negócios</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      {/* Mensagem */}
      <div>
        <label className="block text-sm font-medium text-text mb-1.5">
          Como podemos ajudar? *
        </label>
        <textarea
          rows={4}
          {...register("mensagem", { required: "Campo obrigatório" })}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-sky/50 focus:border-sky resize-none"
        />
        {errors.mensagem && (
          <p className="text-xs text-red-500 mt-1">{errors.mensagem.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-sky text-white py-3.5 rounded-lg font-semibold hover:bg-blue transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>

      {/* LGPD */}
      <p className="text-xs text-sub leading-relaxed">
        Ao enviar este formulário, você concorda com o tratamento dos seus dados
        pessoais pela A&B Consultoria Estratégica, conforme a Lei Geral de
        Proteção de Dados (Lei nº 13.709/2018). Seus dados serão utilizados
        exclusivamente para responder à sua solicitação e não serão
        compartilhados com terceiros. Para exercer seus direitos de acesso,
        correção ou exclusão, entre em contato pelo nosso e-mail institucional.
      </p>
    </form>
  );
}
