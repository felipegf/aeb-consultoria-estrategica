export default function ProfileCard({
  nome,
  credencial,
  bio,
  especialidade,
  borderColor = "border-sky",
}: {
  nome: string;
  credencial: string;
  bio: string;
  especialidade: string;
  borderColor?: string;
}) {
  return (
    <div className={`bg-white rounded-2xl p-8 border-t-4 ${borderColor} shadow-sm`}>
      {/* Placeholder foto */}
      <div className="w-24 h-24 rounded-full bg-mist flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-sub/40" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-navy text-center mb-1">{nome}</h3>
      <p className="text-xs text-sub text-center mb-4">{credencial}</p>
      <p className="text-sm text-text leading-relaxed text-center mb-5">{bio}</p>
      <div className="bg-mist rounded-lg px-4 py-2 text-center">
        <span className="text-xs font-semibold text-blue">{especialidade}</span>
      </div>
    </div>
  );
}
