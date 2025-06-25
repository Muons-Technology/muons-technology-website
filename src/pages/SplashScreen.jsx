import { Zap } from 'lucide-react';

const SplashScreen = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white transition-all duration-700 ease-in-out">
      <div className="flex items-center space-x-4 animate-fadeInUp">
        <Zap className="w-12 h-12 text-black animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-bold bg-white bg-clip-text text-transparent">
          Muons Technology
        </h1>
      </div>

      <p className="mt-4 text-blue-200 text-lg animate-fadeIn delay-300">
        Empowering Africa's Digital Health & Safety
      </p>

      <div className="mt-10">
        <div className="w-12 h-12 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
