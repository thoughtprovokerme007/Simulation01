
import React from 'react';
import { ArrowRight, Calculator, Activity, ShieldAlert, Sparkles } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-100/30 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-100/30 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-blue-600 p-6 rounded-2xl mb-8 shadow-xl ring-4 ring-blue-50 animate-bounce" style={{ animationDuration: '3s' }}>
          <Calculator className="text-white" size={48} />
        </div>
      </div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Cost of Waiting</span>
          <span className="block text-blue-600 mt-2 relative">
            Simulator
            <Sparkles className="absolute -top-4 -right-8 text-blue-400 animate-pulse" size={32} />
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-12 font-medium leading-relaxed">
          Visualizing the <span className="text-blue-600 font-bold italic">invisible costs</span> of clinical delay and the impact of <span className="text-indigo-600 font-bold">early metabolic interception.</span>
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={onStart}
            className="group relative flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 hover:scale-105 active:scale-95"
          >
            Enter Index Patient
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-bold bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
              <Activity size={14} className="text-green-500" />
              <span>Real-time Modeling</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-bold bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
              <ShieldAlert size={14} className="text-amber-500" />
              <span>Evidence Library</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-slate-100 pt-8 w-full max-w-4xl text-xs font-bold text-gray-400 relative z-10">
        <div className="flex flex-wrap justify-center gap-12 uppercase tracking-widest opacity-60">
          <p>Educational Framework</p>
          <p>Non-Promotional</p>
          <p>Peer-Reviewed</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
