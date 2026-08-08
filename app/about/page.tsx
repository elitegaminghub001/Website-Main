import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutFeatures from "@/components/AboutFeatures";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <AboutHero />

      <AboutStory />

      <AboutFeatures />

      <Footer />

      <FloatingButtons />
    </main>
  );
}