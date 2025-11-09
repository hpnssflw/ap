import Link from "next/link";

export default function Navigation() {
  return (
    <nav className=" flex items-center justify-center w-fit gap-1">
      <p>You can see more in </p>
      <Link
        href="/#projects"
        className="transition-colors hover:text-zinc-300 font-serif underline"
      >
        works
      </Link>
      <Link
        href="/career"
        className="transition-colors hover:text-zinc-300 font-serif underline"
      >
        career
      </Link>
      .
    </nav>
  );
}
