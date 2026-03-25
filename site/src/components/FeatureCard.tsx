import { ReactNode } from "react";

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-offwhite rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-sky/10 text-sky flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-sub leading-relaxed">{description}</p>
    </div>
  );
}
