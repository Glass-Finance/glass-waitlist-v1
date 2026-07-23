import { useSeoMeta } from "../hooks/useSeoMeta";
import Navbar from "../components/Navbar";
import MembersHero from "../components/members/membersHero";
import MembersHowItWorks from "../components/members/membersHowItWorks";
import MembersProblem from "../components/members/membersProblem";
import MembersSolution from "../components/members/membersSolution";
import Security from "../components/Security";
import TrustedBy from "../components/TrustedBy";
import UseCases from "../components/Usecases";
import WhyGlass from "../components/WhyGlass";
import MembersCTA from "../components/members/membersCTA";
import Footer from "../components/Footer";

export default function MembersHome() {
  useSeoMeta({
    title: "Pay Your Dues, Effortlessly",
    description:
      "Join your community on Glasspay and pay dues, subscriptions, and contributions in a few taps. No more chasing payments in group chats.",
    path: "/members",
  });
  return (
    <div className="bg-[#F7F8FC]">
      <Navbar />
      <MembersHero />
      <MembersProblem />
      <MembersSolution />
      <MembersHowItWorks />
      <UseCases />
      <TrustedBy />
      <Security />
      <MembersCTA />
      <WhyGlass />
      <Footer />
    </div>
  );
}
