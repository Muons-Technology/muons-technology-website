import { Target, Compass, Zap } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Showcasing Muons as the most impactful, Africa-first digital infrastructure company
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-6">
              <Target className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-blue-100 leading-relaxed">
              To power the next billion users through locally intelligent infrastructure, 
              EHR tools, and inclusive mobile platforms that work offline and online.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6">
              <Compass className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-blue-100 leading-relaxed">
              To be recognized as the leading African technology company delivering 
              transformative digital health solutions across the continent and beyond.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
              <Zap className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
            <p className="text-blue-100 leading-relaxed">
              Redefining how Africa and underserved regions access care, connect health systems, 
              and securely share data without requiring constant internet connectivity.
            </p>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-blue-300 text-center mb-8">What Sets Us Apart</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-300">Africa-First Approach</h4>
                <p className="text-blue-100 mb-6">
                  Built by Africans, for Africa. Every solution is designed with deep understanding 
                  of local challenges, infrastructure constraints, and cultural contexts.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-blue-300">Offline-First Design</h4>
                <p className="text-blue-100">
                  Our technology works seamlessly with or without internet connectivity, 
                  ensuring critical healthcare services never stop.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-300">Proven Track Record</h4>
                <p className="text-blue-100 mb-6">
                  From cross-border pilots to system integrations, we've successfully deployed 
                  solutions across multiple countries and healthcare networks.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-blue-300">Global Team Excellence</h4>
                <p className="text-blue-100">
                  Multi-disciplinary teams with expertise in healthcare, technology, 
                  and emerging market innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;