import { ReactNode } from "react";

export default function ProfileCard({
  nome,
  credencial,
  bio,
  especialidade,
  initials,
  icon,
  gradientFrom = "from-sky",
  gradientTo = "to-blue",
  borderColor = "border-sky",
}: {
  nome: string;
  credencial: string;
  bio: string;
  especialidade: string;
  initials: string;
  icon: ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  borderColor?: string;
}) {
  return (
    <div className={`bg-white rounded-2xl p-8 border-t-4 ${borderColor} shadow-sm`}>
      {/* Avatar: iniciais + ícone */}
      <div className="relative w-28 h-28 mx-auto mb-6">
        <div
          className={`w-28 h-28 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center shadow-lg`}
        >
          <span className="text-3xl font-bold text-white tracking-wide">
            {initials}
          </span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
          {icon}
        </div>
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
