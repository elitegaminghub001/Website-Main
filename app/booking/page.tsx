import Navbar from "@/components/Navbar";
import BookingHero from "@/components/BookingHero";
import BookingForm from "@/components/BookingForm";
import PricingPreview from "@/components/PricingPreview";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <BookingHero />

      <BookingForm />

      <PricingPreview />

      <Footer />

      <FloatingButtons />
    </main>
  );
}