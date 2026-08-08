import Navbar from "@/components/Navbar";
import GamesHero from "@/components/GamesHero";
import GamesGrid from "@/components/GamesGrid";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <GamesHero />

      <GamesGrid />

      <Footer />

      <FloatingButtons />
    </main>
  );
}