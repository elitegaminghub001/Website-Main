import Navbar from "@/components/Navbar";
import PricingTable from "@/components/PricingTable";
import MembershipComparison from "@/components/MembershipComparison";
import SavingsCalculator from "@/components/SavingsCalculator";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <Navbar />

      {/* Hero */}

      <section className="pt-36 pb-20 text-center">

        <h1 className="text-6xl font-black">
          Gaming
          <span className="neon-text"> Pricing</span>
        </h1>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Affordable pricing for everyone.
          Play longer, save more with memberships and Happy Hours.
        </p>

      </section>

      <PricingTable />

      <MembershipComparison />

      <SavingsCalculator />

      <Footer />

      <FloatingButtons />

    </main>
  );
}