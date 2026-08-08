import Navbar from "@/components/Navbar";
import GalleryPreview from "@/components/GalleryPreview";
import TournamentGallery from "@/components/TournamentGallery";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <GalleryPreview />

      <TournamentGallery />

      <Footer />

      <FloatingButtons />
    </main>
  );
}