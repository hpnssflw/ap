interface ProjectProps {
  title: string;
  description: string;
  role: string;
  stack: string;
  url?: string;
}

export default function Project({
  title,
  description,
  role,
  stack,
  url,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-2 pl-3 border-l-2 border-zinc-800/50">
      <h4 className="font-medium text-sm text-white">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors underline decoration-zinc-700"
          >
            {title} ↗
          </a>
        ) : (
          title
        )}
      </h4>
      <p className="text-zinc-400 text-xs leading-relaxed">{description}</p>
      <p className="text-zinc-500 text-xs mt-1">
        <span className="text-zinc-400 font-medium">Role:</span> {role}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {stack.split(", ").map((tech, index) => (
          <span
            key={index}
            className="px-2 py-0.5 bg-zinc-800/50 text-zinc-400 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
