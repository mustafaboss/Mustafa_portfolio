import { useState, useEffect } from "react";
import { Code, Sparkles, DatabaseZap } from "lucide-react";
import Hero from "@/components/Hero";
import VideoIntro from "@/components/ui/VideoIntro"; // ✅ Make sure this path is correct

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "projects", "chatbot", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
        <VideoIntro />
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Code className="w-5 h-5 text-blue-400" />
            <Sparkles className="w-5 h-5 text-purple-400" />
            <DatabaseZap className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-gray-400">
            © 2025 Ghulam Mustafa | Built with ❤️ using React & Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 mt-2">
            AI Engineer • Python Developer • Data Scientist
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
