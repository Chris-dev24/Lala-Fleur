import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata = { title: "Lala-Fleur", description: "Bouquets & Décorations Florales" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}