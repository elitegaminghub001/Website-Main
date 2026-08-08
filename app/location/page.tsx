import Navbar from "@/components/Navbar";
import LocationHero from "@/components/LocationHero";
import LocationDetails from "@/components/LocationDetails";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <LocationHero />

      <LocationDetails />

      <Footer />

      <FloatingButtons />
    </main>
  );
}