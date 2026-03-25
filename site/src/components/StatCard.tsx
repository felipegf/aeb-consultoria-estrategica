export default function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="bg-navy rounded-2xl p-8 text-center">
      <p className="text-4xl font-bold text-white mb-2">{value}</p>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  );
}
