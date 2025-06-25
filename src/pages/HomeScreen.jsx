import { ArrowRight, Globe, Heart, Zap } from 'lucide-react';
import Solutions from '../components/components_pages/Solutions';
import Mission from '../components/components_pages/Mission';
import Impact from '../components/components_pages/Impact';
import Footer from '../components/components_pages/Footer';

const HomeScreen = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-orange-400 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-blue-400 rotate-12"></div>
          <div className="absolute bottom-32 left-1/4 w-28 h-28 border border-red-300 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-blue-300 rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
        
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-orange-200 bg-clip-text text-transparent leading-tight">
              Muons Technology
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Redefining how Africa and underserved regions access care, connect health systems, 
              and securely share data without needing constant internet
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="flex items-center justify-center bg-black hover:bg-blue-700 text-gray px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Our Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-100 hover:bg-blue-400/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                Join Our Mission
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Offline-First Infrastructure</h3>
                <p className="text-blue-100 text-center">Locally intelligent systems that work without constant connectivity</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Heart className="w-12 h-12 text-black mb-4" />
                <h3 className="text-xl font-semibold mb-2">Healthcare Innovation</h3>
                <p className="text-blue-100 text-center">EHR tools and mobile platforms designed for African healthcare</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Zap className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Next Billion Users</h3>
                <p className="text-blue-100 text-center">Inclusive platforms built for emerging markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section>
        <Solutions />
      </section>

      {/* Mission Section */}
     <section>
        <Mission />
      </section>

      {/* Impact Section */}
      <section>
        <Impact />
      </section>

      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default HomeScreen;
