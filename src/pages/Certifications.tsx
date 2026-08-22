import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    name: "CPENT AI",
    organization: "eLearnSecurity",
    year: "2024",
    level: "Expert",
    description: "Certified Penetration Tester AI - advanced penetration testing with AI techniques.",
    verifyUrl: "https://drive.google.com/file/d/18BlFzNsch1Us-FLfnNlZ2eImqhjV31p2/view?usp=sharing",
  },
  {
    name: "LPT Master",
    organization: "eLearnSecurity",
    year: "2024",
    level: "Expert",
    description: "Licensed Penetration Tester Master - comprehensive penetration testing mastery.",
    verifyUrl: "https://drive.google.com/file/d/1NYKKx9B2uKdYiVXzFzIs7IzSlVxJZsoX/view?usp=sharing",
  },
  {
    name: "Shinra Lab",
    organization: "HackTheBox",
    year: "2024",
    level: "Expert",
    description: "HackTheBox Shinra lab completion and achievement badge.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/352",
  },
  {
    name: "Proof Of Ownership",
    organization: "HackTheBox",
    year: "2024",
    level: "Professional",
    description: "HackTheBox Proof of Ownership lab challenge completion.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/39",
  },
  {
    name: "RastaLab",
    organization: "HackTheBox",
    year: "2024",
    level: "Professional",
    description: "HackTheBox RastaLab penetration testing challenge.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/36",
  },
  {
    name: "Offshore",
    organization: "HackTheBox",
    year: "2024",
    level: "Expert",
    description: "HackTheBox Offshore lab advanced exploitation challenge.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/48",
  },
  {
    name: "Zephyr",
    organization: "HackTheBox",
    year: "2024",
    level: "Professional",
    description: "HackTheBox Zephyr lab challenge completion.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/173",
  },
  {
    name: "Dante",
    organization: "HackTheBox",
    year: "2024",
    level: "Expert",
    description: "HackTheBox Dante lab advanced penetration testing path.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/73",
  },
  {
    name: "Puppet",
    organization: "HackTheBox",
    year: "2024",
    level: "Professional",
    description: "HackTheBox Puppet lab challenge completion.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/286",
  },
  {
    name: "Mythical",
    organization: "HackTheBox",
    year: "2024",
    level: "Professional",
    description: "HackTheBox Mythical lab penetration testing challenge.",
    verifyUrl: "https://labs.hackthebox.com/achievement/badge/2163292/289",
  },
  {
    name: "Certified Red Team Analyst",
    organization: "CyberWarfare",
    year: "2024",
    level: "Expert",
    description: "Certified Red Team Analyst credential from CyberWarfare.",
    verifyUrl: "https://labs.cyberwarfare.live/credential/achievement/68dcf40a5c9b8f23b528faa3",
  },
  {
    name: "Certified Red Team Specialist",
    organization: "Credential.net",
    year: "2024",
    level: "Expert",
    description: "Certified Red Team Specialist professional credential.",
    verifyUrl: "https://www.credential.net/ae79d7ff-cbce-4111-a1e5-d6a82f1a1169#acc.5WhEyvS4",
  },
  {
    name: "Red Team",
    organization: "TryHackMe",
    year: "2024",
    level: "Expert",
    description: "Red team operations and adversary simulation certification.",
    verifyUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-5VSJLJYHCP.pdf",
  },
  {
    name: "SOC Level 1",
    organization: "TryHackMe",
    year: "2024",
    level: "Professional",
    description: "Security Operations Center level 1 certification.",
    verifyUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-8MXAZNSCZQ.pdf",
  },
  {
    name: "Web Application",
    organization: "TryHackMe",
    year: "2024",
    level: "Professional",
    description: "Web application security and penetration testing certification.",
    verifyUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ZOGHHSA5S0.pdf",
  },
  {
    name: "SOC Level 2",
    organization: "TryHackMe",
    year: "2024",
    level: "Professional",
    description: "Advanced Security Operations Center level 2 certification.",
    verifyUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-NHIRH03KPF.pdf",
  },
  {
    name: "CompTIA A+ (101)",
    organization: "TryHackMe",
    year: "2024",
    level: "Junior",
    description: "CompTIA A+ certification basics training and verification.",
    verifyUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-OB0F8CIZF6.pdf",
  },
  {
    name: "Pre Security",
    organization: "TryHackMe",
    year: "2024",
    level: "Junior",
    description: "Foundational security concepts and fundamentals certification.",
    verifyUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-5Y7KHOLPH6.pdf",
  },
  {
    name: "AI Security",
    organization: "TryHackMe",
    year: "2024",
    level: "Professional",
    description: "Artificial intelligence and machine learning security certification.",
    verifyUrl: "https://tryhackme.com/certificate/THM-FPXYXWZL8C",
  },
  {
    name: "Security Engineer 1",
    organization: "TryHackMe",
    year: "2024",
    level: "Professional",
    description: "Security engineering fundamentals and best practices certification.",
    verifyUrl: "https://assets.tryhackme.com/certification-certificate/697da2ed6579ac88f26d9d79.pdf",
  },
  {
    name: "Certified Breach Handler",
    organization: "Cybrary",
    year: "2024",
    level: "Professional",
    description: "Breach handling and incident response certification.",
    verifyUrl: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXc2wdoUzNa0UCAvgBJiAHyAgLg1N9m93WP1UEw/Ix9jZmKiQk0UOyMEvyZsB1I3Ocie3e8H2hykwHPa3l06Fyww=",
  },
  {
    name: "CompTIA Network Security Pro",
    organization: "Cybrary",
    year: "2024",
    level: "Professional",
    description: "CompTIA Network Security Professional certification.",
    verifyUrl: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXS0Z6l9VJdskgqvFPHyerAtoI0vLek5IhdmMvyxoJ3g1px7XjcCq8D1+fMOGqm4PI1who06hM1WBBX7iC8ZaFZs=",
  },
  {
    name: "Certified Associate Penetration Tester",
    organization: "Cybrary",
    year: "2024",
    level: "Professional",
    description: "Associate level penetration testing certification.",
    verifyUrl: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXVoh35Dxs+bP0A0FTiau8E7MbSWh3W8AXLmi2R9HwBhhrI8g9ouRFGok3bHzob4oydvNrlOXPRSd3Klq9O2Crx4=",
  },
  {
    name: "AWS Cloud Practitioner",
    organization: "AWS (Credly)",
    year: "2024",
    level: "Professional",
    description: "AWS Cloud Practitioner certification and badge.",
    verifyUrl: "https://www.credly.com/badges/d7521d1c-3d93-4991-b8c6-22bdd2975497/public_url",
  },
  {
    name: "Cisco Certified Network Technician",
    organization: "Cisco (Credly)",
    year: "2024",
    level: "Professional",
    description: "Cisco networking certification and credential.",
    verifyUrl: "https://www.credly.com/badges/9108d234-a28c-46f8-b4d3-45a57d267eee/public_url",
  },
  {
    name: "Cisco Certified Architecture Specialist",
    organization: "Cisco (Credly)",
    year: "2024",
    level: "Expert",
    description: "Cisco Advanced Architecture Specialist certification.",
    verifyUrl: "https://www.credly.com/badges/3be2033a-f34b-4068-8803-3ec712018544/public_url",
  },
  {
    name: "Hackviser Core",
    organization: "Hackviser",
    year: "2024",
    level: "Professional",
    description: "Hackviser Core security certification and verification.",
    verifyUrl: "https://hackviser.com/verify?id=HV-CORE-L15QXPQB",
  },
];

const getLevelStyles = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary/20 text-primary border-primary/40";
    case "Professional":
      return "bg-blue-500/20 text-blue-400 border-blue-500/40";
    case "Junior":
      return "bg-gray-500/20 text-gray-300 border-gray-500/40";
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
