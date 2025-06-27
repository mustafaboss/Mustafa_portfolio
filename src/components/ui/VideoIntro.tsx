import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const VideoIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Meet Your AI Partner
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch this quick introduction to learn how I can help you with your AI and data science projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-white/20 overflow-hidden">
            <CardContent className="p-0 relative">
              {/* Video Container */}
              <div className="relative aspect-video bg-black overflow-hidden rounded-lg">
                <video
                  ref={videoRef}
                  id="introVideo"
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  loop
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Overlay Elements */}
                <div className="relative z-10 text-center space-y-6 p-8">
                  {/* Cartoon Avatar */}
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center animate-bounce">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-4xl">🤖</span>
                    </div>
                  </div>

                  {/* Speech Bubble */}
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white/10 rotate-45 border-l border-t border-white/20"></div>
                    <p className="text-white text-lg font-semibold animate-pulse">
                      "Hi! I am Ghulam Mustafa, AI Engineer and Data Scientist. How may I help you?"
                    </p>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${3 + Math.random() * 2}s`
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-400/30 rounded-full"></div>
                    </div>
                  ))}
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-lg p-3 z-20">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={togglePlay}
                      className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white ml-1" />
                      )}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                  </div>
                  <div className="text-white text-sm">AI Introduction Video</div>
                </div>
              </div>

              {/* Bottom Description */}
              <div className="p-6 bg-white/5 backdrop-blur-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Your AI Development Partner</h3>
                <p className="text-gray-300">
                  Ready to transform your ideas into intelligent solutions? Let's discuss your next AI project!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
