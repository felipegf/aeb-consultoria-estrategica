export default function TestimonialCard({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
      <div>
        <svg className="w-8 h-8 text-sky/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
        </svg>
        <p className="text-text leading-relaxed italic">{quote}</p>
      </div>
      <p className="text-sm font-semibold text-navy mt-6">— {author}</p>
    </div>
  );
}
