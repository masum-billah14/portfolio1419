import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import TerminalHero from "@/components/home/TerminalHero";
import { SkillsSection } from "./Skills";
import { ProjectsSection } from "./Projects";
import { CertificationsSection } from "./Certifications";
import { JourneySection } from "./Journey";
import { ContactSection } from "./Contact";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Masum's Portfolio</title>
        <meta
          name="description"
          content="Professional cybersecurity portfolio showcasing penetration testing, bug bounty hunting, and security research expertise. Ethical hacker with 5+ years of experience."
        />
      </Helmet>
      <Layout>
        <div className="snap-y snap-proximity">
          <div id="home" className="snap-start">
            <TerminalHero />
          </div>
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <JourneySection />
          <ContactSection />
        </div>
      </Layout>
    </>
  );
};

export default Index;
