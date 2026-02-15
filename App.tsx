
import React, { useState } from 'react';
import { Tab, Source as SourceType } from './types';
import { SOURCES } from './constants';
import Landing from './screens/Landing';
import PatientProfile from './screens/PatientProfile';
import Journey from './screens/Journey';
import Dashboard from './screens/Dashboard';
import Modalities from './screens/Modalities';
import Evidence from './screens/Evidence';
import Export from './screens/Export';
import EvidenceDrawer from './components/EvidenceDrawer';
import { Stethoscope, AlertTriangle } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Journey');
  const [showLanding, setShowLanding] = useState(true);
  const [showPatient, setShowPatient] = useState(false);
  
  // Evidence Drawer State
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedSource, setSelectedSource] = useState<SourceType | null>(null);

  const openSource = (id: string) => {
    setSelectedSource(SOURCES[id] || null);
    setIsDrawerOpen(true);
  };

  const tabs: Tab[] = ['Journey', 'Costs', 'Modalities', 'Evidence', 'Export'];

  if (showLanding) {
    return <Landing onStart={() => {
      setShowLanding(false);
      setShowPatient(true);
    }} />;
  }

  if (showPatient) {
    return (
      <div className="min-h-screen pb-20 bg-slate-50 font-sans">
        <header className="bg-white border-b px-8 py-5 flex items-center gap-4 sticky top-0 z-50 shadow-sm">
          <div className="bg-blue-600 p-2 rounded-lg text-white shadow-md">
            <Stethoscope size={24} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-blue-900 uppercase">CKLM Simulator <span className="text-slate-400 text-sm normal-case ml-2 font-medium">| Patient Profile</span></h1>
        </header>
        <div className="py-12">
          <PatientProfile 
            onNext={() => setShowPatient(false)} 
            onOpenSource={openSource} 
          />
        </div>
        <EvidenceDrawer 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)} 
          source={selectedSource} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setShowLanding(true)}>
              <div className="p-2 bg-blue-600 rounded-lg shadow-lg group-hover:bg-blue-800 transition-colors">
                <Stethoscope className="text-white" size={22} />
              </div>
              <h1 className="text-lg font-bold tracking-tight hidden md:block text-blue-900 uppercase">CKLM Simulator</h1>
            </div>
            
            <nav className="flex items-center h-full gap-2">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center ${
                    activeTab === tab 
                    ? 'text-white bg-blue-600 shadow-md' 
                    : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-8 relative">
        {activeTab === 'Journey' && <Journey onOpenSource={openSource} />}
        {activeTab === 'Costs' && <Dashboard />}
        {activeTab === 'Modalities' && <Modalities onOpenSource={openSource} />}
        {activeTab === 'Evidence' && <Evidence />}
        {activeTab === 'Export' && <Export />}
      </main>

      {/* Footer / Disclaimers */}
      <footer className="bg-white border-t border-slate-200 py-10 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 text-xs text-slate-500">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-amber-600 font-bold mb-1 tracking-wider uppercase">
              <AlertTriangle size={14} />
              Legal Disclaimer
            </div>
            <p className="leading-relaxed">This Cost of Waiting Simulator is an educational resource intended for healthcare professionals only. Not for promotional purposes or direct patient consultation.</p>
            <p className="leading-relaxed">Projections are derived from peer-reviewed literature cited herein. Individual patient results may vary. No direct drug price comparison is intended.</p>
          </div>
          <div className="space-y-1 md:text-right text-slate-400">
            <p className="font-bold text-blue-900">© 2024 CKLM Medical Intelligence</p>
            <p>v1.1.0 • Data Update: Q3 2024</p>
          </div>
        </div>
      </footer>

      {/* Persistent Global Side Panels */}
      <EvidenceDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        source={selectedSource} 
      />
    </div>
  );
};

export default App;
