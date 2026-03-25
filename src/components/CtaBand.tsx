import Link from "next/link";

export default function CtaBand({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  bg = "bg-sky",
}: {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
  bg?: string;
}) {
  return (
    <section className={`${bg} py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-white/80 mb-8">{subtitle}</p>
        )}
        <Link
          href={ctaHref}
          className="inline-block bg-white text-navy px-8 py-3.5 rounded-lg font-semibold hover:bg-offwhite transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
