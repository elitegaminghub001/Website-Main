import Navbar from "@/components/Navbar";
import MembershipHero from "@/components/MembershipHero";
import MembershipPlans from "@/components/MembershipPlans";
import MembershipBenefits from "@/components/MembershipBenefits";
import MembershipFAQ from "@/components/MembershipFAQ";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <MembershipHero />

      <MembershipPlans />

      <MembershipBenefits />

      <MembershipFAQ />

      <Footer />

      <FloatingButtons />
    </main>
  );
}