import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <ContactHero />

      <ContactDetails />

      <ContactForm />

      <Footer />

      <FloatingButtons />
    </main>
  );
}