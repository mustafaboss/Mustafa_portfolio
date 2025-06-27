
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Code, DatabaseZap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "AI Engineer & Python Developer";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-blue-400">
            <img 
              src="/lovable-uploads/ec75fc95-1786-4865-af4d-05b27f6dd838.png" 
              alt="Ghulam Mustafa Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Ghulam Mustafa
          </h1>

          {/* Animated Subtitle */}
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12 flex items-center justify-center">
            <span className="border-r-2 border-blue-400 pr-2 animate-pulse">
              {text}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Specializing in <span className="text-blue-400 font-semibold">Python</span>, 
            <span className="text-purple-400 font-semibold"> AI/ML</span>, and 
            <span className="text-yellow-400 font-semibold"> Data Science</span>. 
            Building intelligent solutions that transform businesses and solve complex problems.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Code, label: "Python", color: "text-blue-400" },
              { icon: DatabaseZap, label: "AI/ML", color: "text-purple-400" },
              { icon: Sparkles, label: "Data Science", color: "text-yellow-400" }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="p-4 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:scale-110">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <span className="text-sm text-gray-400 mt-2 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </Button>
            </Link>
            <a 
              href="https://github.com/mustafaboss" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                GitHub Projects
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
