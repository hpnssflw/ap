import Project from './Project';

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

export default function Company({ name, years, description, projects }: CompanyProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="">{name} ({years})</h3>
        <p className="">{description}</p>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

