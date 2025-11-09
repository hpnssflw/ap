interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function SocialLink({
  href,
  children,
  external = false,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center text-[12px] text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-800 hover:decoration-zinc-500"
    >
      {children}
    </a>
  );
}
