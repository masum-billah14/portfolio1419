import { useState, useEffect } from "react";

const TerminalHero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = `> whoami
root@masum-billah:~# Penetration Tester | Red Teamer | Security Researcher | Digital Forensic Expert

> cat /etc/profile
[+] Specializing in offensive security and ethical hacking
[+] Breaking systems to make them stronger
[+] Expert in digital forensics and incident response
[+] Dedicated to securing the digital frontier
[+] Hunting threats across complex environments
[+] Automating security workflows with Python and Bash
[+] Analyzing vulnerabilities before attackers can exploit them
[+] Building resilient defenses through continuous research`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8 animate-fade-in">
            MD MASUM BILLAH
          </h1>

          <div className="grid items-stretch gap-5 lg:grid-cols-[0.7fr_2fr]">
            {/* Photo Window */}
            <div className="terminal-window animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="terminal-header">
                <div className="terminal-dot bg-destructive" />
                <div className="terminal-dot bg-[hsl(var(--warning))]" />
                <div className="terminal-dot bg-[hsl(var(--success))]" />
                <span className="ml-4 text-xs text-muted-foreground">
                  masum.jpg
                </span>
              </div>
              <div className="p-3 h-[315px] lg:h-full">
                <img
                  src="/masum.jpg"
                  alt="Masum Billah"
                  className="h-full w-full object-cover object-center opacity-90"
                />
              </div>
            </div>

            {/* Terminal Window */}
            <div className="terminal-window animate-fade-in">
              <div className="terminal-header">
                <div className="terminal-dot bg-destructive" />
                <div className="terminal-dot bg-[hsl(var(--warning))]" />
                <div className="terminal-dot bg-[hsl(var(--success))]" />
                <span className="ml-4 text-xs text-muted-foreground">
                  root@masum-billah:~
                </span>
              </div>
              <div className="terminal-body min-h-[200px]">
                <pre className="whitespace-pre-wrap text-foreground">
                  {displayedText}
                  <span
                    className={`text-primary ${showCursor ? "opacity-100" : "opacity-0"}`}
                  >
                    █
                  </span>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TerminalHero;
