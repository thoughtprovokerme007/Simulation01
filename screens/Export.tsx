
import React from 'react';
import { FileText, Layout, Download, Share2 } from 'lucide-react';

const Export: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 py-16 text-center">
      <div className="space-y-4">
        <h2 className="text-3xl font-black text-gray-900">Export Center</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Generate professional clinical-economic summaries based on your current simulator configuration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-dashed border-gray-300 hover:border-blue-400 transition-all cursor-pointer group">
          <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <FileText className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">PDF Slide Deck</h3>
          <p className="text-sm text-gray-500 mb-8">A multi-page walkthrough of the Dual Journey, perfect for clinical reviews.</p>
          <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600">
            <Download size={18} /> Download PDF
          </button>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-dashed border-gray-300 hover:border-blue-400 transition-all cursor-pointer group">
          <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <Layout className="text-green-600" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">1-Page Infographic</h3>
          <p className="text-sm text-gray-500 mb-8">A high-level visual summary of cost-offsets and metabolic interception logic.</p>
          <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600">
            <Download size={18} /> Download PNG
          </button>
        </div>
      </div>

      <div className="pt-12 flex items-center justify-center gap-6">
        <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold transition-colors">
          <Share2 size={20} /> Share Session Link
        </button>
      </div>
    </div>
  );
};

export default Export;
