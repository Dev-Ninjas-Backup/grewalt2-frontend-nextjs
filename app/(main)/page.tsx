import HomeBanner from "./_components/banner/HomeBanner";
import ContactSection from "./_components/contactUs/ContactSection";
import CTASection from "./_components/CTASection/CTASection";
import Expertise from "./_components/Expertise/Expertise";
import InsightSection from "./_components/InsightSection/InsightSection";
import Solutions from "./_components/solution/Solutions";
import StatsSection from "./_components/stats/StatsSection";
import TeamSection from "./_components/TeamSection/TeamSection";

const HomePage = () => {
  return (
    <div className="bg-white">
      <HomeBanner />
      <Expertise />
      <StatsSection />

      <Solutions />
      <TeamSection />
      <ContactSection />
      <InsightSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
