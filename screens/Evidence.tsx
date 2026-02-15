
import React, { useState } from 'react';
import { Search, Filter, BookOpen, Copy } from 'lucide-react';
import { SOURCES } from '../constants';

const Evidence: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredSources = Object.values(SOURCES).filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by ID, keyword, or source name..."
            className="w-full pl-10 pr-4 py-3 bg-white border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-sm font-medium hover:bg-gray-50">
            <Filter size={16} /> All Segments
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredSources.map((source) => (
          <div key={source.id} className="bg-white p-6 rounded-2xl border shadow-sm group hover:border-blue-300 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-black rounded mb-2">
                  {source.id}
                </span>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{source.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{source.location}</p>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(source.citation);
                  alert('Citation copied!');
                }}
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                title="Copy Citation"
              >
                <Copy size={20} />
              </button>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-200">
              <p className="text-sm text-gray-700 leading-relaxed italic">"{source.excerpt}"</p>
            </div>
            
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-gray-400">
              <BookOpen size={12} />
              {source.citation}
            </div>
          </div>
        ))}

        {filteredSources.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No sources match your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Evidence;
