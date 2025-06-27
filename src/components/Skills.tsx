
import { Card, CardContent } from "@/components/ui/card";
import { Code, DatabaseZap, Server, Cpu, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "R"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI & Machine Learning",
      icon: Sparkles,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "LangChain", "Llama2"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["FastAPI", "Django", "Node.js", "Express", "Socket.IO"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Data Science",
      icon: DatabaseZap,
      skills: ["NumPy", "Pandas", "Apache Spark", "Kafka", "Power BI"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "DevOps & Cloud",
      icon: Cpu,
      skills: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD"],
      color: "from-red-500 to-rose-500"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A comprehensive skill set spanning AI, backend development, and data science
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
