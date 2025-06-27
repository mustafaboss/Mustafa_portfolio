import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Navigation = () => {
  // CV file URL (you can replace with your deployed URL or use public folder)
  const cvUrl = "/Ghulam_Mustafa_CV_2025.docx"; // Assuming this file is in the public/ folder

  const handleCvDownload = () => {
    const a = document.createElement('a');
    a.href = cvUrl;
    a.download = "Ghulam_Mustafa_CV_2025.docx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    console.log("CV downloaded:", "Ghulam_Mustafa_CV_2025.docx");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ghulam Mustafa
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-300 hover:text-white transition-all duration-300">Home</Link>
            <Link to="/skills" className="text-gray-300 hover:text-white transition-all duration-300">Skills</Link>
            <Link to="/projects" className="text-gray-300 hover:text-white transition-all duration-300">Projects</Link>
            <Link to="/mustafagpt" className="text-gray-300 hover:text-white transition-all duration-300">MustafaGPT</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-300">Contact</Link>

            {/* CV Download Button Only */}
            <Button 
              onClick={handleCvDownload}
              className="text-sm bg-green-500 hover:bg-green-600 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
