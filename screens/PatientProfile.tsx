
import React from 'react';
import { User, TrendingUp, ShieldCheck, ChevronRight, Scale, Clock, HeartPulse, Droplets } from 'lucide-react';
import SourceChip from '../components/SourceChip';

interface PatientProfileProps {
  onNext: () => void;
  onOpenSource: (id: string) => void;
}

const PatientProfile: React.FC<PatientProfileProps> = ({ onNext, onOpenSource }) => {
  const patientMetrics = [
    { label: 'Age', value: '52', unit: 'Years', icon: <Clock size={20} />, color: 'bg-slate-100', text: 'text-slate-600', sources: ['S201'] },
    { label: 'T2DM Duration', value: '8', unit: 'Years', icon: <HistoryIcon />, color: 'bg-amber-100', text: 'text-amber-600', sources: ['S201'] },
    { label: 'HbA1c', value: '7.8', unit: '%', icon: <Droplets size={20} />, color: 'bg-red-100', text: 'text-red-600', sources: ['S101'] },
    { label: 'BMI', value: '31.2', unit: 'kg/m²', icon: <Scale size={20} />, color: 'bg-blue-100', text: 'text-blue-600', sources: ['S119'] },
    { label: 'Prior CV Event', value: 'None', unit: '', icon: <HeartPulse size={20} />, color: 'bg-green-100', text: 'text-green-600', sources: ['S112'] },
  ];

  function HistoryIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>; }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left: Patient Summary */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-xl border border-slate-50 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-slate-900 rounded-xl text-white">
                <User size={28} />
              </div>
              <div className="space-y-0.5">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">Index Patient</h2>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Clinical Baseline</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {patientMetrics.map((metric, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2.5 rounded-xl ${metric.color} ${metric.text}`}>
                      {metric.icon}
                    </div>
                    <div className="flex gap-1">
                      {metric.sources.map(s => <SourceChip key={s} id={s} onClick={onOpenSource} />)}
                    </div>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{metric.label}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-gray-900">{metric.value}</span>
                      <span className="text-sm font-bold text-gray-400">{metric.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg flex flex-col justify-center">
                <p className="text-xs font-bold opacity-80 mb-1">Archetype</p>
                <h4 className="text-lg font-bold leading-tight">Metabolic Risk High-Prevalence Profile</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Path Selection */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="relative flex-1">
            <div className="relative p-6 bg-slate-50 border-2 border-slate-200 rounded-3xl grayscale hover:grayscale-0 transition-all flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-white rounded-xl shadow-sm text-slate-400">
                  <TrendingUp size={24} />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Path A</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Reactive Management</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">Standard escalation driven by therapy failure or symptomatic presentation.</p>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="relative p-6 bg-white border-2 border-blue-600 rounded-3xl shadow-xl ring-4 ring-blue-50/50 flex flex-col h-full transform transition-transform hover:scale-[1.01]">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg text-white">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Path B</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Proactive CKLM Lens</h4>
              <p className="text-sm text-gray-700 leading-relaxed font-bold">Interception targeting metabolic drivers before organ damage becomes irreversible.</p>
            </div>
          </div>

          <button
            onClick={onNext}
            className="group relative w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-6 rounded-3xl font-bold text-2xl hover:bg-blue-700 transition-all shadow-xl hover:scale-[1.02] active:scale-95"
          >
            Start Simulation <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
