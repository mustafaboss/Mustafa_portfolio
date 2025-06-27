
import { useState, useMemo } from "react";
import OpenAI from "openai";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BotIcon, Sparkles, AlertTriangleIcon } from "lucide-react";

const MustafaGPT = () => {
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState<Array<{type: 'user' | 'bot' | 'error', message: string}>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [apiKeyError, setApiKeyError] = useState<string | null>(null);

  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const openai = useMemo(() => {
    if (openaiApiKey) {
      return new OpenAI({ apiKey: openaiApiKey, dangerouslyAllowBrowser: true });
    }
    return null;
  }, [openaiApiKey]);

  const handleAsk = async () => {
    if (!userInput.trim()) return;

    const newUserMessage = { type: 'user' as const, message: userInput };
    setConversation(prev => [...prev, newUserMessage]);
    const currentInput = userInput;
    setUserInput("");
    setIsTyping(true);
    setApiKeyError(null);

    if (!openai) {
      const errorMessage = "OpenAI API key is not configured. Please set the VITE_OPENAI_API_KEY environment variable.";
      setConversation(prev => [...prev, { type: 'error' as const, message: errorMessage }]);
      setApiKeyError(errorMessage);
      setIsTyping(false);
      return;
    }

    try {
      // Add user message to history for context
      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = conversation
        .filter(msg => msg.type === 'user' || msg.type === 'bot') // Exclude error messages from history
        .map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.message,
        }));
      messages.push({ role: 'user', content: currentInput });

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Or your preferred model
        messages: messages,
      });

      const botResponse = completion.choices[0]?.message?.content;
      if (botResponse) {
        const botMessage = { type: 'bot' as const, message: botResponse };
        setConversation(prev => [...prev, botMessage]);
      } else {
        const errorMessage = "Received an empty response from OpenAI.";
        setConversation(prev => [...prev, { type: 'error' as const, message: errorMessage }]);
      }
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      let errorMessage = "An error occurred while fetching the response from OpenAI.";
      if (error instanceof Error) {
        errorMessage += ` Details: ${error.message}`;
      }
      setConversation(prev => [...prev, { type: 'error' as const, message: errorMessage }]);
    } finally {
      setIsTyping(false);
    }
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

          {/* API Key Error Display */}
          {apiKeyError && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 flex items-center">
              <AlertTriangleIcon className="w-5 h-5 mr-2" />
              <p className="text-sm">{apiKeyError}</p>
            </div>
          )}

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto mb-6 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {conversation.length === 0 && !apiKeyError && (
              <div className="text-center py-12">
                <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-pulse" />
                <p className="text-gray-400">Start a conversation with MustafaGPT!</p>
              </div>
            )}
            
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.type === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : msg.type === 'bot'
                      ? 'bg-white/10 text-gray-300 border border-white/20'
                      : 'bg-red-500/30 text-red-200 border border-red-500/50' // Error message style
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
