export default function IcpTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="bg-mist text-blue text-xs font-medium px-3 py-1.5 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
