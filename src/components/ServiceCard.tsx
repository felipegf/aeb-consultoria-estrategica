export default function ServiceCard({
  title,
  description,
  bullets,
}: {
  title: string;
  description: string;
  bullets?: string[];
}) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-sub leading-relaxed mb-4">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text">
              <span className="text-teal mt-0.5 shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
