
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, DatabaseZap, Sparkles, Server, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MCQ Generator using LangChain & OpenAI",
      description: "AI-powered multiple choice question generator that creates educational content automatically using advanced language models.",
      technologies: ["Python", "LangChain", "OpenAI", "Streamlit"],
      icon: Sparkles,
      color: "from-blue-500 to-purple-500",
      githubUrl: "https://github.com/mustafaboss"
    },
    {
      title: "End-to-End Medical Chatbot with Llama2",
      description: "Comprehensive medical assistant chatbot providing health information and preliminary diagnosis using Llama2 model.",
      technologies: ["Python", "Llama2", "FastAPI", "NLP"],
      icon: Code,
      color: "from-green-500 to-teal-500",
      githubUrl: "https://github.com/mustafaboss"
    },
    {
      title: "AI-based Crop Disease Detection",
      description: "Computer vision system that identifies crop diseases from images, helping farmers make informed decisions.",
      technologies: ["Python", "OpenCV", "TensorFlow", "CNN"],
      icon: DatabaseZap,
      color: "from-yellow-500 to-orange-500",
      githubUrl: "https://github.com/mustafaboss"
    },
    {
      title: "Customer Churn Prediction with ANN",
      description: "Machine learning model predicting customer churn using artificial neural networks for business retention strategies.",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      githubUrl: "https://github.com/mustafaboss"
    },
    {
      title: "Car Detection System with OpenCV",
      description: "Real-time vehicle detection system using computer vision for traffic monitoring and analysis.",
      technologies: ["Python", "OpenCV", "YOLO", "NumPy"],
      icon: Code,
      color: "from-red-500 to-rose-500",
      githubUrl: "https://github.com/mustafaboss"
    },
    {
      title: "E-commerce Data Analysis with Power BI",
      description: "Comprehensive business intelligence dashboard analyzing e-commerce metrics and customer behavior patterns.",
      technologies: ["Python", "Power BI", "SQL", "Pandas"],
      icon: Server,
      color: "from-cyan-500 to-blue-500",
      githubUrl: "https://github.com/mustafaboss"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Innovative AI and data science solutions that showcase technical expertise and real-world impact
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group overflow-hidden"
          >
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on GitHub
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
