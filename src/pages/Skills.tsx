import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Shield, Search, Lock, Code, Wrench, Server } from "lucide-react";

const skillCategories = [
  {
    name: "Networking",
    icon: Server,
    skills: [
      { name: "TCP/IP Fundamentals", level: 82 },
      { name: "Subnetting & Routing", level: 78 },
      { name: "Firewall & IDS/IPS", level: 74 },
      { name: "Packet Analysis", level: 80 },
      { name: "Network Hardening", level: 70 },
    ],
  },
  {
    name: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 95 },
      { name: "Bash/Shell Scripting", level: 70 },
      { name: "C/C++", level: 80 },
      { name: "PowerShell", level: 70 },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Burp Suite", level: 95 },
      { name: "Metasploit", level: 92 },
      { name: "Nmap", level: 95 },
      { name: "Wireshark", level: 88 },
      { name: "IDA Pro/Ghidra", level: 75 },
    ],
  },
  {
    name: "Cryptography",
    icon: Lock,
    skills: [
      { name: "Encryption/Decryption", level: 80 },
      { name: "Encoding & Decoding", level: 85 },
      { name: "Hash Analysis", level: 85 },
      { name: "Crypto Attacks", level: 78 },
    ],
  },
  {
    name: "OSINT",
    icon: Search,
    skills: [
      { name: "Social Engineering Recon", level: 90 },
      {name: "Social Media Intelligence", level: 85},
      { name: "Infrastructure Mapping", level: 88 },
      { name: "Threat Intelligence", level: 85 },
    ],
  },
  {
    name: "Digital Forensics",
    icon: Search,
    skills: [
      { name: "Memory Forensics", level: 85 },
      { name: "Disk Forensics", level: 80 },
      { name: "Network Forensics", level: 88 },
      { name: "Malware Analysis", level: 82 },
      { name: "Incident Response", level: 60 },
    ],
  },
  {
    name: "Penetration Testing",
    icon: Shield,
    skills: [
      { name: "Web Application Testing", level: 95 },
      { name: "Network Penetration Testing", level: 90 },
      { name: "API Security Testing", level: 90 },
      { name: "Active Directory Attacks", level: 90 },
    ],
  },
  {
    name: "Active Directory",
    icon: Shield,
    skills: [
      { name: "AD Fundamentals", level: 85 },
      { name: "Group Policy", level: 80 },
      { name: "Kerberos & LDAP", level: 80 },
      { name: "Privilege Escalation", level: 84 },
      { name: "AD Enumeration", level: 88 },
    ],
  },
  {
    name: "Red Team Operations",
    icon: Shield,
    skills: [
      { name: "C2 Frameworks", level: 88 },
      { name: "Evasion Techniques", level: 85 },
      { name: "Phishing Campaigns", level: 90 },
      { name: "Physical Security", level: 72 },
    ],
  },
];

const tools = [
  "Nmap",
  "Masscan",
  "Shodan",
  "Nessus",
  "OpenVAS",
  "Qualys",
  "Burp Suite",
  "OWASP ZAP",
  "sqlmap",
  "Metasploit",
  "Sliver",
  "Kali Linux",
  "Wireshark",
  "tcpdump",
  "John the Ripper",
  "Hashcat",
  "Hydra",
  "BloodHound",
  "PowerView",
  "SharpView",
  "Rubeus",
  "Mimikatz",
  "Impacket",
  "CrackMapExec",
  "NetExec",
  "ADRecon",
  "Certipy",
  "WinPEAS",
  "LinPEAS",
  "PowerUp",
  "GTFOBins",
  "LOLBAS",
  "Linux Exploit Suggester",
  "Seatbelt",
  "BeRoot",
  "Autopsy",
  "The Sleuth Kit",
  "Volatility",
  "FTK Imager",
  "Splunk",
  "ELK Stack",
  "Wazuh",
  "Ghidra",
  "IDA Pro",
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-16 py-16 snap-start">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">$</span> cat skills.json
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive technical capabilities across offensive security,
                forensics, and development domains.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {skillCategories.map((category, catIndex) => (
                <div
                  key={category.name}
                  className="cyber-card animate-fade-in"
                  style={{ animationDelay: `${catIndex * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-semibold text-foreground">
                      {category.name}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-primary">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-bar-fill"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-xl font-bold mb-6 text-center">
                <span className="text-primary">{">"}</span> Security Arsenal
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-muted border border-border rounded-lg text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
    </section>
  );
};

const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Masum's Portfolio</title>
        <meta
          name="description"
          content="Technical skills in penetration testing, digital forensics, OSINT, cryptography, and security tools. Comprehensive cybersecurity skill matrix."
        />
      </Helmet>
      <Layout>
        <SkillsSection />
      </Layout>
    </>
  );
};

export default Skills;
