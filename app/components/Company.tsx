import Project from "./Project";

interface ProjectData {
  title: string;
  description: string;
  role: string;
  stack: string;
  url?: string;
}

interface CompanyProps {
  name: string;
  years: string;
  description: string;
  projects: ProjectData[];
}

export default function Company({
  name,
  years,
  description,
  projects,
}: CompanyProps) {
  return (
    <div className="flex flex-col gap-4 bg-zinc-900/20 border border-zinc-800/30 rounded-lg p-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
          <h3 className="text-white text-sm font-medium">{name}</h3>
          <span className="text-zinc-500 text-xs">{years}</span>
        </div>
        <p className="text-zinc-400 text-xs leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-col gap-5 pt-2">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
