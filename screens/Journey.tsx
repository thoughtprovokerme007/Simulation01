
import React, { useState } from 'react';
import { TIMELINE } from '../constants';
import SourceChip from '../components/SourceChip';
import { FastForward, Info, Heart, Sparkles, AlertCircle, MousePointer2 } from 'lucide-react';

interface JourneyProps {
  onOpenSource: (id: string) => void;
}

const Journey: React.FC<JourneyProps> = ({ onOpenSource }) => {
  const [yearIndex, setYearIndex] = useState(0);
  const current = TIMELINE[yearIndex];

  const handleNextYear = () => {
    setYearIndex((prev) => (prev + 1) % TIMELINE.length);
  };

  const QoLIndicator = ({ score, impactText, isPathB }: { score: number; impactText: string; isPathB?: boolean }) => (
    <div className="space-y-3">
      <div className="flex flex-col gap-1 mb-1">
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <Heart size={12} className={isPathB ? 'text-blue-500' : 'text-slate-400'} fill={isPathB ? '#3b82f6' : 'transparent'} />
          QOL Assessment
        </span>
        <p className={`text-sm font-bold leading-tight ${isPathB ? 'text-blue-900' : 'text-slate-700'}`}>
          {impactText}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-3 flex-1 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div 
            className={`h-full transition-all duration-1000 rounded-full ${isPathB ? 'bg-gradient-to-r from-blue-400 to-blue-600' : score < 50 ? 'bg-gradient-to-r from-red-400 to-red-600' : 'bg-gradient-to-r from-slate-400 to-slate-600'}`}
            style={{ width: `${score}%` }}
          />
        </div>
        <div className="text-right shrink-0">
          <span className={`text-xl font-black tabular-nums ${score < 50 ? 'text-red-600' : 'text-green-600'}`}>{score}%</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-10 pb-20">
      {/* Timeline Controls */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-50 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Journey Timeline</h2>
            <p className="text-lg text-gray-500 font-medium">Click on "Path A" to advance progression.</p>
          </div>
          <button
            onClick={() => setYearIndex(1)}
            className="flex items-center gap-2 bg-amber-50 text-amber-700 px-6 py-3 rounded-2xl border border-amber-200 font-bold text-lg hover:bg-amber-100 transition-all shadow-md group"
          >
            <FastForward size={20} className="group-hover:translate-x-0.5 transition-transform" /> Pause at Year 5
          </button>
        </div>

        <div className="px-6">
          <input
            type="range"
            min="0"
            max={TIMELINE.length - 1}
            value={yearIndex}
            onChange={(e) => setYearIndex(parseInt(e.target.value))}
            className="w-full h-4 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600 border-[6px] border-white shadow-md"
          />
          <div className="flex justify-between mt-6">
            {TIMELINE.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setYearIndex(idx)}
                className={`text-sm font-black transition-all px-4 py-1.5 rounded-xl ${
                  idx === yearIndex ? 'bg-blue-600 text-white scale-110 shadow-lg' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Years {t.yearRange}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="bg-white border border-blue-100 p-6 rounded-3xl shadow-sm relative overflow-hidden flex items-center gap-6 border-l-8 border-l-blue-600">
        <div className="p-3 bg-blue-600 rounded-xl shadow-lg shrink-0">
          <Info className="text-white" size={24} />
        </div>
        <div className="space-y-0.5">
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">QOL Narrative</span>
          <p className="text-xl font-bold text-gray-900 leading-tight">{current.qolNarrative}</p>
        </div>
      </div>

      {/* Main Comparison Cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Path A */}
        <div 
          onClick={handleNextYear}
          className="group cursor-pointer bg-slate-50 border-t-[8px] border-slate-400 p-8 rounded-3xl space-y-8 shadow-md hover:shadow-xl hover:border-slate-500 transition-all active:scale-[0.98]"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Path A: HbA1c-Only</span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Reactive Pathway</h3>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              <MousePointer2 size={12} /> Advance
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 space-y-3">
            <p className="text-[10px] font-black text-slate-400 flex items-center gap-2 uppercase tracking-widest">
              <AlertCircle size={14} /> Clinical Reality
            </p>
            <p className="text-xl text-slate-800 leading-tight font-bold">{current.pathA.description}</p>
          </div>

          <QoLIndicator score={current.pathA.qolScore} impactText={current.pathA.qolImpact} />
        </div>

        {/* Path B */}
        <div className="bg-blue-50 border-t-[8px] border-blue-600 p-8 rounded-3xl space-y-8 shadow-xl ring-8 ring-blue-50/50">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Path B: CKLM Lens</span>
            <h3 className="text-2xl font-black text-blue-900 tracking-tight">Early Metabolic Pathway</h3>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg ring-4 ring-blue-100 space-y-3">
            <p className="text-[10px] font-black text-blue-600 flex items-center gap-2 uppercase tracking-widest">
              <Sparkles size={14} /> Proactive Logic
            </p>
            <p className="text-xl text-blue-950 leading-tight font-black italic">{current.pathB.description}</p>
          </div>

          <QoLIndicator score={current.pathB.qolScore} impactText={current.pathB.qolImpact} isPathB />
        </div>
      </div>

      {/* Cost Strip */}
      <div className="bg-gray-900 text-white p-10 rounded-[2.5rem] flex flex-col xl:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
        
        <div className="flex items-center gap-8 relative z-10">
          <div className="bg-blue-600 p-5 rounded-2xl shadow-xl transform group-hover:rotate-6 transition-transform">
            <span className="text-4xl font-black text-white">₹</span>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">Annual Cost Range</h4>
            <div className="flex items-center gap-4">
              <span className="text-5xl md:text-6xl font-black tracking-tighter">{current.costBand}</span>
              <div className="flex gap-1.5">
                {current.sources.map(s => <SourceChip key={s} id={s} onClick={onOpenSource} />)}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 text-[10px] text-gray-500 font-black uppercase tracking-widest relative z-10 border-l border-gray-800 pl-10">
          <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div> Direct Medical</div>
          <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div> Non-Medical</div>
          <div className="flex items-center gap-3 text-white"><div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div> Indirect (Productivity)</div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
