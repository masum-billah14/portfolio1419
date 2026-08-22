import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Terminal, Trophy, Briefcase, GraduationCap, Zap } from "lucide-react";

const journeyStages = [
  {
    year: "2018 - 2019",
    title: "The Beginning",
    icon: GraduationCap,
    description:
      "Started my journey into cybersecurity with self-study and online courses. Learned Linux fundamentals, networking basics, and basic scripting. Built my first home lab for experimentation.",
    milestones: [
      "Completed CompTIA Security+ certification",
      "Set up first vulnerable VM lab",
      "Learned Python for automation",
      "Joined online security communities",
    ],
  },
  {
    year: "2019 - 2020",
    title: "CTF & Lab Training",
    icon: Trophy,
    description:
      "Dedicated focus on Capture The Flag competitions and practical labs. Spent countless hours on platforms like HackTheBox, TryHackMe, and VulnHub developing offensive skills.",
    milestones: [
      "Achieved Pro Hacker rank on HackTheBox",
      "Participated in 30+ CTF competitions",
      "Built custom exploitation tools",
      "Mastered web application attacks",
    ],
  },
  {
    year: "2020 - 2022",
    title: "Professional Development",
    icon: Briefcase,
    description:
      "Transitioned to professional security work. Started performing authorized penetration tests, bug bounty hunting, and security assessments for real organizations.",
    milestones: [
      "Obtained OSCP certification",
      "First $10K bug bounty payout",
      "Joined red team consultancy",
      "Published first CVE disclosure",
    ],
  },
  {
    year: "2022 - 2023",
    title: "Advanced Specialization",
    icon: Zap,
    description:
      "Focused on advanced attack techniques, red team operations, and specialized areas including Active Directory attacks, cloud security, and malware development.",
    milestones: [
      "Earned CRTO certification",
      "Led enterprise red team engagements",
      "Developed custom C2 framework",
      "Contributed to open source tools",
    ],
  },
  {
    year: "2023 - Present",
    title: "Research & Leadership",
    icon: Terminal,
    description:
      "Currently focusing on security research, vulnerability discovery, and mentoring the next generation of security professionals. Active in the community and contributing to the field.",
    milestones: [
      "12 CVEs published and acknowledged",
      "Speaking at security conferences",
      "Mentoring junior researchers",
      "Building advanced security tooling",
    ],
  },
];

export const JourneySection = () => {
  return (
    <section id="journey" className="scroll-mt-16 py-16 snap-start">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">$</span> history | grep milestones
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A timeline of growth, learning, and achievements in the
                cybersecurity field.
              </p>
            </div>

            {/* Timeline */}
            <div className="max-w-3xl mx-auto relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

              {journeyStages.map((stage, index) => (
                <div
                  key={stage.year}
                  className={`relative mb-12 last:mb-0 animate-fade-in ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div
                    className={`flex items-start gap-6 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="timeline-dot">
                        <stage.icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="cyber-card flex-grow md:max-w-[calc(50%-3rem)]">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-primary font-mono">
                          {stage.year}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {stage.title}
                      </h3>

                      <p className="text-sm text-foreground/80 mb-4">
                        {stage.description}
                      </p>

                      <div className="space-y-2">
                        {stage.milestones.map((milestone) => (
                          <div
                            key={milestone}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="text-primary mt-1">+</span>
                            <span className="text-muted-foreground">
                              {milestone}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* End marker */}
              <div className="absolute left-4 md:left-1/2 bottom-0 md:-translate-x-1/2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              </div>
            </div>

            {/* Future */}
            <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="inline-block px-6 py-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-foreground text-sm">
                  <span className="text-primary font-mono">{">"}</span> The journey
                  continues...{" "}
                  <span className="text-primary cursor-blink">_</span>
                </p>
              </div>
            </div>
          </div>
    </section>
  );
};

const Journey = () => {
  return (
    <>
      <Helmet>
        <title>Masum's Portfolio</title>
        <meta
          name="description"
          content="Career journey from beginner to professional penetration tester. Timeline of certifications, achievements, and growth in cybersecurity."
        />
      </Helmet>
      <Layout>
        <JourneySection />
      </Layout>
    </>
  );
};

export default Journey;
