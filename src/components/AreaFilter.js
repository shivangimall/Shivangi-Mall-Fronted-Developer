import React, { useState } from 'react';

const AreaFilter = ({ areas, onClose, onApply }) => {
  const [selectedAreas, setSelectedAreas] = useState([]);

  const handleAreaSelection = (area) => {
    const updatedSelectedAreas = selectedAreas.includes(area)
      ? selectedAreas.filter((selectedArea) => selectedArea !== area)
      : [...selectedAreas, area];
    setSelectedAreas(updatedSelectedAreas);
  };

  const handleApply = () => {
    onApply(selectedAreas);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center z-50 bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white p-6 m-5 rounded-md max-w-md relative overflow-y-auto shadow-lg">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Filter By Area</h2>
        <div>
          {areas.map((area) => (
            <div key={area} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={area}
                value={area}
                className="mr-2"
                checked={selectedAreas.includes(area)}
                onChange={() => handleAreaSelection(area)}
              />
              <label htmlFor={area} className="text-lg">{area}</label>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-red-900 text-white rounded-md hover:bg-red-800 focus:outline-none focus:bg-red-950"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreaFilter;

