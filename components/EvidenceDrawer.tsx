
import React from 'react';
import { X, Copy, BookOpen } from 'lucide-react';
import { Source } from '../types';

interface EvidenceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  source: Source | null;
}

const EvidenceDrawer: React.FC<EvidenceDrawerProps> = ({ isOpen, onClose, source }) => {
  const handleCopy = () => {
    if (source) {
      navigator.clipboard.writeText(source.citation);
      alert('Citation copied to clipboard!');
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 md:w-96 bg-white shadow-2xl z-50 transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <BookOpen size={20} className="text-blue-600" />
          Evidence Detail
        </h2>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
          <X size={24} />
        </button>
      </div>

      <div className="p-6 overflow-y-auto h-[calc(100%-64px)]">
        {source ? (
          <div className="space-y-6">
            <section>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Source ID</label>
              <p className="text-2xl font-black text-blue-600">{source.id}</p>
            </section>

            <section>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Document Name</label>
              <p className="text-lg font-semibold text-gray-800 leading-tight">{source.name}</p>
            </section>

            <section>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location</label>
              <p className="text-sm text-gray-600 italic">{source.location}</p>
            </section>

            <section>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Excerpt</label>
              <div className="mt-1 p-3 bg-gray-50 border-l-4 border-blue-200 text-sm text-gray-700 leading-relaxed italic">
                "{source.excerpt}"
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Citation</label>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[10px] text-blue-600 hover:underline"
                >
                  <Copy size={12} /> Copy Text
                </button>
              </div>
              <p className="text-sm font-mono bg-gray-100 p-2 rounded text-gray-800">{source.citation}</p>
            </section>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <BookOpen size={48} className="mb-4 opacity-20" />
            <p>Click a Source ID to view evidence</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EvidenceDrawer;
