import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    name: "CPENT AI",
    organization: "EC Coucil",
    year: "2026",
    level: "Expert",
    description: "Certified Penetration Tester - advanced penetration testing with using AI.",
    verifyUrl: "https://drive.google.com/file/d/18BlFzNsch1Us-FLfnNlZ2eImqhjV31p2/view?usp=sharing",
  },
  {
    name: "LPT Master",
    organization: "EC Coucil",
    year: "2026",
    level: "Expert",
    description: "Licensed Penetration Tester Master - Score more than 90% marks at CPENT EXAM.",
    verifyUrl: "https://drive.google.com/file/d/1NYKKx9B2uKdYiVXzFzIs7IzSlVxJZsoX/view?usp=sharing",
  },
  {
    name: "Shinra Pro Lab",
    organization: "HackTheBox",
    year: "2026",
    level: "Intermediate",
    description: "HackTheBox Shinra Pro Lab completion and achievement badge.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/352",
  },
  {
    name: "RastaLab Pro Lab",
    organization: "HackTheBox",
    year: "2026",
    level: "Intermediate",
    description: "HackTheBox RastaLab Pro Lab challenge completion.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/36",
  },
  {
    name: "Offshore Pro Lab",
    organization: "HackTheBox",
    year: "2026",
    level: "Intermediate",
    description: "HackTheBox Offshore Pro Lab exploitation challenge.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/48",
  },
  {
    name: "Zephyr Pro Lab",
    organization: "HackTheBox",
    year: "2026",
    level: "Intermediate",
    description: "HackTheBox Zephyr Pro Lab challenge completion.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/173",
  },
  {
    name: "Dante Pro Lab",
    organization: "HackTheBox",
    year: "2026",
    level: "Beginner",
    description: "HackTheBox Dante Pro Lab advanced penetration testing path.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/73",
  },
  {
    name: "Puppet Mini Pro Lab",
    organization: "HackTheBox",
    year: "2026",
    level: "Advanced",
    description: "HackTheBox Puppet Mini Pro Lab challenge completion.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/286",
  },
  {
    name: "Mythical Mini Pro Lab",
    organization: "HackTheBox",
    year: "2026",
    level: "Advanced",
    description: "HackTheBox Mythical Mini Pro Lab penetration testing challenge.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/289",
  },
  {
    name: "P.O.O Mini Pro Lab",
    organization: "HackTheBox",
    year: "2026",
    level: "Beginner",
    description: "HackTheBox P.O.O Mini Pro Lab challenge completion.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/39",
  },
  {
    name: "Certified Red Team Analyst",
    organization: "CyberWarfare Labs",
    year: "2025",
    level: "Beginner",
    description: "Certified Red Team Analyst credential from CyberWarfare.",
    verifyUrl: "https://labs.cyberwarfare.live/credential/achievement/68dcf40a5c9b8f23b528faa3",
  },
  {
    name: "Certified Red Team Specialist",
    organization: "CyberWarfare Labs",
    year: "2025",
    level: "Intermediate",
    description: "Certified Red Team Specialist professional credential.",
    verifyUrl: "https://www.credential.net/ae79d7ff-cbce-4111-a1e5-d6a82f1a1169#acc.5WhEyvS4",
  },
  {
    name: "Cyber Security 101",
    organization: "TryHackMe",
    year: "2026",
    level: "Professional",
    description: "Cyber Security fundamentals and best practices certification.",
    verifyUrl: "https://assets.tryhackme.com/certification-certificate/697da2ed6579ac88f26d9d79.pdf",
  },
  {
    name: "Certified Blue Teamer (CE)",
    organization: "The SecOps Group",
    year: "2026",
    level: "Professional",
    description: "Intermediate-level blue team and incident response exam focused on investigating a multi-stage intrusion.",
    verifyUrl: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXc2wdoUzNa0UCAvgBJiAHyAgLg1N9m93WP1UEw/Ix9jZmKiQk0UOyMEvyZsB1I3Ocie3e8H2hykwHPa3l06Fyww=",
  },
  {
    name: "Certified Network Security Practitioner",
    organization: "The SecOps Group",
    year: "2026",
    level: "Essentials",
    description: "It is an entry-level exam to test a candidate’s knowledge on the core concepts of network security.",
    verifyUrl: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXS0Z6l9VJdskgqvFPHyerAtoI0vLek5IhdmMvyxoJ3g1px7XjcCq8D1+fMOGqm4PI1who06hM1WBBX7iC8ZaFZs=",
  },
  {
    name: "Certified AppSec Practitioner",
    organization: "The SecOps Group",
    year: "2025",
    level: "Essentials",
    description: "It is an entry-level exam to test candidates’ knowledge on the core concepts of application security.",
    verifyUrl: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXVoh35Dxs+bP0A0FTiau8E7MbSWh3W8AXLmi2R9HwBhhrI8g9ouRFGok3bHzob4oydvNrlOXPRSd3Klq9O2Crx4=",
  },
  {
    name: "APIsec Certified Practitioner",
    organization: "APIsec University",
    year: "2026",
    level: "Advanced",
    description: "API security certification and badge.",
    verifyUrl: "https://www.credly.com/badges/d7521d1c-3d93-4991-b8c6-22bdd2975497/public_url",
  },
  {
    name: "Certified Ethical Hacker",
    organization: "Cisco (Credly)",
    year: "2026",
    level: "Beginner",
    description: "Certified Ethical Hacker credential from Cisco.",
    verifyUrl: "https://www.credly.com/badges/9108d234-a28c-46f8-b4d3-45a57d267eee/public_url",
  },
  {
    name: "Certified API Security Analyst",
    organization: "Apisec University",
    year: "2026",
    level: "Advanced",
    description: "API security certification covering API risks, threats, and best practices through a 100-question exam based on the OWASP API Security Top 10 and beyond.",
    verifyUrl: "https://www.credly.com/badges/3be2033a-f34b-4068-8803-3ec712018544/public_url",
  },
  {
    name: "CORE - Certified Cybersecurity Foundations",
    organization: "Hackviser",
    year: "2026",
    level: "Beginner",
    description: "Hackviser CORE security certification and verification.",
    verifyUrl: "https://hackviser.com/verify?id=HV-CORE-L15QXPQB",
  },
];

const getLevelStyles = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary/20 text-primary border-primary/40";
    case "Professional":
      return "bg-blue-500/20 text-blue-400 border-blue-500/40";
    case "Intermediate":
      return "bg-green-500/20 text-green-400 border-green-500/40";
    case "Beginner":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/40";
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/40";
  }
};

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="scroll-mt-16 py-16 snap-start">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">$</span> gpg --verify certs.sig
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Industry-recognized credentials validating expertise in offensive
                security, ethical hacking, and penetration testing.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="cyber-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-foreground text-lg">
                          {cert.name}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs rounded-full border ${getLevelStyles(cert.level)}`}
                        >
                          {cert.level}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span>{cert.organization}</span>
                        <span className="text-primary">|</span>
                        <span>{cert.year}</span>
                      </div>

                      <p className="text-sm text-foreground/80 mb-4">
                        {cert.description}
                      </p>

                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Verify Credential
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <>
      <Helmet>
        <title>Masum's Portfolio</title>
        <meta
          name="description"
          content="Professional cybersecurity certifications including OSCP, CEH, GPEN, and CRTO. Verified credentials from industry-leading organizations."
        />
      </Helmet>
      <Layout>
        <CertificationsSection />
      </Layout>
    </>
  );
};

export default Certifications;
