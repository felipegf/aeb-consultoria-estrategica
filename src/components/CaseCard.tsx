export default function CaseCard({
  local,
  cliente,
  titulo,
  descricao,
}: {
  local: string;
  cliente: string;
  titulo: string;
  descricao: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-teal">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="text-xs font-medium text-sub">{local}</span>
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-sky mb-2">
        {cliente}
      </p>
      <h3 className="text-lg font-bold text-navy mb-3">{titulo}</h3>
      <p className="text-sm text-sub leading-relaxed">{descricao}</p>
    </div>
  );
}
