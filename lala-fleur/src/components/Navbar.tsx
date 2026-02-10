import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow">
      <Link href="/" className="text-xl font-bold text-pink-600">
        Lala-Fleur
      </Link>

      <div className="space-x-4">
        <Link href="/galerie">Galerie</Link>
        <Link href="/commander">Commander</Link>
      </div>
    </nav>
  );
}