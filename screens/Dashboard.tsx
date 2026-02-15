
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { Wallet, Stethoscope, Briefcase, Users, TrendingDown, Landmark, ArrowDownCircle } from 'lucide-react';

const barData = [
  { name: 'Path A (Reactive)', total: 12.5, medical: 6.0, nonMedical: 2.5, indirect: 4.0 },
  { name: 'Path B (Proactive)', total: 4.8, medical: 2.5, nonMedical: 1.0, indirect: 1.3 },
];

const pieData = [
  { name: 'Direct Medical', value: 55, color: '#00355F' }, // Novo Navy
  { name: 'Direct Non-Medical', value: 20, color: '#D69E2E' }, // Amber/Gold
  { name: 'Indirect Costs', value: 25, color: '#4F87AD' }, // Muted Blue/Teal
];

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-10">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-0.5">
              <h3 className="text-2xl font-black text-blue-900 tracking-tight">Economic Divergence</h3>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">10-Year Cost (₹Lacs)</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
              <Landmark size={24} />
            </div>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                <defs>
                  <linearGradient id="colorPathA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#64748b" stopOpacity={0.8}/>
                  </linearGradient>
                  <linearGradient id="colorPathB" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00355F" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#002C4F" stopOpacity={0.9}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 700, fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc', radius: 10}} 
                  contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontSize: '12px' }}
                />
                <Bar dataKey="total" radius={[10, 10, 0, 0]} barSize={50}>
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? 'url(#colorPathA)' : 'url(#colorPathB)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center space-y-6 overflow-hidden border border-blue-800">
          <h3 className="text-lg font-black uppercase tracking-widest opacity-80">Distribution</h3>
          <div className="h-[180px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={5} dataKey="value" stroke="none">
                  {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-2xl font-black text-white">₹</span>
            </div>
          </div>
          <div className="w-full space-y-2">
             {pieData.map((cat, idx) => (
               <div key={idx} className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                 <div className="flex items-center gap-2">
                   <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }}></div>
                   <span>{cat.name}</span>
                 </div>
                 <span className="text-blue-200">{cat.value}%</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <Stethoscope size={24} />, title: "Direct Medical", desc: "Drug escalation, acute events, and consults.", bg: "bg-blue-50 text-blue-900" },
          { icon: <Users size={24} />, title: "Caregiver Burden", desc: "Transport, home care, and family hours.", bg: "bg-amber-50 text-amber-600" },
          { icon: <TrendingDown size={24} />, title: "Net Offset", desc: "Proactive care avoids downstream events.", bg: "bg-blue-600 text-white shadow-xl" }
        ].map((card, i) => (
          <div key={i} className={`p-8 rounded-3xl border border-slate-100 shadow-lg transition-transform hover:-translate-y-1 ${card.bg.includes('blue-600') ? 'bg-blue-600' : 'bg-white'}`}>
             <div className="flex flex-col gap-4">
                <div className={`p-3.5 rounded-2xl w-fit ${card.bg}`}>
                  {card.icon}
                </div>
                <div className="space-y-1">
                  <h4 className={`text-xl font-black tracking-tight ${card.bg.includes('white') ? 'text-white' : 'text-slate-900'}`}>{card.title}</h4>
                  <p className={`text-sm leading-relaxed ${card.bg.includes('white') ? 'text-white/80' : 'text-slate-500 font-medium'}`}>{card.desc}</p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
