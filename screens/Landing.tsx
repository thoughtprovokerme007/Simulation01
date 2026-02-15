
import React from 'react';
import { ArrowRight, Calculator, Activity, ShieldAlert, Sparkles, Database } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-white relative overflow-hidden font-sans">
      {/* Corporate Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] opacity-40 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Icon / Brand Mark */}
        <div className="mb-10 flex justify-center">
            <div className="w-20 h-20 bg-blue-600 rounded-[20px] shadow-2xl shadow-blue-200 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Calculator className="text-white w-10 h-10" strokeWidth={1.5} />
            </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6 tracking-tight leading-[1.1]">
          Cost of Waiting <br/>
          <span className="font-light text-blue-900 block mt-2">Simulator</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-14 font-normal leading-relaxed">
          Visualizing the <span className="text-blue-600 font-bold">invisible costs</span> of clinical delay and the economic impact of <span className="text-blue-800 font-semibold border-b-2 border-blue-200">early metabolic interception</span>.
        </p>
        
        {/* CTA Section */}
        <div className="flex flex-col items-center gap-10">
          <button
            onClick={onStart}
            className="group relative flex items-center gap-4 bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 ring-4 ring-blue-50"
          >
            <span>Enter Index Patient</span>
            <div className="bg-white/20 rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
            </div>
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-[11px] font-bold text-blue-800 bg-blue-50 px-4 py-2 rounded-full uppercase tracking-wider">
              <Activity size={14} className="text-blue-600" />
              <span>Real-time Modeling</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold text-blue-800 bg-blue-50 px-4 py-2 rounded-full uppercase tracking-wider">
              <ShieldAlert size={14} className="text-blue-600" />
              <span>Evidence Library</span>
            </div>
             <div className="flex items-center gap-2 text-[11px] font-bold text-blue-800 bg-blue-50 px-4 py-2 rounded-full uppercase tracking-wider">
              <Database size={14} className="text-blue-600" />
              <span>Clinical Data</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="absolute bottom-6 w-full text-center px-4">
         <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Educational Framework • Non-Promotional • Peer-Reviewed • Internal Use</p>
      </div>
    </div>
  );
};

export default Landing;
