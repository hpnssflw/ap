interface AcidButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function AcidButton({ href, children, external = false }: AcidButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative inline-block px-3 py-1  font-serif italic tracking-wide transition-all duration-300"
    >
      {/* Glow effect background */}
      <span className="absolute inset-0  bg-[#00bfff] opacity-20 blur-sm group-hover:opacity-30 group-hover:blur-md transition-all duration-300" />
      
      {/* Button border and background */}
      <span className="relative flex items-center justify-center border  border-[#00bfff] bg-black/50 px-2.5 py-1 backdrop-blur-sm group-hover:bg-[#00bfff]/10 group-hover:border-[#00bfff] group-hover:shadow-[0_0_12px_rgba(0,191,255,0.4)] transition-all duration-300">
        <span className="relative z-10 text-[#00bfff] group-hover:text-[#00d9ff] transition-colors duration-300">
          {children}
        </span>
        
        {/* Inner glow */}
        <span className="absolute inset-0  bg-[#00bfff] opacity-0 group-hover:opacity-10 blur-sm transition-all duration-300" />
      </span>
    </a>
  );
}

