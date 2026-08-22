import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Shield,
} from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/masum-billah14", handle: "masum-billah14" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/masum-billah1419/", handle: "masum-billah1419" },
  { name: "Email", icon: Mail, url: "mailto:masumcse1419@gmail.com", handle: "masumcse1419@gmail.com" },
  { name: "HackTheBox", icon: Shield, url: "https://app.hackthebox.com/users/2163292", handle: "masum1914" },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Email not configured",
        description: "Add EmailJS env values to enable email delivery.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "masumcse1419@gmail.com",
        },
        publicKey,
      );

      toast({
        title: "Message Sent",
        description: "Your message has been received. I'll respond shortly.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="scroll-mt-16 py-16 snap-start">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">$</span> nc -lvp 443
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to connect? Reach out for security consulting, penetration
                testing, or collaboration opportunities.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {/* Social Links */}
                <div className="cyber-card mx-auto max-w-lg">
                  <h2 className="text-lg font-semibold mb-4 text-foreground">
                    <span className="text-primary">{">"}</span> Connect
                  </h2>
                  <div className="space-y-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-300 group"
                      >
                        <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {link.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {link.handle}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
    </section>
  );
};

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Masum's Portfolio</title>
        <meta
          name="description"
          content="Get in touch for security consulting, penetration testing, or collaboration opportunities. PGP-encrypted communication available."
        />
      </Helmet>
      <Layout>
        <ContactSection />
      </Layout>
    </>
  );
};

export default Contact;
