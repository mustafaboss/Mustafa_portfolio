
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BotIcon, Sparkles } from "lucide-react";

const MustafaGPT = () => {
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState<Array<{type: 'user' | 'bot', message: string}>>([]);
  const [isTyping, setIsTyping] = useState(false);

  const responses = [
    "Hello! I'm MustafaGPT, your AI assistant. I specialize in Python, AI/ML, and Data Science. How can I help you today?",
    "I can help you with Python programming, machine learning algorithms, data analysis, or any questions about AI development!",
    "Great question! In my experience with AI projects, I'd recommend starting with a solid data preprocessing pipeline before moving to model development.",
    "Python is my go-to language for AI development. I've used it extensively with TensorFlow, PyTorch, and scikit-learn for various ML projects.",
    "For data science projects, I typically use pandas for data manipulation, matplotlib/seaborn for visualization, and scikit-learn for modeling.",
    "FastAPI is excellent for building AI model APIs. I've used it in several projects to deploy machine learning models with high performance.",
    "Docker and Kubernetes are game-changers for ML deployment. I can help you containerize your AI applications for scalable deployment.",
    "LangChain and OpenAI integration opens up amazing possibilities for building intelligent applications. What specific use case are you considering?"
  ];

  const handleAsk = async () => {
    if (!userInput.trim()) return;

    const newUserMessage = { type: 'user' as const, message: userInput };
    setConversation(prev => [...prev, newUserMessage]);
    setUserInput("");
    setIsTyping(true);

    // Simulate thinking time
    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const botMessage = { type: 'bot' as const, message: randomResponse };
      setConversation(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAsk();
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          MustafaGPT
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Ask me anything about AI, Python, Data Science, or my projects!
        </p>
      </div>

      <Card className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
        <CardContent className="p-6">
          {/* Chat Header */}
          <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/10">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4">
              <BotIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">MustafaGPT</h3>
              <p className="text-sm text-gray-400">AI Assistant • Always Online</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto mb-6 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {conversation.length === 0 && (
              <div className="text-center py-12">
                <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-pulse" />
                <p className="text-gray-400">Start a conversation with MustafaGPT!</p>
              </div>
            )}
            
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 border border-white/20'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.message}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/20 px-4 py-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex gap-3">
            <Input
              placeholder="Ask MustafaGPT anything about AI, Python, or Data Science..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-grow bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
              disabled={isTyping}
            />
            <Button
              onClick={handleAsk}
              disabled={!userInput.trim() || isTyping}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 transition-all duration-300 transform hover:scale-105"
            >
              {isTyping ? "..." : "Ask"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MustafaGPT;
