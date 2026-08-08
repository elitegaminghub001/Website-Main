import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGames from "@/components/FeaturedGames";
import PricingPreview from "@/components/PricingPreview";
import TournamentBanner from "@/components/TournamentBanner";
import GalleryPreview from "@/components/GalleryPreview";
import Footer from "@/components/Footer";
import MembershipPreview from "@/components/MembershipPreview";
import BookingSection from "@/components/BookingSection";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <Hero />

      <About />

      <FeaturedGames />

      <PricingPreview />
      
      <MembershipPreview />

      <TournamentBanner />
      
      <BookingSection />

      <GalleryPreview />

      <Testimonials />

      <FAQ />

      <Footer />

      <FloatingButtons />
    </main>
  );
}