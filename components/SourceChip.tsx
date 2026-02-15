
import React from 'react';

interface SourceChipProps {
  id: string;
  onClick: (id: string) => void;
}

const SourceChip: React.FC<SourceChipProps> = ({ id, onClick }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className="inline-flex items-center px-1.5 py-0.5 ml-1 text-[10px] font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 transition-colors"
    >
      {id}
    </button>
  );
};

export default SourceChip;
