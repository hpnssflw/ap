import Link from "next/link";

export default function Navigation() {
  return (
    <nav className=" flex items-center justify-center w-fit gap-1 ">
      <p className="text-zinc-300">You can see more in </p>
      <Link
        href="/#projects"
        className="transition-colors hover:text-zinc-300 italic font-medium underline"
      >
        works
      </Link>
      <p>,</p>
      <Link
        href="/career"
        className="transition-colors hover:text-zinc-300 italic font-medium underline"
      >
        career
      </Link>
      .
    </nav>
  );
}
