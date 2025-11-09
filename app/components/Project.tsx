interface ProjectProps {
  title: string;
  description: string;
  role: string;
  stack: string;
  url?: string;
}

export default function Project({ title, description, role, stack, url }: ProjectProps) {
  return (
    <div>
      <h4 className="font-medium">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="transition-colors">
            {title}
          </a>
        ) : (
          title
        )}
      </h4>
      <p className="">{description}</p>
      <p className="mt-2.5"> {role}</p>
      <p className="tech-gradient font-serif">{stack}</p>
    </div>
  );
}

