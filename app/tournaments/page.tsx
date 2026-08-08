import Navbar from "@/components/Navbar";
import TournamentHero from "@/components/TournamentHero";
import UpcomingTournaments from "@/components/UpcomingTournaments";
import TournamentSchedule from "@/components/TournamentSchedule";
import PrizePool from "@/components/PrizePool";
import TournamentRegistration from "@/components/TournamentRegistration";
import TournamentGallery from "@/components/TournamentGallery";
import Leaderboard from "@/components/Leaderboard";
import TournamentFAQ from "@/components/TournamentFAQ";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function TournamentPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <TournamentHero />

      <UpcomingTournaments />

      <TournamentSchedule />

      <PrizePool />

      <TournamentRegistration />

      <TournamentGallery />

      <Leaderboard />

      <TournamentFAQ />

      <Footer />

      <FloatingButtons />
    </main>
  );
}