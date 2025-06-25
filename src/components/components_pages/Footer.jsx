import { Heart, Globe, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Muons Technology</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Leading African technology company delivering AI and blockchain-powered solutions 
              for healthcare, finance, and digital infrastructure. Built for offline-first 
              healthcare, communications, and public safety.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/muons-technology/" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="andre.james@muons.technology" className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors"> Healthcare EHR </a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors"> Muons Care + App </a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors"> Data Security </a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors"> Muons Messenger </a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors"> Internships </a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Partnerships</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div style={{float: "right"}} className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Muons Technology. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;