import React from 'react';

interface PillProps {
  label: string;
  onClick: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white"
    >
      {label}
    </button>
  );
};

export default Pill;
