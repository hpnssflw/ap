interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function SocialLink({ href, children, external = false }: SocialLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative inline-flex items-center text-[12px] gap-2 transition-all duration-300 hover:gap-3"
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
      </span>
      <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        →
      </span>
    </a>
  );
}

