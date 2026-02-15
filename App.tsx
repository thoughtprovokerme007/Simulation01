
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
      <div className="min-h-screen pb-20 bg-slate-50">
        <header className="bg-white border-b px-6 py-4 flex items-center gap-3 sticky top-0 z-50 shadow-sm">
          <Stethoscope className="text-blue-600" size={24} />
          <h1 className="text-xl font-bold tracking-tight uppercase">CKLM Simulator</h1>
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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setShowLanding(true)}>
              <div className="p-1.5 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Stethoscope className="text-blue-600" size={20} />
              </div>
              <h1 className="text-lg font-bold tracking-tight hidden md:block uppercase">CKLM Simulator</h1>
            </div>
            
            <nav className="flex items-center h-full gap-1">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 h-10 rounded-xl text-sm font-bold transition-all flex items-center ${
                    activeTab === tab 
                    ? 'text-blue-600 bg-blue-50 ring-1 ring-blue-100' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
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
      <footer className="bg-white border-t py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 text-xs text-gray-500">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-amber-600 font-bold mb-1 tracking-wider uppercase">
              <AlertTriangle size={14} />
              Legal Disclaimer
            </div>
            <p className="leading-relaxed">This Cost of Waiting Simulator is an educational resource intended for healthcare professionals only. Not for promotional purposes or direct patient consultation.</p>
            <p className="leading-relaxed">Projections are derived from peer-reviewed literature cited herein. Individual patient results may vary. No direct drug price comparison is intended.</p>
          </div>
          <div className="space-y-1 md:text-right text-gray-400">
            <p>© 2024 CKLM Medical Intelligence. v1.1.0</p>
            <p>Data Update: Q3 2024</p>
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
