import { Smartphone, Database, Shield, Wifi, Brain, Heart } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Offline-First Healthcare",
      description: "EHR systems that work seamlessly with or without internet connectivity, ensuring healthcare delivery never stops.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Health Platforms",
      description: "Inclusive mobile applications designed for African markets, optimized for low-resource environments.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Secure Data Sharing",
      description: "Blockchain-powered solutions for secure, interoperable health data exchange across borders and systems.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Analytics",
      description: "Local intelligence systems that provide insights and predictions without requiring cloud connectivity.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Communication Infrastructure",
      description: "Robust communication networks designed for unreliable connectivity and emergency situations.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Public Safety Solutions",
      description: "Emergency response and public safety platforms tailored for African urban and rural contexts.",
      color: "from-slate-500 to-gray-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our integrated platform combines AI, blockchain, and offline-first design 
            to deliver healthcare, communication, and public safety solutions that work anywhere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${solution.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                {solution.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Solutions;
