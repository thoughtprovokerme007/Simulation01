
import React, { useState } from 'react';
import { MODALITIES } from '../constants';
import { Modality } from '../types';
import SourceChip from '../components/SourceChip';
import { CheckCircle, AlertCircle, Sparkles, Box, Zap, Target, Package } from 'lucide-react';

interface ModalitiesProps {
  onOpenSource: (id: string) => void;
}

const Modalities: React.FC<ModalitiesProps> = ({ onOpenSource }) => {
  const [selectedModality, setSelectedModality] = useState<Modality>('Rybelsus');
  const active = MODALITIES.find(m => m.id === selectedModality)!;

  const icons: Record<Modality, React.ReactNode> = {
    Rybelsus: <Box size={32} className="text-blue-600" />,
    Ozempic: <Zap size={32} className="text-indigo-600" />,
    Wegovy: <Target size={32} className="text-emerald-600" />,
  };

  const colors: Record<Modality, string> = {
    Rybelsus: 'from-blue-600 to-blue-800',
    Ozempic: 'from-indigo-600 to-indigo-800',
    Wegovy: 'from-emerald-600 to-emerald-800',
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-10">
      <div className="flex flex-wrap gap-4 justify-center">
        {MODALITIES.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelectedModality(m.id)}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-lg transition-all border-2 ${
              selectedModality === m.id
                ? 'bg-white border-blue-600 text-blue-600 shadow-lg scale-105'
                : 'bg-slate-50 border-transparent text-gray-400 hover:bg-white hover:border-slate-200'
            }`}
          >
            <div className={`${selectedModality === m.id ? 'opacity-100 scale-110' : 'opacity-40'} transition-all`}>
              {m.id === 'Rybelsus' && <Package size={18} />}
              {m.id === 'Ozempic' && <Zap size={18} />}
              {m.id === 'Wegovy' && <Target size={18} />}
            </div>
            {m.id}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-50">
        <div className={`p-10 bg-gradient-to-r ${colors[active.id]} text-white flex flex-col md:flex-row justify-between items-center gap-8`}>
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">{active.title}</h2>
            <p className="text-lg font-bold opacity-80 uppercase tracking-widest">{active.subtitle}</p>
          </div>
          <div className="p-8 bg-white/10 rounded-3xl backdrop-blur-xl border border-white/20 animate-pulse shrink-0">
            {icons[active.id]}
          </div>
        </div>

        <div className="p-10 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">Baseline</h3>
            </div>
            <div className="grid gap-4">
              {active.withoutCKLM.map((row, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 hover:bg-white hover:shadow-lg transition-all">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{row.row}</span>
                  <p className="text-lg font-bold text-gray-800 leading-tight">
                    {row.content}
                    {row.sources.map(s => <SourceChip key={s} id={s} onClick={onOpenSource} />)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-blue-600">
              <div className="p-3 bg-blue-50 rounded-xl">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Strategy Shift</h3>
            </div>
            <div className="grid gap-4">
              {active.withCKLM.map((row, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-blue-50/30 border border-blue-100 space-y-1 hover:bg-white hover:shadow-lg transition-all">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{row.row}</span>
                  <p className="text-lg font-black text-blue-900 leading-tight">
                    {row.content}
                    {row.sources.map(s => <SourceChip key={s} id={s} onClick={onOpenSource} />)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`px-10 py-8 bg-gradient-to-r ${colors[active.id]} flex items-center gap-6 text-white relative overflow-hidden`}>
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <Sparkles className="shrink-0" size={32} />
          <p className="font-black text-xl leading-snug relative z-10">{active.keyMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Modalities;
