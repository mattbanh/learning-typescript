import Link from "next/link";

export default function Header() {
  return (
    <section className="mx-16 my-2 flex justify-between">
      <Link href="/">Home</Link>
      <nav>
        <ul>
          <li>
            <Link href="/part-1">Part 1</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
