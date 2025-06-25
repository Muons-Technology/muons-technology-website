import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: <Globe className="w-8 h-8" />,
      number: "5",
      label: "Countries",
      description: "Cross-border digital health pilots"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "99.9%",
      label: "Uptime",
      description: "Even in low-connectivity environments"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "10+",
      label: "Partnerships",
      description: "Healthcare systems and organizations"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Proven Impact Across Africa
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our track record speaks for itself. From launching cross-border pilots to managing 
            global teams, we've consistently delivered transformative results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-black-50 rounded-3xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-slate-800 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-slate-700 mb-2">{stat.label}</div>
              <div className="text-slate-600">{stat.description}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Proven Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-blue-100">Launching cross-border digital health pilots</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-blue-100">Leading system integrations for CMS & ER networks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-blue-100">Managing multi-disciplinary global teams</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-blue-100">Driving innovation in low-connectivity environments</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-black-400 mb-4">Next Billion</div>
              <div className="text-2xl font-semibold mb-4">Users Powered</div>
              <p className="text-blue-100 text-lg">
                Through locally intelligent infrastructure, EHR tools, and inclusive mobile platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;