import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Github, Shield, Terminal, Bug, Lock } from "lucide-react";

const projects = [
  {
    title: "Windows IoC Hunter",
    type: "Threat Hunting",
    icon: Shield,
    status: "Active",
    description:
      "PowerShell-based Windows incident overview tool that reviews host telemetry for common indicators of compromise across logons, persistence, processes, and PowerShell abuse.",
    features: [
      "Accounts, groups, and RDP activity review",
      "Log tampering and audit change checks",
      "PowerShell abuse and LOLBin detection",
      "Startup persistence and firewall review",
    ],
    technologies: ["PowerShell", "Windows Event Logs", "Windows Security", "Forensics"],
    github: "https://github.com/masum-billah14/health_checker",
  },
  {
    title: "CryptnetURLCacheParser",
    type: "Windows Forensics",
    icon: Lock,
    status: "Active",
    description:
      "Parser for Microsoft Cryptnet URL cache metadata that extracts cached download artifacts and optional content hash information from Windows systems.",
    features: [
      "Metadata parsing from Cryptnet cache",
      "CSV, JSON, and JSONL output formats",
      "Optional content hashing support",
      "Windows and Linux-compatible parser",
    ],
    technologies: ["Python", "Windows Forensics", "CryptAPI", "Hashing"],
    github: "https://github.com/masum-billah14/CryptnetURLCacheParser",
  },
  {
    title: "Log Processor",
    type: "Log Analysis",
    icon: Terminal,
    status: "Active",
    description:
      "Cross-platform Python utility to process log files and folders, normalize records, detect anomalies, and store structured output in CSV and SQLite databases.",
    features: [
      "Folder and file-based log ingestion",
      "Multi-format support (.log, .txt, .json, .csv, .xml, .evtx)",
      "Anomaly scoring with SQLite export",
      "Cross-platform log normalization",
    ],
    technologies: ["Python", "SQLite", "CSV", "Log Analysis"],
    github: "https://github.com/masum-billah14/All_Event_Parser",
  },
  {
    title: "Digital Timer",
    type: "Utility Tool",
    icon: Bug,
    status: "Active",
    description:
      "Minimal always-on-top desktop timer for focused work sessions, built with Python and Tkinter and designed for a lightweight desktop workflow.",
    features: [
      "HH:MM:SS spinner time setup",
      "Pause, resume, and reset controls",
      "Resizable floating window",
      "Audio alert and warning color states",
    ],
    technologies: ["Python", "Tkinter", "Desktop UI", "Automation"],
    github: "http://github.com/masum-billah14/timer_clock",
  },
  {
    title: "CTFSCRIPTS",
    type: "Recon Automation",
    icon: Terminal,
    status: "Active",
    description:
      "A small collection of Bash reconnaissance scripts for CTF-style discovery and enumeration using ffuf, gobuster, and nmap to speed up early target assessment.",
    features: [
      "Directory and file fuzzing with ffuf",
      "Virtual host discovery with gobuster",
      "Fast port and service scanning with nmap",
      "Structured output for recon workflows",
    ],
    technologies: ["Bash", "ffuf", "gobuster", "nmap"],
    github: "https://github.com/masum-billah14/CTFSCRIPTS",
  },
];

const getStatusClass = (status: string) => {
  switch (status) {
    case "Active":
      return "status-active";
    case "Production":
      return "status-production";
    case "Research":
      return "status-research";
    default:
      return "status-research";
  }
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-16 py-16 snap-start">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">$</span> ls -la /projects
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Open source security tools and research projects built to enhance
                offensive and defensive capabilities.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="cyber-card flex flex-col animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {project.type}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${getStatusClass(project.status)}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/80 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-xs text-muted-foreground flex items-center gap-2"
                        >
                          <span className="text-primary">+</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Source
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </section>
  );
};

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Masum's Portfolio</title>
        <meta
          name="description"
          content="Open source security tools and projects including vulnerability scanners, red team toolkits, and forensic analysis platforms."
        />
      </Helmet>
      <Layout>
        <ProjectsSection />
      </Layout>
    </>
  );
};

export default Projects;
